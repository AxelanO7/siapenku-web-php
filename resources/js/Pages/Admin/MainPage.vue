<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import CustomSearchInput from "@/Components/Customs/CustomSearchInput.vue";
import CustomCard from "@/Components/Customs/CustomCard.vue";

const cardItems = [
    {
        title: "Surat Keterangan Miskin",
        description: "Dokumen pengajuan surat keterangan miskin",
        shortDescription: "Miskin",
        cardRoute: "/admin/dashboard",
    },
    {
        title: "Surat Keterangan Usaha",
        description: "Dokumen pengajuan surat keterangan usaha",
        shortDescription: "Usaha",
        cardRoute: "/admin/dashboard",
    },
    {
        title: "Surat Keterangan KK Baru",
        description: "Dokumen pengajuan surat keterangan KK baru",
        shortDescription: "KK Baru",
        cardRoute: "/admin/dashboard",
    },
];
</script>

<template>
    <CustomAppLayout title="Dashboard">
        <!-- <CustomSearchInput /> -->
        <div class="flex space-x-12 px-8 mt-8 mb-12">
            <div class="w-full space-y-4">
                <CustomCard
                    v-for="card in cardItems"
                    :key="card.title"
                    :title="card.title"
                    :description="card.description"
                    :shortDescription="card.shortDescription"
                    :cardRoute="card.cardRoute"
                />
            </div>
            <div class="card bg-blue-50 shadow-xl px-8 py-4">
                <h2 class="text-center underline text-2xl font-bold rounded-md">
                    Dokumentasi
                </h2>
                <div class="h-4" />
                <div class="flex-col justify-center space-y-4">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Dokumentasi"
                        class="rounded-md"
                    />
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Dokumentasi"
                        class="rounded-md"
                    />
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Dokumentasi"
                        class="rounded-md"
                    />
                </div>
            </div>
        </div>
    </CustomAppLayout>
</template>
