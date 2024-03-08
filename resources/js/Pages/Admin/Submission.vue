<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import CustomInput from "@/Components/Customs/CustomInput.vue";
import { useForm } from "@inertiajs/vue3";

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

function submit() {
    form.transform((data) => ({
        ...data,
    })).post(route("submission"), {
        onFinish: () => form.reset("nik"),
    });
}

const formItems = [
    {
        label: "Nama",
        type: "text",
        value: form.name,
    },
    {
        label: "Tempat Lahir",
        type: "text",
        value: form.birthPlace,
    },
    {
        label: "Tanggal Lahir",
        type: "text",
        value: form.birthDate,
    },
    {
        label: "Jenis Kelamin",
        type: "text",
        value: form.gender,
    },
    {
        label: "Agama",
        type: "text",
        value: form.religion,
    },
    {
        label: "No. KK",
        type: "text",
        value: form.familyCard,
    },
    {
        label: "NIK",
        type: "text",
        value: form.identityCard,
    },
    {
        label: "Alamat",
        type: "text",
        value: form.address,
    },
    {
        label: "Kebangsaan",
        type: "text",
        value: form.nationality,
    },
    {
        label: "Keperluan",
        type: "text",
        value: form.needs,
    },
    {
        label: "Lampiran",
        type: "file",
        value: form.attachment,
    },
];
</script>

<template>
    <div>
        <CustomAppLayout title="Submission">
            <form @submit.prevent="submit" class="mx-12 mt-12">
                <div class="bg-white rounded-lg shadow-lg">
                    <div class="text-center font-medium text-xl pt-4 pb-8">
                        <h3>
                            Formulir Pengajuan Surat Administrasi Desa Bulian
                        </h3>
                        <h3>Kecamatan Kabutambahan</h3>
                        <h3>Banjar Dinas Dangin Margi</h3>
                        <hr class="border-2 border-black my-4" />
                        <div class="space-y-4 px-8">
                            <CustomInput
                                v-for="item in formItems"
                                :key="item.label"
                                :label="item.label"
                                :type="item.type"
                                :value="item.value"
                            />
                        </div>
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
    </div>
</template>
