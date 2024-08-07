<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import ApiHelper from "@/Helper/auth_helper";
import axios from "axios";
import { onMounted, ref } from "vue";
import CustomSpinner from "@/Components/Customs/CustomSpinner.vue";

const handleValidate = (item) => {
    if (item.status === "pending") {
        window.location.href = `/village-chief/detail-validate/${item.id}`;
        return;
    }
    if (item.status === "sending") {
        window.location.href = `/village-chief/recommendation/${item.id}`;
        return;
    }
    if (item.status === "sended" || "validated" || "done") {
        window.location.href = `/village-chief/done/${item.id}`;
        return;
    }
};

const tableHeaders = [
    "No.",
    "Time",
    "Nama",
    "Status",
    // , "Aksi"
];

const isLoading = ref(false);
const letters = ref([]);

const getLetters = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .get(`${baseUrl}/letter`)
        .then((response) => {
            const data = response.data.data;
            data.sort((a, b) => {
                return new Date(b.updated_at) - new Date(a.updated_at);
            });
            letters.value = data;
        })
        .catch((error) => {
            console.log(error);
        });
};

const getYearNow = () => {
    return new Date().getFullYear();
};

const goToDashboard = () => {
    window.location.href = "/";
};

const handleDelete = async (item) => {
    const baseUrl = await ApiHelper.getBaseUrl();
    axios
        .delete(`${baseUrl}/letter/${item.id}`)
        .then((response) => {
            console.log(response);
            getLetters();
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Berhasil divalidasi",
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Gagal",
                text: "Gagal divalidasi",
            });
            console.log(error);
        });
};

onMounted(() => {
    isLoading.value = true;
    getLetters();
    isLoading.value = false;
});
</script>

<template>
    <CustomAppLayout title="Resident">
        <div class="mx-12 mt-12 select-none">
            <div class="bg-white rounded-lg shadow-lg">
                <div
                    class="flex justify-center items-center py-8"
                    v-if="isLoading"
                >
                    <CustomSpinner />
                </div>

                <div class="text-center font-medium text-xl pb-8 pt-4" v:else>
                    <div
                        class="flex items-center px-20 justify-center h-max relative py-6"
                    >
                        <img
                            src="/assets/images/kop.png"
                            class="h-28 w-28 absolute left-20"
                        />
                        <div>
                            <h3>Data Masyarakat Desa Bulian</h3>
                            <h3>Kecamatan Kabutambahan</h3>
                            <h3>Tahun {{ getYearNow() }}</h3>
                        </div>
                    </div>
                    <hr class="border-2 border-black my-4" />
                    <table
                        class="table-auto w-full text-center border-collapse border border-gray-400"
                    >
                        <thead>
                            <th
                                class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal border border-gray-400"
                                v-for="header in tableHeaders"
                                :key="header"
                            >
                                {{ header }}
                            </th>
                        </thead>
                        <tbody>
                            <tr
                            v-if="letters.length === 0"
                            class="bg-gray-100 text-gray-600 border border-gray-400"
                            >
                                <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                    :colspan="tableHeaders.length"
                                >
                                    Tidak ada data
                                </td>
                            </tr>
                            <tr
                                class="bg-gray-100 text-gray-600 border border-gray-400"
                                v-else
                                v-for="(item, index) in letters"
                                :key="index"
                            >
                                <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                >
                                    {{ index + 1 }}
                                </td>
                                <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                >
                                    {{
                                        new Date(
                                            item.updated_at
                                        ).toLocaleDateString("id-ID", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })
                                    }}
                                </td>
                                <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                >
                                    {{ item.name }}
                                </td>
                                <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                >
                                    <button
                                        :class="{
                                            'bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out':
                                                item.status === 'pending',
                                            'bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out':
                                                item.status === 'sending',
                                            'bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out':
                                                item.status !==
                                                ('pending' || 'sending'),
                                        }"
                                        @click="handleValidate(item)"
                                    >
                                        {{
                                            item.status === "pending"
                                                ? "Validasi"
                                                : item.status === "sending"
                                                ? "Surat Rekomendasi"
                                                : "Tervalidasi"
                                        }}
                                    </button>
                                </td>
                                <!-- <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                >
                                    <button
                                        class="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
                                        @click="handleDelete(item)"
                                    >
                                        Hapus
                                    </button>
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex justify-end mt-8">
                <button
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                    @click="goToDashboard"
                >
                    Selesai
                </button>
            </div>
        </div>
    </CustomAppLayout>
</template>
