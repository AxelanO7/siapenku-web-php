<script setup>
import {
    UserCircleIcon,
    BellIcon,
    ArrowRightStartOnRectangleIcon,
    HomeIcon,
    DocumentArrowUpIcon,
    UserGroupIcon,
    Cog6ToothIcon,
} from "@heroicons/vue/24/solid";
import Sidebar from "./Items/CustomSidebar.vue";
import { Head } from "@inertiajs/vue3";

// dynamic by role
const sidebarItems = [
    {
        title: "Dashboard",
        route: "/admin/dashboard",
        icon: HomeIcon,
        children: [
            {
                title: "Children 1",
                route: "/admin/dashboard",
            },
            {
                title: "Children 2",
                route: "/admin/dashboard",
            },
        ],
    },
    {
        title: "Pengajuan",
        route: "/admin/submission",
        icon: DocumentArrowUpIcon,
        children: [
            {
                title: "Children 1",
                route: "/admin/dashboard",
            },
            {
                title: "Children 2",
                route: "/admin/dashboard",
            },
        ],
    },
    {
        title: "Data Penduduk",
        route: "/admin/resident",
        icon: UserGroupIcon,
        children: [
            {
                title: "Children 1",
                route: "/admin/dashboard",
            },
            {
                title: "Children 2",
                route: "/admin/dashboard",
            },
        ],
    },
];

defineProps({ title: String });
</script>
<template>
    <div>
        <Head :title="title" />
        <div class="flex min-h-screen w-full">
            <div class="select-none px-8 bg-[#98bf64] flex flex-col pt-4 pb-8">
                <p class="font-semibold text-xl text-center">Desa Bulian</p>
                <div class="space-y-4 mt-8">
                    <Sidebar
                        v-for="item in sidebarItems"
                        :key="item.title"
                        :title="item.title"
                        :route="item.route"
                        :icon="item.icon"
                        :children="item.children"
                    />
                </div>
                <div class="flex-1" />
                <div
                    class="flex items-center space-x-8 cursor-pointer justify-center hover:bg-[#7a9c3e] hover:text-white hover:rounded-tl-2xl hover:rounded-br-2xl py-2"
                >
                    <Cog6ToothIcon class="h-6 w-6" />
                    <p>Pengaturan</p>
                </div>
            </div>
            <div class="bg-[#628643] grow">
                <nav
                    class="flex justify-end items-center space-x-4 h-12 pe-12 pt-4"
                >
                    <p
                        class="font-semibold text-lg cursor-pointer hover:text-white"
                    >
                        I KETUT ARTA SEDANA
                    </p>
                    <UserCircleIcon
                        class="h-6 w-6 cursor-pointer hover:text-white"
                    />
                    <BellIcon class="h-6 w-6 cursor-pointer hover:text-white" />
                    <ArrowRightStartOnRectangleIcon
                        class="h-6 w-6 cursor-pointer hover:text-white"
                    />
                </nav>
                <main class="mt-4">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
