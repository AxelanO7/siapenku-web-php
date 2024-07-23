<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import { onMounted, ref } from "vue";
import ApiHelper from "@/Helper/auth_helper";
import axios from "axios";
import Swal from "sweetalert2";

const indexItems = window.location.href.split("/").pop();

const typeLetter = ref("");
const getTypeLetter = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    axios.get(`${baseUrl}/letter/type/${indexItems}`).then((response) => {
        typeLetter.value = response.data.data;
    });
};

const submit = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    const data = dataValidate.value;
    data.status = "sending";
    data.type_letter = typeLetter.value.letter_type;
    data.no_letter = typeLetter.value.last_no_letter;
    delete data.kasi;
    delete data.kadus;
    axios
        .put(`${baseUrl}/letter/${indexItems}`, data)
        .then((response) => {
            console.log(response);
            // alert("Berhasil divalidasi");
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Berhasil divalidasi",
            });
            window.location.href = `/village-chief/recommendation/${indexItems}`;
        })
        .catch((error) => {
            // alert("Gagal divalidasi");
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: "Gagal divalidasi",
            });
            console.log(error);
        });
};

const dataValidate = ref();

const getValidate = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .get(`${baseUrl}/letter/${indexItems}`)
        .then((response) => {
            const data = response.data.data;
            dataValidate.value = data;
            getTypeLetter();
        })
        .catch((error) => {
            console.log(error);
        });
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
<<<<<<< HEAD
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
=======
>>>>>>> c0b22dd (refactor: Add new fields for letter submission in Letter model and seeder)
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

onMounted(() => {
    getValidate();
});
</script>

<template>
    <div>
        <CustomAppLayout title="Submission">
            <div class="mx-12 my-12">
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
                                <h3>
                                    Formulir Pengajuan Surat Administrasi Desa
                                    Bulian
                                </h3>
                                <h3>Kecamatan Kabutambahan</h3>
                                <h3>Banjar Dinas Desa Bulian</h3>
                            </div>
                        </div>
                        <hr class="border-2 border-black my-4" />
                        <div class="space-y-2 px-8">
                            <div
                                v-for="(value, key) in dataValidate"
                                class="flex text-left"
                            >
                                <div
                                    class="flex w-full"
                                    v-if="
                                        key !== 'id' &&
                                        key !== 'status' &&
                                        key !== 'created_at' &&
                                        key !== 'updated_at' &&
                                        key !== 'no_letter' &&
                                        key !== 'type_letter' &&
                                        key !== 'name_witness' &&
                                        key !== 'position_witness' &&
                                        key !== 'kasi_id' &&
                                        key !== 'kadus_id' &&
                                        key !== 'kadus' &&
                                        key !== 'kasi' &&
                                        value !== null
                                    "
                                >
                                    <div class="w-1/3">
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
                    </div>
                </div>
                <div class="flex justify-end mt-8">
                    <button
                        class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                        @click="submit"
                    >
                        Validasi
                    </button>
                </div>
            </div>
        </CustomAppLayout>
    </div>
</template>
