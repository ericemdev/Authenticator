<script>
    export let codes = [];
    export let onExport;
    export let onGoogleSync;
    export let onImport;
    export let onToggleExportPopup;
    export let onToggleImportPopup;
    export let darkMode = false;

    let showPopup = false;

    const toggleDarkMode = () => {
        darkMode = !darkMode;
        document.documentElement.classList.toggle('dark', darkMode);
        showPopup = false;
    };

    function restore() {
        onToggleImportPopup && onToggleImportPopup();
        showPopup = false;
    }

    function backup() {
        onToggleExportPopup && onToggleExportPopup();
        showPopup = false;
    }

    const togglePopup = () => {
        showPopup = !showPopup;
    };
</script>

<aside class="{darkMode ? 'dark:bg-[#15202b] text-secondary' : 'bg-primary text-gray-800'} hidden lg:flex flex-col justify-between w-1/5 min-h-screen shadow-lg p-4">
    <div>
        <div class="text-[#008000] space-x-2 dark:text-primary text-lg font-bold mb-8">AUTHENTICATOR</div>
        <ul class="space-y-4 mt-4">
            <li class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-yellow-100 border-b cursor-pointer dark:border-[#121212]">
                <button on:click={onGoogleSync} class="w-full text-left text-lg">Google Sync</button>
            </li>
            <li class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-[#121212]">
                <button on:click={restore} class="w-full text-left text-lg">Import</button>
            </li>
            <li class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 border-b dark:border-[#121212]">
                <button on:click={backup} class="w-full text-left text-lg">Export</button>
            </li>
        </ul>
    </div>
    <div class="flex justify-start items-center pt-4 pl-6 border-t border-gray-300 dark:border-[#121212]">
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={darkMode} on:change={toggleDarkMode} class="sr-only">
            <div class="toggle-bg">
                <div class="dot"></div>
            </div>
            <span class="ml-3 text-sm font-medium text-lg text-gray-900 dark:text-gray-300">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
        </label>
    </div>
</aside>

<!-- Mobile Navigation for small screens -->
<header class="{darkMode ? 'bg-primaryDark text-white' : 'bg-primary text-[#0d0c22]'} lg:hidden w-full flex items-center justify-between p-4 shadow">
    <h1 class="text-xl font-semibold uppercase text-tertiary dark:text-primary">Authenticator</h1>
    <button on:click={togglePopup} class="text-2xl {darkMode ? 'text-white' : 'text-[#0d0c22]'}">&#9776;</button>
</header>


{#if showPopup}
    <div class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center lg:hidden">
        <div class="{darkMode ? 'bg-gray-900 text-white' : 'bg-primary text-gray-800'} w-3/4 p-4 rounded-lg shadow-lg">
            <button on:click={togglePopup} class="text-gray-500 dark:text-gray-400 self-end text-2xl">&times;</button>
            <ul class="space-y-4 mt-4">
                <li class="flex items-center space-x-2 p-2 rounded-md border-b dark:border-black cursor-pointer">
                    <button on:click={onGoogleSync} class="w-full text-left">Google Sync</button>
                </li>
                <li class="flex items-center space-x-2 p-2 rounded-md border-b dark:border-[#121212]">
                    <button on:click={restore} class="w-full text-left">Import</button>
                </li>
                <li class="flex items-center space-x-2 p-2 rounded-md border-b dark:border-[#121212]">
                    <button on:click={backup} class="w-full text-left">Export</button>
                </li>
                <li class="flex items-center space-x-2 rounded-md border-b dark:border-[#121212]">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={darkMode} on:change={toggleDarkMode} class="sr-only peer">
                        <div class="toggle-bg peer-checked:bg-tertiary">
                            <div class="dot peer-checked:translate-x-4"></div>
                        </div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
{/if}


