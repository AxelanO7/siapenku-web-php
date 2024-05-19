<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import { onMounted, ref } from "vue";
import ApiHelper from "@/Helper/api_helper";
import axios from "axios";

const indexItems = window.location.href.split("/").pop();

const submit = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    const data = dataValidate.value;
    data.status = "validated";
    axios
        .put(`${baseUrl}/letter/${indexItems}`, data)
        .then((response) => {
            console.log(response);
            window.location.href = "/village-chief/validate";
        })
        .catch((error) => {
            console.log(error);
        });
};

let dataValidate = ref();

const getValidate = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .get(`${baseUrl}/letter/${indexItems}`)
        .then((response) => {
            const data = response.data.data;
            dataValidate.value = data;
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
        case "needs":
            return "Keperluan";
        case "attachment":
            return "Lampiran";
    }
};

onMounted(() => {
    getValidate();
});
</script>

<template>
    <div>
        <CustomAppLayout title="Submission">
            <div class="mx-12 mt-12">
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
                                v-for="(value, key, index) in dataValidate"
                                class="flex text-left"
                            >
                                <div
                                    class="flex w-full"
                                    v-if="
                                        key !== 'id' &&
                                        key !== 'status' &&
                                        key !== 'created_at' &&
                                        key !== 'updated_at'
                                    "
                                >
                                    <div class="w-1/3">
                                        <h3>
                                            {{ translateKeyToIndonesian(key) }}
                                        </h3>
                                    </div>
                                    <div class="w-2/3">: {{ value }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-8">
                    <button
                        class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
                        @click="submit"
                    >
                        Validasi
                    </button>
                </div>
            </div>
        </CustomAppLayout>
    </div>
</template>
