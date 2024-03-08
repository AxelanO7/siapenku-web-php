<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";

const isAlert = false;

// function switchAlert() {
//     isAlert = !isAlert;
// }

function handleValidate(id) {
    // go to detail page
    window.location.href = `/village-chief/detail-validate/${id}`;
}

const tableHeaders = ["No.", "Time", "Nama", "Status"];

const tableItems = [
    {
        id: 1,
        time: "5108082002980001",
        name: "HENDRY SUDIARSA",
        status: "Not Validate",
    },
    {
        id: 2,
        time: "5108082002980002",
        name: "HENDRY SUDIARSA",
        status: "Not Validate",
    },
    {
        id: 3,
        time: "5108082002980003",
        name: "HENDRY SUDIARSA",
        status: "Not Validate",
    },
];
</script>

<template>
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
                                    {{ item.time }}
                                </td>
                                <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                >
                                    {{ item.name }}
                                </td>
                                <td
                                    class="text-center border border-gray-400 px-4 py-2 text-gray-600"
                                    v-if="item.status === 'Not Validate'"
                                >
                                    <!-- todo : color -->
                                    <button
                                        class="bg-[#98bf64] text-white font-bold py-2 px-4 rounded hover:bg-lime-600 transition duration-200 ease-in-out"
                                        @click="handleValidate(item.id)"
                                    >
                                        Validasi
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex justify-end mt-8">
                <button
                    class="bg-[#98bf64] text-white font-bold py-2 px-4 rounded hover:bg-lime-600 transition duration-200 ease-in-out"
                >
                    Kirim
                </button>
            </div>
        </form>
    </CustomAppLayout>
</template>
