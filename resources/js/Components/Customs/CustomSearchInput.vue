<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div class="flex w-full justify-end pe-8">
        <div
            class="flex items-center bg-white shadow-md rounded-full p-4 h-10 space-x-2"
        >
            <input
                type="text m-0 text-sm font-light outline-none"
                placeholder="Search"
            />
            <MagnifyingGlassIcon class="h-6 w-6" />
        </div>
    </div>
</template>
