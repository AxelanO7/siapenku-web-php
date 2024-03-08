<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["title", "route", "icon", "children"]);
const windowWidth = ref(window.innerWidth);
window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
});
</script>

<template>
    <div tabIndex="{0}" class="collapse border border-base-300 cursor-pointer">
        <div
            class="collapse-title hover:bg-[#7a9c3e] flex items-center space-x-4 hover:text-white"
        >
            <icon class="h-6 w-6" />
            <p>{{ title }}</p>
        </div>

        <div class="collapse-content px-0">
            <p
                v-for="child in children"
                :key="child.title"
                class="flex items-center hover:bg-[#7a9c3e] px-4"
                @click="$router.push(child.route)"
            >
                {{ child.title }}
            </p>
        </div>
    </div>
</template>
