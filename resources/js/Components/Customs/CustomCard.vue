<script setup>
import { defineProps } from "vue";

defineProps(["title", "description", "shortDescription", "route"]);
</script>

<template>
    <div class="card bg-[#d0f0c0] shadow-xl w-full h-max">
        <div class="card-body">
            <h2 class="card-title">
                {{ title }}
            </h2>
            <p>{{ description }}</p>
            <p>{{ shortDescription }}</p>
            <div class="card-actions">
                <p
                    class="cursor-pointer transition duration-300 ease-in-out hover:text-green-600 text-right"
                    @click="$router.push(route)"
                >
                    Lihat >>>
                </p>
            </div>
        </div>
    </div>
</template>
