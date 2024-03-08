<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";

const witnessData = {
    ID: 1,
    Nama: "I Ketut Arta Sedana",
    Position: "Kalian Banjar Dinas Dauh Margi",
};

const applicantData = {
    ID: 1,
    Nama: "HENDRY SUDIARSA",
    "Tempat / Tgl Lahir": "Buleleng, 20-02-1998",
    "Jenis Kelamin": "Laki-laki",
    Agama: "Hindu",
    "No. KK": 5108082002980001,
    NIK: 5108082002980001,
    Alamat: "Jalan Raya Dangin Margi",
    Kebangsaan: "Indonesia",
    Keperluan: "Melengkapi pengajuan kredit",
    Lampiran: "KK.pdf",
};

const indexWitnessData = 1;
const indexApplicantData = 1;

// todo: handle
function handleValidate(id) {
    console.log(id);
}
</script>

<template>
    <CustomAppLayout title="Submission">
        <div class="m-12">
            <div class="bg-white rounded-lg shadow-lg">
                <div class="text-center font-medium text-xl pt-4 pb-8">
                    <h3>Validasi Surat Administrassi Desa Bulian</h3>
                    <h3>Kecamatan Kabutambahan</h3>
                    <h3>Banjar Dinas Dangin Margi</h3>
                    <hr class="border-2 border-black my-4" />
                    <div
                        class="flex items-center w-full justify-center space-x-4"
                    >
                        <h3>Surat Keterangan :</h3>
                        <!-- todo: remove border input -->
                        <input
                            class="border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                        />
                    </div>
                    <div class="h-4" />
                    <div
                        class="flex items-center w-full justify-center space-x-4"
                    >
                        <h3>Nomor :</h3>
                        <!-- todo: remove border input -->
                        <input
                            class="border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
                        />
                    </div>
                    <div class="h-4" />
                    <div class="px-8 text-left">
                        <h3 class="mb-4">
                            Saya yang bertanda tangan dibawah ini :
                        </h3>
                        <div class="space-y-2">
                            <!-- todo: input witness -->
                            <div
                                class="flex pl-8"
                                v-for="(value, label) in witnessData"
                            >
                                <div class="flex w-full" v-if="label !== 'ID'">
                                    <div class="w-1/3 font bold">
                                        {{ indexWitnessData++ }} :
                                        {{ label }}
                                    </div>
                                    <div class="w-2/3">: {{ value }}</div>
                                </div>
                            </div>
                        </div>
                        <h3 class="my-4">Dengan ini menyatakan bahwa :</h3>
                        <div class="space-y-2">
                            <!-- todo: file pdf -->
                            <div
                                class="flex pl-8"
                                v-for="(value, label) in applicantData"
                            >
                                <div class="flex w-full" v-if="label !== 'ID'">
                                    <div class="w-1/3 font bold">
                                        {{ indexApplicantData++ }} :
                                        {{ label }}
                                    </div>
                                    <div class="w-2/3">: {{ value }}</div>
                                </div>
                            </div>
                        </div>
                        <p class="mt-12">
                            Demikian surat keterangan ini dibuat untuk
                            dipergunakan dengan semestinya.
                        </p>
                        <div class="flex justify-end">
                            <div class="text-center">
                                <!-- todo: dynamic date -->
                                <p>Bulian, 16-05-2023</p>
                                <p>Kelian Banjar Dinas Dangin Margi</p>
                                <div
                                    class="w-44 bg-[#d9d9d9] mx-auto p-1 rounded mt-4"
                                >
                                    <p>Tanda Tangan Digital</p>
                                </div>
                                <p class="mt-4">(I Ketut Arta Sedana)</p>
                            </div>
                        </div>
                        <div class="flex justify-end mt-96">
                            <button
                                class="bg-[#98bf64] text-white font-bold py-2 px-4 rounded hover:bg-lime-600 transition duration-200 ease-in-out"
                                @click="handleValidate(applicantData.ID)"
                            >
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CustomAppLayout>
</template>
