<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";

const tableHeaders = ["No.", "NIK", "Nama", "L/P", "Tgl Lahir"];

const tableItems = [
    {
        number_identitiy: "5108082002980001",
        name: "HENDRY SUDIARSA",
        gender: "L",
        date_of_birth: "20-02-1998",
    },
    {
        number_identitiy: "5108082002980002",
        name: "HENDRY SUDIARSA",
        gender: "L",
        date_of_birth: "20-02-1998",
    },
    {
        number_identitiy: "5108082002980003",
        name: "HENDRY SUDIARSA",
        gender: "L",
        date_of_birth: "20-02-1998",
    },
];
</script>

<template>
    <div>
        <!-- <div role="alert" class="alert" v-if="isAlert">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-info shrink-0 w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
            </svg>
            <span>12 unread messages. Tap to see.</span>
        </div> -->
        <CustomAppLayout title="Resident">
            <form @submit.prevent="submit" class="mx-12 mt-12">
                <div class="bg-white rounded-lg shadow-lg">
                    <div class="text-center font-medium text-xl pb-8 pt-4">
                        <h3>Data Masyarakat Desa Bulian</h3>
                        <h3>Kecamatan Kabutambahan</h3>
                        <!-- Todo Dynamic Year -->
                        <h3>Tahun 2023</h3>
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
                                    v-for="(item, index) in tableItems"
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
                                        {{ item.number_identitiy }}
                                    </td>
                                    <td
                                        class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                    >
                                        {{ item.name }}
                                    </td>
                                    <td
                                        class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                    >
                                        {{ item.gender }}
                                    </td>
                                    <td
                                        class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                    >
                                        {{ item.date_of_birth }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="flex justify-end mt-8">
                    <button
                        class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                        onclick="switchAlert"
                    >
                        Kirim
                    </button>
                </div>
            </form>
        </CustomAppLayout>
    </div>
</template>
