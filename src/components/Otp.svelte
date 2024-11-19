<script>
    import { onMount, onDestroy } from 'svelte';
    import generateOTP from '../totp.js';
    import { Html5QrcodeScanner } from "html5-qrcode";

    export let showFooter = false;

    onMount(() => {
        loadFromLocalStorage();
    });

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

    function generateCode() {
        try {
            const generator = new generateOTP(secret, 30);
            const otp = generator.getToken();

            // Create new code object and push it to the codes array
            const newCode = { issuer, secret, otp, viewed: false, id: codes.length + 1 };
            codes = [...codes, newCode];

            // Save the updated codes array to local storage
            saveToLocalStorage(codes);
            onGenerate(newCode);
            issuer = '';
            secret = '';
            showForm = false;

        } catch (error) {
            alert('Error generating OTP: ' + error.message);
        }
    }

    const toggleForm = () => {
        showForm = !showForm;
    }

    function viewOnceCode() {
        try {
            const generator = new generateOTP(secret, 30);
            const otp = generator.getToken();

            // Set the temporary OTP and show the modal
            tempCode = otp;
            showModal = true;
            issuer = '';
            secret = '';
            showForm = false;

        } catch (error) {
            alert('Error generating OTP: ' + error.message);
        }
    }


    function closeModal() {
        showModal = false;
        tempCode = null;
    }


    const scan = () => {
        scanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10, qrbox: { width: 250, height: 250 } },
            false
        );

        scanner.render(
            (scanned) => {
                code.issuer = scanned.split("totp/")[1]?.split("?")[0];
                code.secret = scanned.split("secret=")[1]?.split("&")[0];
                code.name = scanned.split("issuer=")[1]?.split("&")[0] || code.issuer;
                scanner.clear();
            },
            (error) => {
                console.error(error);
                alert("Failed to scan QR code. Please try again.");
            }
        );
    };

    onDestroy(() => {
        scanner?.clear();
    });

    function viewCode(id) {
        codes = codes.map(code => {
            if (code.id === id && !code.viewed) {
                code.viewed = true;
            }
            return code;
        });
    }

    const saveToLocalStorage = (codes) => {
        localStorage.setItem('codes', JSON.stringify(codes));
    };

    const loadFromLocalStorage = () => {
        const storedCodes = JSON.parse(localStorage.getItem('codes'));
        if (storedCodes) {
            codes = storedCodes;
        }
    };
</script>

<button
        on:click={toggleForm}
        class="fixed right-6  rounded-full text-white p-2 z-[50]"
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
            <button on:click={toggleForm}
                    class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110">
                &times;
            </button>

            <h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-primary text-center">Add New Code</h2>
            <p class="text-gray-600 dark:text-primary text-sm text-center mb-6">
                Enter the issuer and secret to create a new OTP code.
            </p>

            <input type="text" bind:value={issuer} placeholder="Issuer" required
                   class="w-full p-3 bg-gray-100 dark:bg-[#2A3B47] border  text-gray-800 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-green-200 transition"/>

            <input type="text" bind:value={secret} placeholder="Secret" required
                   class="w-full p-3 bg-gray-100 dark:bg-[#2A3B47]  text-gray-800 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition"/>
            <p class="text-gray-600 text-sm text-center mb-6">
                or Scan Qr Code
            </p>
            <div id="reader"></div>
            <button on:click={scan} class="mt-4  text-white px-4 py-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 0 1 3 9.375v-4.5ZM4.875 4.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5ZM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5C3.84 21 3 20.16 3 19.125v-4.5ZM4.875 14.25a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 14.625 21 15.465 21 16.5v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 0 1-1.875-1.875v-4.5Zm1.875-.375a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375h-4.5Z" clip-rule="evenodd" />
                </svg>
            </button>
            <div class="flex justify-center space-x-4 mt-6">
                <button on:click={viewOnceCode} class="bg-primary text-gary-800 font-medium py-3 px-6 rounded-lg  transition-transform transform hover:bg-secondary">
                    View Once
                </button>

                <button on:click={generateCode} class="bg-green-600 text-white font-medium py-3 px-6 rounded-lg  transition-transform transform hover:bg-green-700">
                    Save
                </button>
            </div>


        </div>
    </div>
{/if}

{#if showModal}
    <div class="fixed inset-0 bg-gray-800 dark:bg-[#15202b] bg-opacity-75 flex justify-center items-center z-50">
        <div class="bg-white text-gray-800 w-80 p-6 rounded-lg shadow-2xl relative">
            <button on:click={closeModal} class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110">
                &times;
            </button>

            <h2 class="text-xl font-semibold mb-4 text-gray-800 text-center">One-Time Code</h2>
            <p class="text-gray-700 text-center text-lg mb-4">{tempCode}</p>

            <button on:click={closeModal} class="w-full text-white px-4 py-2 rounded-lg bg-red-500 hover:bg-red-700 transition">
                Close
            </button>
        </div>
    </div>
{/if}
