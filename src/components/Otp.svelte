<script>
    import { onMount, onDestroy } from 'svelte';
    import generateOTP from '../totp.js';
    import { Html5QrcodeScanner } from 'html5-qrcode';

    export let showFooter = false;
    export let onGenerate;

    let issuer = '';
    let secret = '';
    let code = { issuer: '', secret: '', name: '' };
    let showForm = false;
    let codes = [];
    let scanner;


    // view once
    let tempCode = null;
    let showModal = false;

    // Initialize code scanning and local storage loading
    onMount(() => {
        loadFromLocalStorage();
        initializeScanner();
    });

    onDestroy(() => {
        scanner?.clear();
    });

    // Load OTP codes from localStorage
    const loadFromLocalStorage = () => {
        const storedCodes = JSON.parse(localStorage.getItem('codes'));
        if (storedCodes) {
            codes = storedCodes;
        }
    };

    // Save OTP codes to localStorage
    const saveToLocalStorage = (codes) => {
        localStorage.setItem('codes', JSON.stringify(codes));
    };

    // Generate a new OTP code
    function generateCode() {
        try {
            const generator = new generateOTP(secret, 30);
            const otp = generator.getToken();

            // Create new code object and add to the list
            const newCode = { issuer, secret, otp, viewed: false, id: codes.length + 1 };
            codes = [...codes, newCode];

            // Save to localStorage
            saveToLocalStorage(codes);

            // Notify the parent component
            onGenerate(newCode);

            // Reset the form fields
            resetForm();
        } catch (error) {
            alert('Error generating OTP: ' + error.message);
        }
    }

    // Reset the form fields after generating a new OTP
    const resetForm = () => {
        issuer = '';
        secret = '';
        showForm = false;
    };

    // Toggle the visibility of the OTP creation form
    const toggleForm = () => {
        showForm = !showForm;
    };

    // Generate and show a one-time OTP code in a modal
    function viewOnceCode() {
        try {
            const generator = new generateOTP(secret, 30);
            const otp = generator.getToken();

            // Display the OTP code in the modal
            tempCode = otp;
            showModal = true;

            // Reset form
            resetForm();
        } catch (error) {
            alert('Error generating OTP: ' + error.message);
        }
    }

    // Close the modal
    function closeModal() {
        showModal = false;
        tempCode = null;
    }

    // Initialize the QR code scanner
    function initializeScanner() {
        console.log('Initializing QR code scanner...');
        scanner = new Html5QrcodeScanner(
            'reader',
            { fps: 10, qrbox: { width: 250, height: 250 } },
            false
        );
    }

    // Start scanning a QR code
    function scan() {
        if (!scanner) {
            initializeScanner();
        }
        console.log('Starting QR code scanner...');
        scanner.render(
            (scannedText) => {
                console.log('Scanned text:', scannedText);
                const params = new URLSearchParams(scannedText.split('?')[1]);
                code.issuer = params.get('issuer') || '';
                code.secret = params.get('secret') || '';
                code.name = code.issuer || code.secret;
                scanner.clear(); // Clear the scanner after a successful scan
            },
            (error) => {
                console.error('Scan error:', error);
                alert('Failed to scan QR code. Please try again.');
            }
        );
    }

    function viewCode(id) {
        codes = codes.map(code => {
            if (code.id === id && !code.viewed) {
                code.viewed = true;
            }
            return code;
        });
    };
</script>

<button
        on:click={toggleForm}
        class="fixed right-6 rounded-full text-white p-2 z-[50]"
        class:bottom-6={!showFooter}
        class:bottom-20={showFooter}
        aria-label="Toggle Button"
>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-16 h-16">
        <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clip-rule="evenodd"
        />
    </svg>
</button>

{#if showForm}
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div class="bg-white dark:bg-[#15202b] text-gray-800 w-80 p-6 rounded-lg shadow-2xl relative">
            <button on:click={toggleForm} class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110">
                &times;
            </button>

            <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-primary text-center">Add New Code</h2>
            <p class="text-gray-600 dark:text-primary text-sm text-center mb-6">
                Enter the issuer and secret to create a new OTP code.
            </p>

            <input type="text" bind:value={issuer} placeholder="Issuer" required
                   class="w-full p-3 bg-gray-100 dark:bg-[#2A3B47] border text-gray-800 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:border-[#121212] dark:text-primary"/>

            <input type="text" bind:value={secret} placeholder="Secret" required
                   class="w-full p-3 bg-gray-100 dark:bg-[#2A3B47] text-gray-800 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition dark:border-[#121212]"/>

            <p class="text-gray-600 text-sm text-center mb-6">or Scan QR Code</p>

            <!-- QR code scanner div -->
            <div id="reader"></div>
            <button on:click={scan} class="mt-4 text-white px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 9.375v-4.5ZM4.875 4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5C3.84 21 3 20.16 3 19.125v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM18.75 15.375c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Z"/>
                </svg>
                Scan QR Code
            </button>



            <button on:click={viewOnceCode} class="bg-primary text-gary-800 font-medium py-3 px-6 rounded-lg  transition-transform transform hover:bg-secondary">
                View Once
            </button>

            <button on:click={generateCode} class="mt-4 text-white bg-green-500 px-4 py-2 rounded-lg">
                Save
            </button>
        </div>
    </div>
{/if}

<!-- Modal for displaying the OTP code -->
{#if showModal}
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div class="bg-white dark:bg-[#15202b] text-gray-800 w-80 p-6 rounded-lg shadow-2xl">
            <button on:click={closeModal} class="absolute text-white px-4 py-2 rounded-lg transition">
                x
            </button>
            <h3 class="text-xl font-semibold mb-3 text-center">One-Time OTP Code</h3>
            <div class="text-center text-lg">{tempCode}</div>
            <button on:click={closeModal} class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110">
                &times;
            </button>
        </div>
    </div>
{/if}

