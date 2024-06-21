<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import ApiHelper from "@/Helper/auth_helper";
import axios from "axios";
import { onMounted, ref } from "vue";
import CustomSpinner from "@/Components/Customs/CustomSpinner.vue";
import Swal from "sweetalert2";

const tableHeaders = ["No.", "NIK", "Nama", "L/P", "Tgl Lahir", "Aksi"];
const isLoading = ref(false);

const residents = ref([]);
const getResidents = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .get(`${baseUrl}/resident`)
        .then((response) => {
            const data = response.data.data;
            residents.value = data;
        })
        .catch((error) => {
            console.log(error);
        });
};

// create
const handleCreate = () => {
    Swal.fire({
        title: "Tambah Data",
        html: `
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nik">
                        NIK
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nik"
                        placeholder="NIK"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Nama
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        placeholder="Nama"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gender">
                        Gender
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        placeholder="Jenis Kelamin"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="birthdate">
                        Tanggal Lahir
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        type="date"
                        placeholder="Tanggal Lahir"
                    />
                </div>
            </form>
        `,
        showCancelButton: true,
        confirmButtonText: "Simpan",
        cancelButtonText: "Batal",
    }).then((result) => {
        if (result.isConfirmed) {
            createResident();
        }
    });
};
const createResident = async () => {
    const form = {
        nik: document.getElementById("nik").value,
        name: document.getElementById("name").value,
        gender: document.getElementById("gender").value,
        birthdate: document.getElementById("birthdate").value,
    };
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .post(`${baseUrl}/resident`, form)
        .then((res) => {
            Swal.fire("Berhasil", "Data berhasil ditambahkan", "success");
            getResidents();
        })
        .catch((error) => {
            console.log(error);
            Swal.fire("Gagal", "Data gagal ditambahkan", "error");
        });
};

// edit
const handleEdit = (val) => {
    Swal.fire({
        title: "Edit Data",
        html: `
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nik">
                        NIK
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nik"
                        placeholder="NIK"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Nama
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        placeholder="Nama"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gender">
                        Gender
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        placeholder="Jenis Kelamin"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="birthdate">
                        Tanggal Lahir
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        type="date"
                        placeholder="Tanggal Lahir"
                    />
                </div>
            </form>
        `,
        didOpen: () => {
            const date = new Date(val.birthdate);
            document.getElementById("nik").value = val.nik;
            document.getElementById("name").value = val.name;
            document.getElementById("gender").value = val.gender;
            document.getElementById("birthdate").value =
                date.getFullYear() +
                "-" +
                ("0" + (date.getMonth() + 1)).slice(-2) +
                "-" +
                ("0" + date.getDate()).slice(-2);
        },
        showCancelButton: true,
        confirmButtonText: "Simpan",
        cancelButtonText: "Batal",
    }).then((result) => {
        if (result.isConfirmed) {
            editResident(val.id);
        }
    });
};
const editResident = async (valId) => {
    const form = {
        id: valId,
        nik: document.getElementById("nik").value,
        name: document.getElementById("name").value,
        gender: document.getElementById("gender").value,
        birthdate: document.getElementById("birthdate").value,
    };
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .put(`${baseUrl}/resident/${valId}`, form)
        .then((res) => {
            Swal.fire("Berhasil", "Data berhasil diubah", "success");
            getResidents();
        })
        .catch((error) => {
            console.log(error);
            Swal.fire("Gagal", "Data gagal diubah", "error");
        });
};

// delete
const handleDelete = (id) => {
    Swal.fire({
        title: "Hapus Data",
        text: "Apakah anda yakin ingin menghapus data ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
    }).then((result) => {
        if (result.isConfirmed) {
            deleteResident(id);
        }
    });
};
const deleteResident = async (valId) => {
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .delete(`${baseUrl}/resident/${valId}`)
        .then((res) => {
            Swal.fire("Berhasil", "Data berhasil dihapus", "success");
            getResidents();
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    isLoading.value = true;
    getResidents();
    isLoading.value = false;
});
</script>

<template>
    <div>
        <CustomAppLayout title="Resident">
            <div class="flex justify-center items-center py-8" v-if="isLoading">
                <CustomSpinner />
            </div>

            <form @submit.prevent="submit" class="mx-12 mt-12" v-else>
                <button
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                    @click="handleCreate"
                >
                    Tambah Data
                </button>
                <div class="bg-white rounded-lg shadow-lg mt-4">
                    <div class="text-center font-medium text-xl pb-8 pt-4">
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
                                <!-- Todo Dynamic Year -->
                                <h3>Tahun 2023</h3>
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
                                    class="bg-gray-100 text-gray-600 border border-gray-400"
                                    v-for="(item, index) in residents"
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
                                        {{ item.nik }}
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
                                        {{ item.birthdate }}
                                    </td>
                                    <td
                                        class="text-center border border-gray-400 px-4 py-2 text-gray-600 space-x-4"
                                    >
                                        <button
                                            class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-lg w-20"
                                            @click="handleEdit(item)"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded text-lg w-20"
                                            @click="handleDelete(item.id)"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </CustomAppLayout>
    </div>
</template>
