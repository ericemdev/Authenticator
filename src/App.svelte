<script>
    import { onMount, onDestroy } from 'svelte';
    import Sidebar from './components/sidebar.svelte';
    import List from './components/list.svelte';
    import Otp from './components/otp.svelte';
    import Footer from './components/footer.svelte';
    import OTP from './totp.js';
    import CryptoJS from 'crypto-js';
    import './style.css';

    // State variables
    let codes = JSON.parse(localStorage.getItem('codes')) || [];
    let selectedCount = 0;
    let showFooter = false;
    let showExportPopup = false;
    let showImportPopup = false;
    let exportPassword = '';
    let importPassword = '';
    let fileName = '';
    let showDeletePopup = false;
    let codeToDelete = null;
    let intervals = [];

    const OTP_INTERVAL = 30;

    // Save codes to localStorage and update footer visibility
    $: {
        localStorage.setItem('codes', JSON.stringify(codes));
        showFooter = codes.some(code => code.selected);
    }

    // Function to copy OTP to clipboard
    const copyToClipboard = async (otp) => {
        try {
            await navigator.clipboard.writeText(otp);
            alert('OTP copied to clipboard');
        } catch (err) {
            alert('Failed to copy OTP: ' + err.message);
        }
    };

    // Function to cancel all selections
    const cancelSelection = () => {
        codes = codes.map(code => ({ ...code, selected: false }));
        selectedCount = 0;
    };

    // Function to add a new generated code
    const addGeneratedCode = (newCode) => {
        const token = new OTP(newCode.secret);
        codes = [
            ...codes,
            {
                id: Date.now(),
                ...newCode,
                selected: false,
                code: token.getToken(),
                remainingTime: Math.floor(token.getRemainingSeconds())
            }
        ];
        startTimer(codes.length - 1);
    };

    // Function to start the timer for a code
    const startTimer = (index) => {
        const intervalId = setInterval(() => {
            codes = codes.map((code, i) => {
                if (i === index) {
                    const token = new OTP(code.secret);
                    return {
                        ...code,
                        code: token.getToken(),
                        remainingTime: Math.floor(token.getRemainingSeconds())
                    };
                }
                return code;
            });
        }, 1000);
        intervals.push(intervalId);
    };

    // Function to toggle selection of a code
    const toggleSelection = (id) => {
        codes = codes.map(code =>
            code.id === id ? { ...code, selected: !code.selected } : code
        );
    };

    // Function to backup selected codes
    const backup = (password) => {
        const codesToBackup = codes.filter(code => code.selected);

        if (codesToBackup.length === 0) {
            alert("No codes selected for backup!");
            return;
        }

        const links = codesToBackup
            .map(code => `otpauth://totp/${encodeURIComponent(code.issuer)}?secret=${encodeURIComponent(code.secret)}&issuer=${encodeURIComponent(code.issuer)}`)
            .join("\n");

        try {
            const encryptedData = CryptoJS.AES.encrypt(links, password).toString();
            const blob = new Blob([encryptedData], { type: "text/plain" });
            const url = URL.createObjectURL(blob);

            const downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = `${fileName || "backup"}.txt`;
            document.body.appendChild(downloadLink);
            downloadLink.click();

            URL.revokeObjectURL(url);
            document.body.removeChild(downloadLink);

            alert("Backup successful!");
        } catch (error) {
            console.error("Backup error:", error);
            alert("An error occurred during the backup process.");
        }
    };

    // Function to sync selected codes with Google
    const syncWithGoogle = () => {
        const selectedCodes = codes.filter(code => code.selected);
        if (selectedCodes.length) {
            console.log('Syncing with Google:', selectedCodes);
            alert('Google Sync initiated for selected codes.');
        } else alert('No codes selected for syncing.');
    };

    // Function to restore codes from backup
    const restore = (password) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "text/plain";

        input.onchange = () => {
            const file = input.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                try {
                    const encryptedData = reader.result;
                    const decryptedData = CryptoJS.AES.decrypt(encryptedData, password).toString(CryptoJS.enc.Utf8);

                    if (!decryptedData) {
                        throw new Error("Decryption failed. Check your password or file.");
                    }

                    const links = decryptedData.split("\n");
                    const newCodes = links.map(link => {
                        const url = new URL(link);
                        const issuer = url.searchParams.get("issuer");
                        const secret = url.searchParams.get("secret");
                        return issuer && secret ? { issuer, secret } : null;
                    }).filter(code => code !== null);

                    codes = [...codes, ...newCodes];
                    localStorage.setItem("codes", JSON.stringify(codes));
                    alert("Restore successful!");
                } catch (error) {
                    console.error("Restore error:", error);
                    alert("Invalid password or corrupted file!");
                }
            };

            reader.readAsText(file);
        };

        input.click();
    };

    // Function to delete a single code
    const deleteSingleCode = (id) => {
        if (confirm('Are you sure you want to delete this code?')) {
            codes = codes.filter(code => code.id !== id);
            alert('Code deleted');
        }
    };

    // Function to delete all selected codes
    const deleteSelected = () => {
        if (confirm('Are you sure you want to delete all selected codes?')) {
            codes = codes.filter(code => !code.selected);
            selectedCount = 0;
            alert('Selected codes deleted');
        }
    };

    // Function to confirm delete action
    const confirmDelete = () => {
        if (codeToDelete) {
            codes = codes.filter(code => code.id !== codeToDelete);
            alert('Code deleted');
        }
        showDeletePopup = false;
        codeToDelete = null;
    };

    // Toggle visibility of export popup
    const toggleExportPopup = () => {
        showExportPopup = !showExportPopup;
    };

    // Toggle visibility of import popup
    const toggleImportPopup = () => {
        showImportPopup = !showImportPopup;
    };

    // Select all codes
    const selectAll = () => {
        const allSelected = codes.every(code => code.selected);
        codes = codes.map(code => ({ ...code, selected: !allSelected }));
    };

    // Deselect all codes
    const deselectAll = () => {
        codes = codes.map(code => ({ ...code, selected: false }));
    };

    // Initialize codes on component mount
    onMount(() => {
        const storedCodes = JSON.parse(localStorage.getItem('codes'));
        if (storedCodes) {
            codes = storedCodes.map(code => {
                const token = new OTP(code.secret);
                return {
                    ...code,
                    selected: false,
                    code: token.getToken(),
                    remainingTime: Math.floor(token.getRemainingSeconds())
                };
            });
        }
    });

    // Clear intervals on component destroy
    onDestroy(() => {
        intervals.forEach(clearInterval);
    });
</script>

<main class="min-h-screen dark:bg-[#192734] bg-[#f5f8fa]">
    <div class="flex flex-col md:flex-row">
        <Sidebar {codes} onExport={backup} onGoogleSync={syncWithGoogle} onImport={restore} onToggleExportPopup={toggleExportPopup} onToggleImportPopup={toggleImportPopup} />
        <div class="flex-1 p-4 order-1 md:order-none">
            <Otp onGenerate={addGeneratedCode} {showFooter} />
            <List
                    {codes}
                    onToggleSelection={toggleSelection}
                    onCopy={copyToClipboard}
                    on:selectionChanged={(event) => {
                    showFooter = event.detail.selectedCodes.length > 0;
                }}
            />
            {#if showFooter}
                <Footer onDelete={deleteSelected} onCancel={deselectAll} onExport={backup} />
            {/if}
        </div>
    </div>

    {#if showExportPopup}
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div class="bg-white w-80 p-6 rounded-lg shadow-2xl relative transition-transform transform hover:scale-105 dark:bg-[#2A3B47] ">
                <button on:click={toggleExportPopup} class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110" aria-label="Close Export Popup">
                    &times;
                </button>

                <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-primary text-center">Export Your Codes</h2>
                <p class="text-gray-600 text-sm text-center mb-6">Secure your codes before exporting by adding a password.</p>
                <input type="text" placeholder="Name your file" autocomplete="off" bind:value={fileName} class="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:bg-[#2A3B47]"  required>
                <input type="password" placeholder="Password" autocomplete="off" bind:value={exportPassword} class="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:bg-[#2A3B47]" required/>
                <button on:click={() => backup(exportPassword)} class="bg-tertiary text-white font-medium py-2 rounded-lg w-full hover:bg-gradient-to-l transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200">
                    Export Selected
                </button>
            </div>
        </div>
    {/if}

    {#if showImportPopup}
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div class="bg-white w-80 p-6 rounded-lg shadow-2xl relative transition-transform transform hover:scale-105 dark:bg-[#2A3B47] ">
                <button on:click={toggleImportPopup} class="absolute top-3 right-3 text-gray-500 dark:text-primary hover:text-gray-700 transition-transform transform hover:scale-110" aria-label="Close Import Popup">
                    &times;
                </button>

                <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-primary text-center">Import Your File</h2>
                <p class="text-gray-600 text-sm text-center mb-6">Enter the password you set during export to access the file.</p>
                <input type="password" placeholder="Password" autocomplete="off" bind:value={importPassword} class="w-full p-3 bg-gray-100 dark:bg-[#2A3B47] dark:text-primary rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition"/>
                <input type="file" on:change={() => restore(importPassword)} class="bg-tertiary text-white font-medium py-2 rounded-lg w-full bg-gray-100 dark:bg-[#2A3B47] transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200">
            </div>
        </div>
    {/if}

    <!-- Delete Confirmation Popup -->
    {#if showDeletePopup}
        <div class="dark:bg-[#2A3B47] fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div class="bg-white w-80 p-6 rounded-lg shadow-2xl relative transition-transform transform hover:scale-105">
                <button on:click={() => showDeletePopup = false} class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110" aria-label="Close Delete Popup">
                    &times;
                </button>

                <h2 class="text-xl font-semibold mb-3 text-gray-800 text-center">Confirm Deletion</h2>
                <p class="text-gray-600 text-sm text-center mb-6">Are you sure you want to delete this code? This action cannot be undone.</p>

                <div class="flex justify-between">
                    <button on:click={confirmDelete} class="bg-red-600 text-white font-medium py-2 rounded-lg w-full mr-2 hover:bg-red-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-200">
                        Yes, Delete
                    </button>
                    <button on:click={() => showDeletePopup = false} class="bg-gray-300 text-gray-800 font-medium py-2 rounded-lg w-full hover:bg-gray-200 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    {/if}
</main>

