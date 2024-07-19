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
import axios from "axios";

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
    marital_status: "",
    profession: "",
    attachment: null,
});

const submit = async () => {
    isSubmiting.value = true;
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
            marital_status: form.marital_status,
            profession: form.profession,
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
    isSubmiting.value = false;
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
        marital_status: form.marital_status,
        profession: form.profession,
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
const maritalStatuses = [
    { value: "Belum Menikah", label: "Belum Menikah" },
    { value: "Menikah", label: "Menikah" },
    { value: "Cerai", label: "Cerai" },
];
const professions = [
    { value: "pns", label: "PNS" },
    { value: "tni", label: "TNI" },
    { value: "polri", label: "Polri" },
    { value: "swasta", label: "Swasta" },
    { value: "wiraswasta", label: "Wiraswasta" },
    { value: "petani", label: "Petani" },
    { value: "nelayan", label: "Nelayan" },
    { value: "buruh", label: "Buruh" },
    { value: "lainnya", label: "Lainnya" },
];

const openGender = ref(false);
const openReligion = ref(false);
const openMaritalStatus = ref(false);
const openProfession = ref(false);

const isSubmiting = ref(false);
</script>

<template>
    <div>
        <CustomAppLayout title="Submission">
            <div class="mx-12 mt-12 mb-8">
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
                        <div class="space-y-4 px-8 py-4 text-left">
                            <div class="flex space-x-8">
                                <!-- name -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Nama
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.name"
                                        placeholder="Nama"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                                <!-- birth place -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex">
                                        Tempat Lahir
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.birthPlace"
                                        placeholder="Tempat Lahir"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
                                <!-- gender -->
                                <div class="w-full">
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
                                                            :value="
                                                                gender.value
                                                            "
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
                                <div class="w-full">
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
                                                            :key="
                                                                religion.value
                                                            "
                                                            :value="
                                                                religion.value
                                                            "
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
                            </div>
                            <div class="flex space-x-8">
                                <!-- birth date -->
                                <div class="w-full">
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
                                <!-- family card -->
                                <div class="w-full">
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
                            </div>
                            <div class="flex space-x-8">
                                <!-- identity card -->
                                <div class="w-full">
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
                                <!-- nationaly -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Kebangsaan
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.nationality"
                                        placeholder="Kebangsaan"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                            </div>
                            <!-- address -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >Alamat
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <textarea
                                    v-model="form.address"
                                    placeholder="Alamat"
                                    class="border-gray-300 w-full rounded-md"
                                    rows="2"
                                    style="resize: none"
                                />
                            </div>
                            <div class="flex space-x-8">
                                <!-- profession -->
                                <div class="flex flex-col w-full">
                                    <label class="text-base font-bold flex">
                                        Pekerjaan
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <Popover v-model:open="openProfession">
                                        <PopoverTrigger as-child>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                :aria-expanded="openProfession"
                                                class="justify-between"
                                            >
                                                {{
                                                    form.profession
                                                        ? professions.find(
                                                              (profession) =>
                                                                  profession.value ===
                                                                  form.profession
                                                          )?.label
                                                        : "Pekerjaan"
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
                                                            v-for="profession in professions"
                                                            :key="
                                                                profession.value
                                                            "
                                                            :value="
                                                                profession.value
                                                            "
                                                            @select="
                                                                (ev) => {
                                                                    if (
                                                                        typeof ev
                                                                            .detail
                                                                            .value ===
                                                                        'string'
                                                                    ) {
                                                                        form.profession =
                                                                            ev.detail.value;
                                                                    }
                                                                    openProfession = false;
                                                                }
                                                            "
                                                        >
                                                            {{
                                                                profession.label
                                                            }}
                                                            <Check
                                                                :class="
                                                                    cn(
                                                                        'ml-auto h-4 w-4',
                                                                        form.profession ===
                                                                            profession.value
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
                                <!-- marital status -->
                                <div class="flex flex-col w-full">
                                    <label class="text-base font-bold flex">
                                        Status Perkawinan
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <Popover v-model:open="openMaritalStatus">
                                        <PopoverTrigger as-child>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                :aria-expanded="
                                                    openMaritalStatus
                                                "
                                                class="justify-between w-full"
                                            >
                                                {{
                                                    form.marital_status
                                                        ? maritalStatuses.find(
                                                              (
                                                                  marital_status
                                                              ) =>
                                                                  marital_status.value ===
                                                                  form.marital_status
                                                          )?.label
                                                        : "Status Perkawinan"
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
                                                            v-for="marital_status in maritalStatuses"
                                                            :key="
                                                                marital_status.value
                                                            "
                                                            :value="
                                                                marital_status.value
                                                            "
                                                            @select="
                                                                (ev) => {
                                                                    if (
                                                                        typeof ev
                                                                            .detail
                                                                            .value ===
                                                                        'string'
                                                                    ) {
                                                                        form.marital_status =
                                                                            ev.detail.value;
                                                                    }
                                                                    openMaritalStatus = false;
                                                                }
                                                            "
                                                        >
                                                            {{
                                                                marital_status.label
                                                            }}
                                                            <Check
                                                                :class="
                                                                    cn(
                                                                        'ml-auto h-4 w-4',
                                                                        form.marital_status ===
                                                                            marital_status.value
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
                            </div>
                            <!-- needs -->
                            <div>
                                <label class="text-base font-bold flex"
                                    >Keperluan
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <textarea
                                    v-model="form.needs"
                                    placeholder="Keperluan"
                                    class="border-gray-300 w-full rounded-md"
                                    rows="4"
                                    style="resize: none"
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
                                <p class="text-sm text-gray-500 mt-2">
                                    File harus berupa pdf dan tidak lebih dari
                                    2MB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-8">
                    <button
                        :class="
                            cn(
                                'bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white',
                                isSubmiting
                                    ? 'opacity-50 cursor-not-allowed'
                                    : ''
                            )
                        "
                        :disabled="isSubmiting"
                        @click="submit"
                    >
                        Kirim
                    </button>
                </div>
            </div>
        </CustomAppLayout>
    </div>
</template>
