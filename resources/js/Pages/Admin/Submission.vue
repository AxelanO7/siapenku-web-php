<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import CustomInput from "@/Components/Customs/CustomInput.vue";
import { useForm } from "@inertiajs/vue3";
import ApiHelper from "@/Helper/api_helper";

const form = useForm({
    name: "",
    birthPlace: "",
    birthDate: "",
    gender: "",
    religion: "",
    familyCard: "",
    identityCard: "",
    address: "",
    nationality: "",
    needs: "",
    attachment: "",
});

const submit = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    axios
        .post(`${baseUrl}/letter`, {
            name: form.name,
            birth_place: form.birthPlace,
            birth_date: form.birthDate,
            gender: form.gender,
            religion: form.religion,
            family_card: form.familyCard,
            identity_card: form.identityCard,
            address: form.address,
            nationality: form.nationality,
            needs: form.needs,
            attachment: form.attachment,
            status: "pending",
        })
        .then((response) => {
            alert("Berhasil mengirimkan data");
        })
        .catch((error) => {
            alert("Gagal mengirimkan data");
        });
};

const pickFile = (e) => {
    form.attachment = e.target.files[0].name;
};
</script>

<template>
    <div>
        <CustomAppLayout title="Submission">
            <div class="mx-12 mt-12 mb-8">
                <div class="bg-white rounded-lg shadow-lg">
                    <div class="text-center font-medium text-xl pt-4 pb-8">
                        <h3>
                            Formulir Pengajuan Surat Administrasi Desa Bulian
                        </h3>
                        <h3>Kecamatan Kabutambahan</h3>
                        <h3>Banjar Dinas Dangin Margi</h3>
                        <hr class="border-2 border-black my-4" />
                        <div class="space-y-4 px-8 py-4 text-left">
                            <!-- name -->
                            <div>
                                <label class="text-base font-bold">Nama</label>
                                <input
                                    v-model="form.name"
                                    placeholder="Nama"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- birth place -->
                            <div>
                                <label class="text-base font-bold">
                                    Tempat Lahir
                                </label>
                                <input
                                    v-model="form.birthPlace"
                                    placeholder="Tempat Lahir"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- birth date -->
                            <div>
                                <label class="text-base font-bold">
                                    Tanggal Lahir
                                </label>
                                <input
                                    type="date"
                                    v-model="form.birthDate"
                                    placeholder="Tanggal Lahir"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- gender -->
                            <div>
                                <label class="text-base font-bold">
                                    Jenis Kelamin
                                </label>
                                <select
                                    v-model="form.gender"
                                    class="border-gray-300 w-full rounded-md"
                                >
                                    <option value="l">Laki-laki</option>
                                    <option value="p">Perempuan</option>
                                </select>
                            </div>
                            <!-- religion -->
                            <div>
                                <label class="text-base font-bold">Agama</label>
                                <input
                                    v-model="form.religion"
                                    placeholder="Agama"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- family card -->
                            <div>
                                <label class="text-base font-bold"
                                    >No. KK</label
                                >
                                <input
                                    v-model="form.familyCard"
                                    type="number"
                                    placeholder="No. KK"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- identity card -->
                            <div>
                                <label class="text-base font-bold">NIK</label>
                                <input
                                    v-model="form.identityCard"
                                    type="number"
                                    placeholder="NIK"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- address -->
                            <div>
                                <label class="text-base font-bold"
                                    >Alamat</label
                                >
                                <input
                                    v-model="form.address"
                                    placeholder="Alamat"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- nationaly -->
                            <div>
                                <label class="text-base font-bold"
                                    >Kebangsaan</label
                                >
                                <input
                                    v-model="form.nationality"
                                    placeholder="Kebangsaan"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- needs -->
                            <div>
                                <label class="text-base font-bold"
                                    >Keperluan</label
                                >
                                <input
                                    v-model="form.needs"
                                    placeholder="Keperluan"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- attachment -->
                            <div>
                                <label class="text-base font-bold"
                                    >Lampiran</label
                                >
                                <input
                                    type="file"
                                    placeholder="Lampiran"
                                    @change="pickFile"
                                    class="border-gray-300 w-full text-sm"
                                />
                            </div>

                            <!-- <CustomInput
                                v-for="item in formItems"
                                :key="item.label"
                                :label="item.label"
                                :type="item.type"
                                :value="item.value"
                            /> -->
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-8">
                    <button
                        class="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
                        @click="submit"
                    >
                        Kirim
                    </button>
                </div>
            </div>
        </CustomAppLayout>
    </div>
</template>
