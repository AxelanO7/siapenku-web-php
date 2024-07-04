<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import ApiHelper from "@/Helper/auth_helper";

import { Button } from "@sc/components/ui/button";
import Swal from "sweetalert2";

// applicant data
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

const handleValidate = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    let payload = dataValidate.value;
    const additionalPayload = {
        no_letter: valueNoLetter.value,
        type_letter: valueSuket.value,
        kadus_id: valueKadus.value,
    };
    payload = { ...payload, ...additionalPayload };
    payload.status = "sended";
    axios
        .put(`${baseUrl}/letter/${idIndex}`, payload)
        .then((response) => {
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Data berhasil dikirim",
                showConfirmButton: false,
                timer: 1500,
            });
            window.location.href = `/village-chief/validate`;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Data gagal dikirim",
                showConfirmButton: false,
                timer: 1500,
            });
            console.log(error);
        });
};

const handleTapFile = (value) => {
    Swal.fire({
        title: "Lampiran",
        text: value,
        imageUrl: `/files/${value}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
    });
};

const idIndex = window.location.href.split("/").pop();
onMounted(() => {
    getLetter();
});
</script>

<template>
    <CustomAppLayout title="Submission">
        <div class="m-12">
            <div class="bg-white rounded-lg shadow-lg">
                <div class="text-center font-medium text-xl pt-4 pb-8">
                    <div
                        class="flex items-center px-20 justify-center h-max relative py-6"
                    >
                        <img
                            src="/assets/images/kop.png"
                            class="h-28 w-28 absolute left-20"
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
                        <p class="text-base items-center" v-if="dataValidate">
                            {{ dataValidate.type_letter || "-" }}
                        </p>
                    </div>
                    <div class="h-4" />
                    <div
                        class="flex items-center w-full justify-center space-x-4"
                    >
                        <h3>Nomor :</h3>
                        <p class="text-base items-center" v-if="dataValidate">
                            {{ dataValidate.no_letter || "-" }}
                        </p>
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
                                <p class="w-3/4">
                                    {{ dataValidate?.kadus?.name || "-" }}
                                </p>
                            </div>
                            <div class="flex">
                                <p class="w-1/4">b. Jabatan</p>
                                <p class="mx-4">:</p>
                                <p class="w-3/4">
                                    {{ dataValidate?.kadus?.position || "-" }}
                                </p>
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
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">11. Lampiran</div>
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
                            </div>
                        </div>
                        <p class="mt-12">
                            Demikian surat keterangan ini dibuat untuk
                            dipergunakan dengan semestinya.
                        </p>
                        <div class="flex justify-end">
                            <div class="text-center">
                                <p>
                                    Bulian,
                                    {{
                                        new Date(dataValidate?.updated_at)
                                            .toLocaleDateString("id-ID")
                                            .split("/")
                                            .join("-")
                                    }}
                                </p>
                                <p>Kelian Banjar Dinas Dangin Margi</p>
                                <div class="w-44 mx-auto p-1 rounded mt-4">
                                    <img
                                        :src="`/assets/images/signature/${dataValidate?.kadus?.signature}`"
                                        alt="tanda tangan"
                                        class="w-full"
                                    />
                                </div>
                                <p class="mt-4">
                                    ({{ dataValidate?.kadus?.name }})
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CustomAppLayout>
</template>
