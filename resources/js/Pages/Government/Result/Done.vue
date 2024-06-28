<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import ApiHelper from "@/Helper/auth_helper";

import { Button } from "@sc/components/ui/button";
import html2pdf from "html2pdf.js";
import CustomSpinner from "@/Components/Customs/CustomSpinner.vue";

const getLetter = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    axios
        .get(`${baseUrl}/letter/${idIndex}`)
        .then((response) => {
            const data = response.data.data;
            dataValidate.value = data;
        })
        .catch((error) => {
            console.log(error);
        });
};
const dataValidate = ref();

const handleDownload = async () => {
    const downloadElement = document.getElementById("download-content");
    // set size a4
    const opt = {
        size: "A4",
        margin: 0,
        filename: "surat.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(downloadElement).set(opt).save();
};

const idIndex = window.location.href.split("/").pop();

const isLoading = ref();
const fetchData = async () => {
    isLoading.value = true;
    getLetter();
    isLoading.value = false;
};
onMounted(() => {
    fetchData();
});
</script>

<template lang="html">
    <CustomAppLayout title="Done">
        <div class="flex justify-center items-center py-8" v-if="isLoading">
            <CustomSpinner />
        </div>

        <div class="m-12" v-else>
            <div
                class="bg-white rounded-lg shadow-lg download-content"
                id="download-content"
            >
                <div class="text-center font-medium text-base pt-4 pb-8">
                    <div
                        class="flex items-center px-20 justify-center h-max relative py-6"
                    >
                        <img
                            src="/assets/images/kop.png"
                            class="h-24 w-24 absolute left-20"
                        />
                        <div>
                            <h3>Pemerintahan Kabupaten Buleleng</h3>
                            <h3>Kecamatan Kabutambahan</h3>
                            <h3>Banjar Dinas Dangin Margi</h3>
                        </div>
                    </div>
                    <hr class="border-2 border-black my-4" />
                    <div
                        class="flex items-center w-full justify-center space-x-4"
                    >
                        <h3>Surat Keterangan :</h3>
                        <p>{{ dataValidate?.type_letter }}</p>
                    </div>
                    <!-- <div class="h-4" /> -->
                    <div
                        class="flex items-center w-full justify-center space-x-4"
                    >
                        <h3>Nomor :</h3>
                        <p>{{ dataValidate?.no_letter }}</p>
                    </div>
                    <div class="h-4" />
                    <div class="px-8 text-left">
                        <h3 class="mb-4">
                            Saya yang bertanda tangan dibawah ini :
                        </h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <p class="w-1/4">a. Nama</p>
                                <p class="mx-4">:</p>
                                <p>{{ dataValidate?.kasi?.name }}</p>
                            </div>
                            <div class="flex">
                                <p class="w-1/4">b. Jabatan</p>
                                <p class="mx-4">:</p>
                                <p>{{ dataValidate?.kasi?.position }}</p>
                            </div>
                        </div>
                        <h3 class="my-4">Dengan ini menyatakan bahwa :</h3>
                        <div class="space-y-2" v-if="dataValidate">
                            <!-- nama -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">1. Nama</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.name }}
                                    </p>
                                </div>
                            </div>
                            <!-- tempat lahir -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">2. Tempat Lahir</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.birth_place }}
                                    </p>
                                </div>
                            </div>
                            <!-- tanggal lahir -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">3. Tanggal Lahir</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.birth_date }}
                                    </p>
                                </div>
                            </div>
                            <!-- jenis kelamin -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">4. Jenis Kelamin</div>
                                    <p class="w-3/4">
                                        :
                                        {{
                                            dataValidate.gender === 1
                                                ? "Laki-laki"
                                                : "Perempuan"
                                        }}
                                    </p>
                                </div>
                            </div>
                            <!-- agama -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">5. Agama</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.religion }}
                                    </p>
                                </div>
                            </div>
                            <!-- no kk -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">6. No. KK</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.family_card }}
                                    </p>
                                </div>
                            </div>
                            <!-- nik -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">7. NIK</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.identity_card }}
                                    </p>
                                </div>
                            </div>
                            <!-- alamat -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">8. Alamat</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.address }}
                                    </p>
                                </div>
                            </div>
                            <!-- kebangsaan -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">9. Kebangsaan</div>
                                    <p class="w-3/4">
                                        :
                                        {{ dataValidate.nationality }}
                                    </p>
                                </div>
                            </div>
                            <!-- keperluan -->
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">10. Keperluan</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.needs }}
                                    </p>
                                </div>
                            </div>
                            <!-- lampiran -->
                            <!-- <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">11 : Lampiran</div>
                                    <div class="flex">
                                        :
                                        <div
                                            class="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1"
                                            @click="
                                                handleTapFile(
                                                    dataValidate.attachment
                                                )
                                            "
                                        >
                                            {{ dataValidate.attachment }}
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <p class="mt-4">
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
                                    <img
                                        :src="`/assets/images/signature/${dataValidate?.kasi?.signature}`"
                                        alt="tanda tangan"
                                        class="w-full"
                                    />
                                </div>
                                <p class="mt-2">
                                    ({{ dataValidate?.kasi?.name }})
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mt-8">
                <button
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                    @click="handleDownload"
                >
                    Download
                </button>
            </div>
        </div>
    </CustomAppLayout>
</template>
