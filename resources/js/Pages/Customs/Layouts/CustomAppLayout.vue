<script setup>
import {
    UserCircleIcon,
    BellIcon,
    ArrowRightStartOnRectangleIcon,
    HomeIcon,
    DocumentArrowUpIcon,
    UserGroupIcon,
    Cog6ToothIcon,
    ArrowLeftStartOnRectangleIcon,
} from "@heroicons/vue/24/solid";
import Sidebar from "./Items/CustomSidebar.vue";
import { Head } from "@inertiajs/vue3";

const sidebarItems = [
    {
        title: "Dashboard",
        sidebarRoute: "/admin",
        icon: HomeIcon,
    },
    {
        title: "Pengajuan",
        sidebarRoute: "/admin/submission",
        icon: DocumentArrowUpIcon,
    },
    {
        title: "Data Penduduk",
        sidebarRoute: "/admin/resident",
        icon: UserGroupIcon,
    },
    {
        title: "Logout",
        sidebarRoute: "/",
        icon: ArrowLeftStartOnRectangleIcon,
    },
];

defineProps({ title: String });
</script>
<template>
    <div>
        <Head :title="title" />
        <div class="flex min-h-screen w-full">
            <div class="select-none px-8 bg-blue-400 flex flex-col pt-4 pb-8">
                <p class="font-semibold text-xl text-center">Desa Bulian</p>
                <div class="space-y-4 mt-8">
                    <Sidebar
                        v-for="item in sidebarItems"
                        :key="item.title"
                        :title="item.title"
                        :sidebarRoute="item.sidebarRoute"
                        :icon="item.icon"
                    />
                </div>
                <div class="flex-1" />
                <div
                    class="flex items-center space-x-8 cursor-pointer justify-center hover:bg-blue-500 hover:text-white hover:rounded-tl-2xl hover:rounded-br-2xl py-2"
                >
                    <Cog6ToothIcon class="h-6 w-6" />
                    <p>Pengaturan</p>
                </div>
            </div>
            <div class="bg-blue-500 grow">
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
