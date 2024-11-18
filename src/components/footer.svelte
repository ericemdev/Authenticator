<script>
    export let onExport;
    export let onDelete;
    export let onCancel;

    let showPasswordForm = false;
    let fileName = '';  // Optional filename if needed
    let password = '';

    function handleExport() {
        showPasswordForm = true;
    }

    function handlePasswordSubmit() {
        onExport(password);  // Send password to App.svelte for encryption
        showPasswordForm = false;
        password = '';  // Clear after submission
    }

    function handleCancel() {
        showPasswordForm = false;
        password = '';
    }
</script>

<!-- Footer Buttons -->
<div class="dark:bg-[#263240] dark:text-primary fixed bottom-0 left-0 right-0 bg-white shadow-md py-4 flex justify-around items-center rounded">
    <button on:click={handleExport} class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path d="M7.25 10.25a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v5.69Z" />
            <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
        </svg>

        <span>Export</span>
    </button>
    <button on:click={onDelete} class="flex flex-col items-center text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clip-rule="evenodd" />
        </svg>

        <span>Delete</span>
    </button>
    <button on:click={onCancel} class="flex flex-col items-center text-fade dark:text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
        </svg>

        <span>Cancel</span>
    </button>
</div>

<!-- Password Modal Form -->
{#if showPasswordForm}
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
        <div class="bg-white w-80 p-6 rounded-lg shadow-2xl relative">
            <button on:click={handleCancel} class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110">
                &times;
            </button>

            <h2 class="text-xl font-semibold mb-3 text-gray-800 text-center">Enter Password to Export</h2>
            <p class="text-gray-600 text-sm text-center mb-6">Please enter the password for encryption.</p>

            <input
                    type="name"
                    bind:value={fileName}
                    placeholder="File Name"
                    class="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                    required
            >
            <input
                    type="password"
                    bind:value={password}
                    placeholder="Password"
                    class="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200 transition"
                    required
            />

            <div class="flex justify-between">
                <button on:click={handlePasswordSubmit} class="bg-tertiary text-white font-medium py-2 rounded-lg w-full hover:bg-gradient-to-l transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200">
                    Export
                </button>
            </div>
        </div>
    </div>
{/if}
