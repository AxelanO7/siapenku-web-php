<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import { onMounted, ref } from "vue";
import ApiHelper from "@/Helper/auth_helper";
import axios from "axios";
import Swal from "sweetalert2";

const indexItems = window.location.href.split("/").pop();

const submit = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    const data = dataValidate.value;
    data.status = "sending";
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
        case "marital_status":
            return "Status Perkawinan";
        case "profession":
            return "Pekerjaan";
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
            <div class="mx-12 mt-12">
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
                                <h3>Banjar Dinas Dangin Margi</h3>
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
                                        key !== 'kasi'
                                    "
                                >
                                    <div class="w-1/3">
                                        <h3>
                                            {{ translateKeyToIndonesian(key) }}
                                        </h3>
                                    </div>
                                    <div
                                        v-if="key === 'attachment'"
                                        class="w-2/3 flex"
                                        @click="handleTapFile(value)"
                                    >
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
