<script setup>
import { defineProps, ref } from "vue";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@sc/components/ui/popover";

const props = defineProps(["title", "sidebarRoute", "icon"]);
const windowWidth = ref(window.innerWidth);
window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
});
const goToRoute = (route) => {
    window.location.href = route;
};

const submissionList = [
    {
        title: "Surat Keterangan Umum",
        route: "/submission/general-letter",
    },
    {
        title: "Kelahiran",
        route: "/submission/birth-letter",
    },
    {
        title: "Kematian",
        route: "/submission/death-letter",
    },
];
</script>

<template>
    <Popover v-if="title === 'Pengajuan'">
        <PopoverTrigger
            class="w-full collapse border border-base-300 cursor-pointer"
        >
            <div
                class="collapse-title hover:bg-blue-500 flex items-center space-x-4 hover:text-white"
            >
                <icon class="h-6 w-6" />
                <p>{{ title }}</p>
            </div>
        </PopoverTrigger>
        <PopoverContent class="w-full bg-slate-100">
            <p
                v-for="child in submissionList"
                :key="child.title"
                class="flex items-center cursor-pointer hover:text-white hover:bg-blue-500 px-4"
                @click="goToRoute(child.route)"
            >
                {{ child.title }}
            </p>
        </PopoverContent>
    </Popover>

    <div
        v-else
        class="collapse border border-base-300 cursor-pointer"
        @click="goToRoute(sidebarRoute)"
    >
        <div
            class="collapse-title hover:bg-blue-500 flex items-center space-x-4 hover:text-white"
        >
            <icon class="h-6 w-6" />
            <p>{{ title }}</p>
        </div>
        <!-- <div class="collapse-content px-0">
            <p
                v-for="child in children"
                :key="child.title"
                class="flex items-center hover:bg-[#7a9c3e] px-4"
                @click="$router.push(child.route)"
            >
                {{ child.title }}
            </p>
        </div> -->
    </div>
</template>
