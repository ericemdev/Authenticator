<script>
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    import OTP from '../totp.js';

    const dispatch = createEventDispatcher();

    export let codes = [];
    export let onToggleSelection;
    export let onDelete;
    export let onCopy;

    let pressTimer = null;
    let copyingId = null;
    let intervalId;
    let showSelectAll = false;
    let selectedCodes = new Set();

    // Function to update the OTP codes and their remaining time
    const updateOTP = () => {
        codes = codes.map(code => {
            const token = new OTP(code.secret);
            return {
                ...code,
                code: token.getToken(),
                remainingTime: Math.floor(token.getRemainingSeconds())
            };
        });
    };

    const handleToggleSelection = (id) => {
        if (selectedCodes.has(id)) {
            selectedCodes.delete(id);
        } else {
            selectedCodes.add(id);
        }
        showSelectAll = selectedCodes.size > 0;
        onToggleSelection(id);
        dispatch('selectionChanged', { selectedCodes: Array.from(selectedCodes) });
    };

    const handleSelectAll = () => {
        if (selectedCodes.size === codes.length) {
            selectedCodes.clear();
        } else {
            codes.forEach(code => selectedCodes.add(code.id));
        }
        showSelectAll = selectedCodes.size > 0;
        dispatch('selectionChanged', { selectedCodes: Array.from(selectedCodes) });
    };

    const handleLongPressStart = (id) => {
        pressTimer = setTimeout(() => {
            selectedCodes.add(id);
            showSelectAll = true;
        }, 800);
    };

    const handleLongPressEnd = () => {
        clearTimeout(pressTimer);
    };

    const handleCopy = (id, otp) => {
        copyingId = id;
        onCopy(otp);
        setTimeout(() => copyingId = null, 1500);
    };

    onMount(() => {
        updateOTP();
        intervalId = setInterval(updateOTP, 1000); // Update OTP codes every second
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });

    $: sortedCodes = [...codes].sort((a, b) => a.issuer.localeCompare(b.issuer));
    $: showSelectAll = selectedCodes.size > 0 && selectedCodes.size < codes.length;
    $: dispatch('selectionChanged', { selectedCodes: Array.from(selectedCodes) });
</script>

<div class="md:p-4">
    {#if showSelectAll}
        <div class="flex items-center mb-4">
            <input
                    type="checkbox"
                    on:change={handleSelectAll}
                    checked={selectedCodes.size === codes.length}
                    class="mr-2"
            />
            <label for="select-all">Select All</label>
        </div>
    {/if}
    <div class="md:container grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each sortedCodes as code, index (code.id || `code-${index}`)}
            <div
                    on:mousedown={() => handleLongPressStart(code.id)}
                    on:mouseup={handleLongPressEnd}
                    on:touchstart={() => handleLongPressStart(code.id)}
                    on:touchend={handleLongPressEnd}
                    class={`relative p-4 rounded-xl flex flex-col justify-between space-y-2
                ${selectedCodes.has(code.id) ? 'bg-blue-100 dark:bg-gray-800' : 'bg-gray-100 dark:bg-[#2A3B47] dark:shadow-md dark:text-primary'}`}
            >
                <!-- My Timer display -->
                <div class="absolute top-2 right-2 text-sm text-gray-500 font-medium">
                    {code.remainingTime}s
                </div>

                <!-- Issuer, code, and other details -->
                <div class="flex flex-col space-y-1">
                    <div class="flex items-center">
                        <input
                                type="checkbox"
                                checked={selectedCodes.has(code.id)}
                                on:change={() => handleToggleSelection(code.id)}
                                class="h-3 w-3 rounded-full border-2 border-tertiary checked:bg-tertiary checked:border-tertiary mr-2"
                        />
                        <p class="font-semibold text-xl truncate dark:text-primary">{code.issuer}</p>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="text-tertiary text-2xl pl-5 font-bold">{code.code}</p>
                        <button on:click={() => handleCopy(code.id, code.code)} class="ml-2">
                            {#if copyingId === code.id}
                                <span class="text-xs text-gray-500">Copied!</span>
                            {:else}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z" clip-rule="evenodd"/>
                                    <path fill-rule="evenodd" d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"/>
                                </svg>
                            {/if}
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

