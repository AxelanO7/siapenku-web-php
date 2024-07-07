<script setup>
import { defineProps } from "vue";

defineProps(["title", "description", "shortDescription", "cardRoute"]);
const goToRoute = (route) => {
    window.location.href = route;
};
</script>

<template>
    <div class="card bg-blue-50 shadow-xl w-full h-max">
        <div class="card-body">
            <h2 class="card-title">
                {{ title }}
            </h2>
            <p>{{ description }}</p>
            <p>{{ shortDescription }}</p>
            <div class="card-actions">
                <p
                    class="cursor-pointer transition duration-300 ease-in-out hover:text-blue-500 text-right"
                    @click="goToRoute(cardRoute)"
                >
                    Lihat >>>
                </p>
            </div>
        </div>
    </div>
</template>
