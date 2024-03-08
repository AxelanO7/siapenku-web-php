<script setup>
import { defineProps } from "vue";

defineProps({
    label: String,
    type: String,
    value: String,
});
</script>

<template>
    <div class="flex space-x-4 items-center">
        <label class="text-sm font-medium text-gray-700 w-1/4 text-left">
            {{ label }}
        </label>
        :
        <div class="w-full">
            <input
                :type="type"
                :value="value"
                :class="`mt-1 block rounded-md border-gray-300 shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:ring-opacity-50 
            ${type === 'file' ? 'w-max file-input ' : 'w-full'} `"
            />
        </div>
    </div>
</template>
