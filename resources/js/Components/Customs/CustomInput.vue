<script setup>
import { defineProps } from "vue";

defineProps({
    label: String,
    type: String,
    value: String,
});
</script>

<template>
    <div class="text-left flex flex-col">
        <label class="text-base font-bold">
            {{ label }}
        </label>

        <select
            v-if="type === 'radio'"
            :v-model="value"
            class="rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring-blue-400 focus:ring-opacity-50"
        >
            <option value="l">Laki-laki</option>
            <option value="p">Perempuan</option>
        </select>

        <input
            v-else-if="type === 'file'"
            type="file"
            :name="label"
            :placeholder="label"
            :class="`${'text-sm'}`"
        />

        <input
            v-else
            :type="type"
            :v-model="value"
            :placeholder="label"
            :class="`${'rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring-blue-400 focus:ring-opacity-50'} `"
        />
    </div>
</template>
