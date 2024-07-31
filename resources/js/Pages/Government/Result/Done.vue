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
                        class="flex items-center px-20 justify-center h-max relative py-2"
                    >
                        <img
                            src="/assets/images/kop.png"
                            class="h-24 w-24 absolute left-8"
                        />
                        <div class="font-bold uppercase text-lg">
                            <h3>Pemerintahan Kabupaten Buleleng</h3>
                            <h3>Kecamatan Kabutambahan Perbekel Bulian</h3>
                            <h3 class="text-sm">
                                JlKubutambahan-Kintamani, Telepon 087758730344,
                                Kode Pos 81172
                            </h3>
                        </div>
                        <img
                            src="/assets/images/logo.png"
                            class="h-24 w-24 absolute right-8"
                        />
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
                        <div>
                            <div class="flex items-center">
                                <p class="w-1/3">Nama</p>
                                <p class="pl-6">
                                    : {{ dataValidate?.kasi?.name }}
                                </p>
                            </div>
                            <div class="flex">
                                <p class="w-1/3">Jabatan</p>
                                <p class="pl-6">
                                    : {{ dataValidate?.kasi?.position }}
                                </p>
                            </div>
                        </div>
                        <h3 class="my-2">Dengan ini menyatakan bahwa :</h3>
                        <div v-if="dataValidate">
                            <div
                                v-if="
                                    dataValidate.type_submission ===
                                    'birth-letter'
                                "
                            >
                                <div>
                                    <!-- nama -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                Nama Lengkap Anak
                                            </div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.name }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- anak ke -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">Anak Ke</div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.order_child }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- tempat lahir -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                Tempat Lahir
                                            </div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.birth_place }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- alamat -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">Alamat</div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.address }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- penolong kelahiran -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                Penolong Kelahiran
                                            </div>
                                            <p class="w-2/3">
                                                :
                                                {{
                                                    dataValidate.birth_attendant
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- alamat penolong -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                Alamat Penolong
                                            </div>
                                            <p class="w-2/3">
                                                :
                                                {{
                                                    dataValidate.address_attendant
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p class="my-">
                                    Adalah anak kandung dari suami istri
                                    tersebut dibawah ini :
                                </p>
                                <div class="ml-8">
                                    <!-- nik ibu -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">NIK Ibu</div>
                                        <p class="w-2/3">
                                            :
                                            {{
                                                dataValidate.identity_card_mother
                                            }}
                                        </p>
                                    </div>
                                    <!-- nama ibu -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">Nama Ibu</div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.name_mother }}
                                        </p>
                                    </div>
                                    <!-- tempat lahir ibu -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">
                                            Tempat / Tangal Lahir Ibu
                                        </div>
                                        <p class="w-2/3">
                                            :
                                            {{
                                                dataValidate.birth_place_mother
                                            }}
                                            ,
                                            {{
                                                new Date(
                                                    dataValidate.birth_date_mother
                                                ).toLocaleDateString("id-ID", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })
                                            }}
                                        </p>
                                    </div>
                                    <!-- alamat ibu -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">Alamat Ibu</div>
                                        <p class="w-2/3">
                                            :
                                            {{ dataValidate.address_mother }}
                                        </p>
                                    </div>
                                    <!-- nik ayah -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">NIK Ayah</div>
                                        <p class="w-2/3">
                                            :
                                            {{
                                                dataValidate.identity_card_father
                                            }}
                                        </p>
                                    </div>
                                    <!-- nama ayah -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">Nama Ayah</div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.name_father }}
                                        </p>
                                    </div>
                                    <!-- tempat lahir ayah -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">
                                            Tempat / Tanggal Lahir Ayah
                                        </div>
                                        <p class="w-2/3">
                                            :
                                            {{
                                                dataValidate.birth_place_father
                                            }},
                                            {{
                                                new Date(
                                                    dataValidate.birth_date_father
                                                ).toLocaleDateString("id-ID", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })
                                            }}
                                        </p>
                                    </div>
                                    <!-- alamat ayah -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">Alamat Ayah</div>
                                        <p class="w-2/3">
                                            :
                                            {{ dataValidate.address_father }}
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-4 flex">
                                    <p class="w-1/3">
                                        Surat keterangan ini digunakan untuk
                                    </p>
                                    <p class="w-2/3 ml-8">
                                        : {{ dataValidate.needs }}
                                    </p>
                                </div>
                            </div>
                            <div
                                class="space-y-2"
                                v-else-if="
                                    dataValidate.type_submission ===
                                    'death-letter'
                                "
                            >
                                <div>
                                    <!-- nama -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">1. Nama</div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.name }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- nik -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">2. NIK</div>
                                            <p class="w-2/3">
                                                :
                                                {{ dataValidate.identity_card }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- no kk -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">3. NO KK</div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.family_card }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- tempat lahir -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                4. Tempat Lahir
                                            </div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.birth_place }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- tanggal lahir -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                5. Tanggal Lahir
                                            </div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.birth_date }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- jenis kelamin -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                6. Jenis Kelamin
                                            </div>
                                            <p class="w-2/3">
                                                :
                                                {{
                                                    dataValidate.gender === 1
                                                        ? "Laki-laki"
                                                        : "Perempuan"
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- kewarganegaraan -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                7. Kewarganegaraan
                                            </div>
                                            <p class="w-2/3">
                                                :
                                                {{ dataValidate.nationality }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- agama -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">8. Agama</div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.religion }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- status perkawinan -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                9. Status Perkawinan
                                            </div>
                                            <p class="w-2/3">
                                                :
                                                {{
                                                    dataValidate.marital_status
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- pekerjaan -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">
                                                10. Pekerjaan
                                            </div>
                                            <p class="w-2/3">
                                                <!-- to capitalize -->
                                                :
                                                {{
                                                    dataValidate.profession
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                    dataValidate.profession.slice(
                                                        1
                                                    )
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- alamat -->
                                    <div class="flex pl-8">
                                        <div class="flex w-full items-center">
                                            <div class="w-1/3">11. Alamat</div>
                                            <p class="w-2/3">
                                                : {{ dataValidate.address }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- lampiran -->
                                    <!-- <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/3">11 : Lampiran</div>
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
                                <p class="mt-4">Telah meninggal dunia pada :</p>
                                <div>
                                    <!-- tanggal kematian -->
                                    <div class="flex">
                                        <p class="w-1/3">
                                            11. Hari / Tanggal Kematian
                                        </p>
                                        <p class="w-2/3 pl-6">
                                            :
                                            {{
                                                new Date(
                                                    dataValidate.date_death
                                                ).toLocaleDateString("id-ID", {
                                                    weekday: "long",
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })
                                            }}
                                        </p>
                                    </div>
                                    <!-- tempat kematian -->
                                    <div class="flex">
                                        <p class="w-1/3">12. Tempat Kematian</p>
                                        <p class="w-2/3 pl-6">
                                            : Desa
                                            {{ dataValidate.village_death }}
                                        </p>
                                    </div>
                                    <!-- kecamatan -->
                                    <div class="flex">
                                        <p class="w-1/3 pl-6">Kecamatan</p>
                                        <p class="w-2/3 pl-6">
                                            : Kecamatan
                                            {{ dataValidate.district_death }}
                                        </p>
                                    </div>
                                    <!-- kabupaten -->
                                    <div class="flex">
                                        <p class="w-1/3 pl-6">Kabupaten</p>
                                        <p class="w-2/3 pl-6">
                                            : Kabupaten
                                            {{ dataValidate.regency_death }}
                                        </p>
                                    </div>
                                    <!-- provinsi -->
                                    <div class="flex">
                                        <p class="w-1/3 pl-6">Provinsi</p>
                                        <p class="w-2/3 pl-6">
                                            : Provinsi
                                            {{ dataValidate.province_death }}
                                        </p>
                                    </div>
                                    <!-- penyebab kematian -->
                                    <div class="flex">
                                        <p class="w-1/3">
                                            13. Penyebab Kematian
                                        </p>
                                        <p class="w-2/3 pl-6">
                                            : {{ dataValidate.cause_death }}
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-4 flex">
                                    <p class="w-1/3">
                                        Surat keterangan ini digunakan untuk
                                    </p>
                                    <p class="w-2/3 pl-6">
                                        : {{ dataValidate.needs }}
                                    </p>
                                </div>
                            </div>
                            <div class="space-y-2" v-else>
                                <div class="ml-8">
                                    <!-- nama -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">a. Nama</div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.name }}
                                        </p>
                                    </div>
                                    <!-- nik -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">b. NIK</div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.identity_card }}
                                        </p>
                                    </div>
                                    <!-- tempat lahir -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">c. Tempat Lahir</div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.birth_place }}
                                        </p>
                                    </div>
                                    <!-- tanggal lahir -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">
                                            d. Tanggal Lahir
                                        </div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.birth_date }}
                                        </p>
                                    </div>
                                    <!-- jenis kelamin -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">
                                            e. Jenis Kelamin
                                        </div>
                                        <p class="w-2/3">
                                            :
                                            {{
                                                dataValidate.gender === 1
                                                    ? "Laki-laki"
                                                    : "Perempuan"
                                            }}
                                        </p>
                                    </div>
                                    <!-- agama -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">f. Agama</div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.religion }}
                                        </p>
                                    </div>
                                    <!-- status perkawinan -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">
                                            g. Status Perkawinan
                                        </div>
                                        <p class="w-2/3">
                                            :
                                            {{ dataValidate.marital_status }}
                                        </p>
                                    </div>
                                    <!-- pekerjaan -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">h. Pekerjaan</div>
                                        <p class="w-2/3">
                                            :
                                            {{
                                                dataValidate.profession
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                dataValidate.profession.slice(1)
                                            }}
                                        </p>
                                    </div>
                                    <!-- alamat -->
                                    <div class="flex w-full items-center">
                                        <div class="w-1/3">i. Alamat</div>
                                        <p class="w-2/3">
                                            : {{ dataValidate.address }}
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-4 flex">
                                    <p class="w-1/3">
                                        Surat keterangan ini digunakan untuk
                                    </p>
                                    <p class="w-2/3 ml-8">
                                        : {{ dataValidate.needs }}
                                    </p>
                                </div>

                                <!-- lampiran -->
                                <!-- <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/3">11 : Lampiran</div>
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
                        </div>
                        <p class="mt-4">
                            Demikian surat keterangan ini dibuat untuk
                            dipergunakan dengan semestinya.
                        </p>
                        <div class="flex justify-end mt-4">
                            <div class="text-center">
                                <p>
                                    Bulian,
                                    {{
                                        new Date(dataValidate?.updated_at)
                                            .toLocaleDateString("id-ID", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })
                                            .split("/")
                                            .join("-")
                                    }}
                                </p>
                                <p>A/n Prebekel Bulian</p>
                                <div class="w-44 mx-auto p-1 rounded mt-4">
                                    <img
                                        :src="`/assets/images/signature/${dataValidate?.kasi?.signature}`"
                                        alt="tanda tangan"
                                        class="h-24 w-full"
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
