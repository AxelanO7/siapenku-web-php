<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import ApiHelper from "@/Helper/auth_helper";
import axios from "axios";
import { onMounted, ref } from "vue";
import CustomSpinner from "@/Components/Customs/CustomSpinner.vue";

const handleValidate = (item) => {
    if (item.status === "sended") {
        window.location.href = `/government/detail-validate/${item.id}`;
    }
    if (item.status === "validated") {
        window.location.href = `/government/print/${item.id}`;
    }
};

const tableHeaders = ["No.", "Time", "Nama", "Status"];

const isLoading = ref(false);
const letters = ref([]);

const getLetters = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .get(`${baseUrl}/letter`)
        .then((response) => {
            const data = response.data.data;
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

onMounted(() => {
    isLoading.value = true;
    getLetters();
    isLoading.value = false;
});
</script>

<template>
    <CustomAppLayout title="Resident">
        <div class="mx-12 mt-12 mb-8">
            <div class="bg-white rounded-lg shadow-lg">
                <div
                    class="flex justify-center items-center py-8"
                    v-if="isLoading"
                >
                    <CustomSpinner />
                </div>

                <div class="text-center font-medium text-xl pb-8 pt-4" v-else>
                    <h3>Data Masyarakat Desa Bulian</h3>
                    <h3>Kecamatan Kabutambahan</h3>
                    <h3>Tahun {{ getYearNow() }}</h3>
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
                                class="bg-gray-100 text-gray-600 border border-gray-400"
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
                                            item.created_at
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
                                                item.status === 'sended',
                                            'bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out':
                                                item.status === 'validated',
                                            'bg-gray-400 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out':
                                                item.status === 'done',
                                        }"
                                        @click="handleValidate(item)"
                                    >
                                        {{
                                            item.status === "validated"
                                                ? "Tervalidasi"
                                                : item.status === "done"
                                                ? "Sudah Diproses"
                                                : "Validasi"
                                        }}
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex justify-end mt-8 mb-12">
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
