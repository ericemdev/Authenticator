<script>
    import GoogleSyncButton from './GoogleSync.svelte';
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
                <GoogleSyncButton />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Backup" width="40" height="40">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z" fill="#34a853" class="color000000 svgShape"></path>
                </svg>

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
                    <GoogleSyncButton />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Backup" width="30" height="30">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zM8 13h2.55v3h2.9v-3H16l-4-4z" fill="#34a853" class="color000000 svgShape"></path>
                    </svg>
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
