<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import CustomSearchInput from "@/Components/Customs/CustomSearchInput.vue";
import CustomCard from "@/Components/Customs/CustomCard.vue";

const cardItems = [
    {
        title: "Data Masyarakat",
        description: "Klik untuk melihat data masyarakat Desa",
        shortDescription: "Balian",
        route: "/admin/dashboard",
    },
    {
        title: "Surat Keterangan Usaha",
        description: "Klik untuk melihat laporan pengajuan",
        shortDescription: "adminstrasi",
        route: "/admin/dashboard",
    },
    {
        title: "Surat Keterangan KK Baru",
        description: "Klik untuk melihat data pengajuan",
        shortDescription: "administrasi",
        route: "/admin/dashboard",
    },
];

const reportItems = [
    {
        date: "25/05/2023",
        time: "10.00",
        name: "Hendry Sudiarsa",
        title: "Suket Usaha",
    },
    {
        date: "25/05/2023",
        time: "11.00",
        name: "Yoga Widiada",
        title: "Suket Kemiskinan",
    },
    {
        date: "25/05/2023",
        time: "11.15",
        name: "Sandyasih",
        title: "Suket Usaha",
    },
    {
        date: "25/05/2023",
        time: "13.30",
        name: "Eka Yasa",
        title: "Suket Usaha",
    },
];
</script>

<template>
    <CustomAppLayout title="Dashboard">
        <!-- <CustomSearchInput /> -->
        <div class="flex space-x-12 px-8 pt-8">
            <div class="w-full space-y-4">
                <CustomCard
                    v-for="card in cardItems"
                    :key="card.title"
                    :title="card.title"
                    :description="card.description"
                    :shortDescription="card.shortDescription"
                    :cardRoute="card.route"
                />
            </div>
            <div class="card bg-[#d0f0c0] shadow-xl px-8 py-4">
                <h2 class="text-center underline text-2xl font-bold rounded-md">
                    Report
                </h2>
                <div class="h-4" />
                <div class="flex-col justify-center space-y-4">
                    <div
                        v-for="report in reportItems"
                        :key="report.nam2"
                        class="flex bg-white p-2"
                    >
                        <p>
                            {{ report.date }}
                            {{ report.time }}
                            {{ report.name }} -
                            {{ report.title }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </CustomAppLayout>
</template>
