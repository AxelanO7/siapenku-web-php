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
            filterData();
        })
        .catch((error) => {
            console.log(error);
        });
};
const dataValidate = ref();

const handleValidate = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    dataValidate.value.status = "validated";
    delete dataValidate.value.kadus;
    axios
        .put(`${baseUrl}/letter/${idIndex}`, dataValidate.value)
        .then((response) => {
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Data berhasil dikirim",
            });
            window.location.href = `/government/print/${idIndex}`;
        })
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: "Data gagal dikirim",
            });
        });
};

const filteredData = ref();

const filterData = () => {
    const data = dataValidate.value;
    const filtered = Object.keys(data).reduce((acc, key) => {
        if (
            key !== "id" &&
            key !== "status" &&
            key !== "created_at" &&
            key !== "updated_at" &&
            key !== "no_letter" &&
            key !== "type_letter" &&
            key !== "name_witness" &&
            key !== "position_witness" &&
            key !== "kasi_id" &&
            key !== "kadus_id" &&
            key !== "kadus" &&
            key !== "kasi" &&
            data[key] !== null
        ) {
            acc[key] = data[key];
        }
        return acc;
    }, {});
    filteredData.value = filtered;
};

const translateKeyToIndonesian = (key) => {
    switch (key) {
        case "id":
            return "ID";
        case "status":
            return "Status";
        case "created_at":
            return "Dibuat pada";
        case "updated_at":
            return "Diperbarui pada";
        case "nik":
            return "NIK";
        case "name":
            return "Nama";
        case "birth_place":
            return "Tempat Lahir";
        case "birth_date":
            return "Tanggal Lahir";
        case "gender":
            return "Jenis Kelamin";
        case "religion":
            return "Agama";
        case "address":
            return "Alamat";
        case "family_card":
            return "Nomor Kartu Keluarga";
        case "identity_card":
            return "Nomor KTP";
        case "nationality":
            return "Kewarganegaraan";
        case "marital_status":
            return "Status Perkawinan";
        case "profession":
            return "Pekerjaan";
        case "needs":
            return "Keperluan";
        case "attachment":
            return "Lampiran";
        case "type_submission":
            return "Jenis Pengajuan";
        case "att_family_card":
            return "Lampiran Kartu Keluarga";
        case "att_certificate":
            return "Lampiran Ijazah";
        case "att_rs":
            return "Lampiran Surat Keterangan Rumah Sakit";
        case "order_child":
            return "Anak ke";
        case "birth_attendant":
            return "Pembantu Kelahiran";
        case "address_attendant":
            return "Alamat Pembantu Kelahiran";
        case "identity_card_mother":
            return "Nomor KTP Ibu";
        case "name_mother":
            return "Nama Ibu";
        case "birth_place_mother":
            return "Tempat Lahir Ibu";
        case "birth_date_mother":
            return "Tanggal Lahir Ibu";
        case "address_mother":
            return "Alamat Ibu";
        case "identity_card_father":
            return "Nomor KTP Ayah";
        case "name_father":
            return "Nama Ayah";
        case "birth_place_father":
            return "Tempat Lahir Ayah";
        case "birth_date_father":
            return "Tanggal Lahir Ayah";
        case "address_father":
            return "Alamat Ayah";
        case "name_requester":
            return "Nama Pemohon";
        case "identity_card_requester":
            return "Nomor KTP Pemohon";
        case "address_requester":
            return "Alamat Pemohon";
        case "relationship_requester":
            return "Hubungan dengan Pemohon";
        case "date_death":
            return "Tanggal Kematian";
        case "village_death":
            return "Desa Kematian";
        case "sub_district_death":
            return "Kecamatan Kematian";
        case "district_death":
            return "Kabupaten Kematian";
        case "province_death":
            return "Provinsi Kematian";
        case "cause_death":
            return "Penyebab Kematian";
        default:
            return key;
    }
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
                        <p>{{ dataValidate?.type_letter }}</p>
                    </div>
                    <div class="h-4" />
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
                                <p>{{ dataValidate?.kadus.name }}</p>
                            </div>
                            <div class="flex">
                                <p class="w-1/4">b. Jabatan</p>
                                <p class="mx-4">:</p>
                                <p>{{ dataValidate?.kadus.position }}</p>
                            </div>
                        </div>
                        <h3 class="my-4">Dengan ini menyatakan bahwa :</h3>
                        <div class="space-y-2">
                            <div v-for="(value, key, index) in filteredData">
                                <div class="flex text-left ml-8">
                                    <div class="w-1/3 flex">
                                        <h3 class="w-10">{{ index + 1 }}.</h3>
                                        <h3>
                                            {{ translateKeyToIndonesian(key) }}
                                        </h3>
                                    </div>
                                    <div
                                        v-if="
                                            key === 'att_family_card' ||
                                            key === 'att_certificate' ||
                                            key === 'att_rs'
                                        "
                                        class="w-2/3 flex"
                                        @click="handleTapFile(value)"
                                    >
                                        :
                                        <div
                                            class="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1"
                                            @click="handleTapFile(value)"
                                        >
                                            {{ value }}
                                        </div>
                                    </div>
                                    <div v-else class="w-2/3">
                                        : {{ value }}
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
                                        new Date()
                                            .toLocaleDateString()
                                            .split("/")
                                            .join("-")
                                    }}
                                </p>
                                <p>Kelian Banjar Dinas Dangin Margi</p>
                                <div class="w-44 mx-auto p-1 rounded mt-4">
                                    <img
                                        :src="`/assets/images/signature/${dataValidate?.kadus.signature}`"
                                        alt="tanda tangan"
                                        class="w-full"
                                    />
                                </div>
                                <p class="mt-4">
                                    ({{ dataValidate?.kadus.name }})
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mt-8">
                <button
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                    @click="handleValidate"
                >
                    Validasi
                </button>
            </div>
        </div>
    </CustomAppLayout>
</template>
