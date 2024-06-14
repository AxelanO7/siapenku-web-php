<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import { useForm } from "@inertiajs/vue3";
import AuthHelper from "@/Helper/auth_helper";
import { ref } from "vue";
import { Check, ChevronsUpDown } from "lucide-vue-next";

import { cn } from "@sc/utils";
import { Button } from "@sc/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@sc/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@sc/components/ui/popover";
import Swal from "sweetalert2";

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
    attachmentName: "",
    attachment: null,
});

const submit = async () => {
    const baseUrl = await AuthHelper.getBaseUrl();
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
            attachment: form.attachmentName,
            status: "pending",
        })
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: "Berhasil mengirimkan data",
                showConfirmButton: false,
                timer: 1500,
            });
            const resId = response.data.data.id;
            saveFile(resId, form.attachment);
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Gagal mengirimkan data",
                showConfirmButton: false,
                timer: 1500,
            });
        });
};

const updateAttachment = async (idProps, filename) => {
    const baseUrl = await AuthHelper.getBaseUrl();
    const payload = {
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
        attachment: filename,
        status: "pending",
    };
    axios
        .put(`${baseUrl}/letter/${idProps}`, payload)
        .then((response) => {
            console.log(response);
            // window.location.reload();
            // Swal.fire({
            //     icon: "success",
            //     title: "Berhasil mengirimkan data",
            //     showConfirmButton: false,
            //     timer: 1500,
            // });
            // saveFile(form.attachment);
            // window.location.href = "/submission";
        })
        .catch((error) => {
            console.log(error);
            // window.location.reload();
            // Swal.fire({
            //     icon: "error",
            //     title: "Gagal mengirimkan data",
            //     showConfirmButton: false,
            //     timer: 1500,
            // });
        });
};

const saveFile = async (idProps, file) => {
    const formData = new FormData();
    formData.append("file", file);
    const baseUrl = await AuthHelper.getBaseUrl();
    axios
        .post(`${baseUrl}/letter/file`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            const fileName = response.data.data;
            updateAttachment(idProps, fileName);
        })
        .catch((error) => {
            console.log(error);
        });
};

const pickFile = (e) => {
    const allowedExtensions = /(\.pdf|\.png)$/i;
    if (!allowedExtensions.exec(e.target.files[0].name)) {
        Swal.fire({
            icon: "error",
            title: "File harus berupa pdf atau png",
            showConfirmButton: false,
            timer: 1500,
        });
        e.target.value = "";
        return;
    }
    if (e.target.files[0].size > 2097152) {
        Swal.fire({
            icon: "error",
            title: "File tidak boleh lebih dari 2MB",
            showConfirmButton: false,
            timer: 1500,
        });
        e.target.value = "";
        return;
    }
    form.attachmentName = e.target.files[0].name;
    form.attachment = e.target.files[0];
    console.log(form.attachment);
};

const genders = [
    { value: "l", label: "Laki-laki" },
    { value: "p", label: "Perempuan" },
];

const religions = [
    { value: "islam", label: "Islam" },
    { value: "kristen", label: "Kristen" },
    { value: "katolik", label: "Katolik" },
    { value: "hindu", label: "Hindu" },
    { value: "budha", label: "Budha" },
    { value: "konghucu", label: "Konghucu" },
];

const openGender = ref(false);
const valueGender = ref("");
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
                                <label class="text-base font-bold flex"
                                    >Nama
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    v-model="form.name"
                                    placeholder="Nama"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- birth place -->
                            <div>
                                <label class="text-base font-bold flex">
                                    Tempat Lahir
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    v-model="form.birthPlace"
                                    placeholder="Tempat Lahir"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- birth date -->
                            <div>
                                <label class="text-base font-bold flex">
                                    Tanggal Lahir
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    type="date"
                                    v-model="form.birthDate"
                                    placeholder="Tanggal Lahir"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- gender -->
                            <div class="flex flex-col">
                                <label class="text-base font-bold flex">
                                    Jenis Kelamin
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <Popover v-model:open="openGender">
                                    <PopoverTrigger as-child>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            :aria-expanded="openGender"
                                            class="w-full justify-between"
                                        >
                                            {{
                                                form.gender
                                                    ? genders.find(
                                                          (gender) =>
                                                              gender.value ===
                                                              form.gender
                                                      )?.label
                                                    : "Jenis kelamin"
                                            }}
                                            <ChevronsUpDown
                                                class="ml-2 h-4 w-4 shrink-0 opacity-50"
                                            />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent class="p-0">
                                        <Command>
                                            <CommandInput
                                                class="h-9"
                                                placeholder="Search..."
                                            />
                                            <CommandEmpty
                                                >No data found</CommandEmpty
                                            >
                                            <CommandList>
                                                <CommandGroup>
                                                    <CommandItem
                                                        v-for="gender in genders"
                                                        :key="gender.value"
                                                        :value="gender.value"
                                                        @select="
                                                            (ev) => {
                                                                if (
                                                                    typeof ev
                                                                        .detail
                                                                        .value ===
                                                                    'string'
                                                                ) {
                                                                    form.gender =
                                                                        ev.detail.value;
                                                                }
                                                                openGender = false;
                                                            }
                                                        "
                                                    >
                                                        {{ gender.label }}
                                                        <Check
                                                            :class="
                                                                cn(
                                                                    'ml-auto h-4 w-4',
                                                                    form.gender ===
                                                                        gender.value
                                                                        ? 'opacity-100'
                                                                        : 'opacity-0'
                                                                )
                                                            "
                                                        />
                                                    </CommandItem>
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <!-- religion -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >Agama
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <Popover v-model:open="openReligion">
                                    <PopoverTrigger as-child>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            :aria-expanded="openReligion"
                                            class="w-full justify-between"
                                        >
                                            {{
                                                form.religion
                                                    ? religions.find(
                                                          (religion) =>
                                                              religion.value ===
                                                              form.religion
                                                      )?.label
                                                    : "Agama"
                                            }}
                                            <ChevronsUpDown
                                                class="ml-2 h-4 w-4 shrink-0 opacity-50"
                                            />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent class="p-0">
                                        <Command>
                                            <CommandInput
                                                class="h-9"
                                                placeholder="Search..."
                                            />
                                            <CommandEmpty
                                                >No data found</CommandEmpty
                                            >
                                            <CommandList>
                                                <CommandGroup>
                                                    <CommandItem
                                                        v-for="religion in religions"
                                                        :key="religion.value"
                                                        :value="religion.value"
                                                        @select="
                                                            (ev) => {
                                                                if (
                                                                    typeof ev
                                                                        .detail
                                                                        .value ===
                                                                    'string'
                                                                ) {
                                                                    form.religion =
                                                                        ev.detail.value;
                                                                }
                                                                openReligion = false;
                                                            }
                                                        "
                                                    >
                                                        {{ religion.label }}
                                                        <Check
                                                            :class="
                                                                cn(
                                                                    'ml-auto h-4 w-4',
                                                                    form.religion ===
                                                                        religion.value
                                                                        ? 'opacity-100'
                                                                        : 'opacity-0'
                                                                )
                                                            "
                                                        />
                                                    </CommandItem>
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <!-- family card -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >No. KK
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    v-model="form.familyCard"
                                    type="number"
                                    placeholder="No. KK"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- identity card -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >NIK
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    v-model="form.identityCard"
                                    type="number"
                                    placeholder="NIK"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- address -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >Alamat
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    v-model="form.address"
                                    placeholder="Alamat"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- nationaly -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >Kebangsaan
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    v-model="form.nationality"
                                    placeholder="Kebangsaan"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- needs -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >Keperluan
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    v-model="form.needs"
                                    placeholder="Keperluan"
                                    class="border-gray-300 w-full rounded-md"
                                />
                            </div>
                            <!-- attachment -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >Lampiran
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    type="file"
                                    placeholder="Lampiran"
                                    @change="pickFile"
                                    class="border-gray-300 w-full text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-8">
                    <button
                        class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                        @click="submit"
                    >
                        Kirim
                    </button>
                </div>
            </div>
        </CustomAppLayout>
    </div>
</template>
