<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";

function submit() {}

const indexItems = 1;

const dataItems = {
    Nama: "I Ketut Hendry Sudiarsa",
    "Tempat Lahir": "Bulian",
    "Tanggal Lahir": "20-02-1998",
    "Jenis Kelamin": "Laki-laki",
    Agama: "Hindu",
    "No. KK": 5108081901220001,
    NIK: 5108082002980001,
    Alamat: "Br.Dangin Margi",
    Kebangsaan: "Indonesia",
    Keperluan: "Melengkapi pengajuan kredit KUR-BRI",
    Lampiran: "Doc.KK.pdf",
};
</script>

<template>
    <div>
        <CustomAppLayout title="Submission">
            <form @submit.prevent="submit" class="mx-12 mt-12">
                <div class="bg-white rounded-lg shadow-lg">
                    <div class="text-center font-medium text-xl pt-4 pb-8">
                        <h3>
                            Formulir Pengajuan Surat Administrasi Desa Bulian
                        </h3>
                        <h3>Kecamatan Kabutambahan</h3>
                        <h3>Banjar Dinas Dangin Margi</h3>
                        <hr class="border-2 border-black my-4" />
                        <div class="space-y-2 px-8">
                            <div
                                v-for="(value, key) in dataItems"
                                class="flex text-left"
                            >
                                <div class="w-1/3">
                                    <h3>
                                        {{ indexItems++ }} :
                                        {{ key }}
                                    </h3>
                                </div>
                                <div class="w-2/3">: {{ value }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-8">
                    <button
                        class="bg-[#98bf64] text-white font-bold py-2 px-4 rounded hover:bg-lime-600 transition duration-200 ease-in-out"
                    >
                        Validasi
                    </button>
                </div>
            </form>
        </CustomAppLayout>
    </div>
</template>
