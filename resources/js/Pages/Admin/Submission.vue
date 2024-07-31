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
    maritalStatus: "",
    profession: "",
    attFC: null,
    attNameFC: "",
    attCE: null,
    attNameCE: "",
    attRS: null,
    attNameRS: "",
    typeSubmission: window.location.pathname.split("/").pop(),
    // birth
    orderChild: null,
    birthAttendant: null,
    addressAttendant: null,
    identityCardMother: null,
    nameMother: null,
    birthPlaceMother: null,
    birthDateMother: null,
    addressMother: null,
    identityCardFather: null,
    nameFather: null,
    birthPlaceFather: null,
    birthDateFather: null,
    addressFather: null,
    // death
    nameRequester: null,
    identityCardRequester: null,
    addressRequester: null,
    relationshipRequester: null,
    dateDeath: null,
    villageDeath: null,
    subDistrictDeath: null,
    districtDeath: null,
    provinceDeath: null,
    causeDeath: null,
});

const submit = async () => {
    isSubmiting.value = true;
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
        marital_status: form.maritalStatus,
        profession: form.profession,
        status: "pending",
        att_family_card: form.attNameFC,
        att_certificate: form.attNameCE,
        att_rs: form.attNameRS,
        type_submission: form.typeSubmission,
        // birth
        order_child: form.orderChild,
        birth_attendant: form.birthAttendant,
        address_attendant: form.addressAttendant,
        identity_card_mother: form.identityCardMother,
        name_mother: form.nameMother,
        birth_place_mother: form.birthPlaceMother,
        birth_date_mother: form.birthDateMother,
        address_mother: form.addressMother,
        identity_card_father: form.identityCardFather,
        name_father: form.nameFather,
        birth_place_father: form.birthPlaceFather,
        birth_date_father: form.birthDateFather,
        address_father: form.addressFather,
        // death
        name_requester: form.nameRequester,
        identity_card_requester: form.identityCardRequester,
        address_requester: form.addressRequester,
        relationship_requester: form.relationshipRequester,
        date_death: form.dateDeath,
        village_death: form.villageDeath,
        sub_district_death: form.subDistrictDeath,
        district_death: form.districtDeath,
        province_death: form.provinceDeath,
        cause_death: form.causeDeath,
    };
    axios
        .post(`${baseUrl}/letter`, payload)
        .then((response) => {
            Swal.fire({
                icon: "success",
                title: "Berhasil mengirimkan data",
                showConfirmButton: false,
                timer: 1500,
            });
            const resId = response.data.data.id;
            saveFile(resId, form.attFC, form.attCE, form.attRS);
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

const updateAttachment = async (idProps, nFC, nCE, nRS) => {
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
        marital_status: form.maritalStatus,
        profession: form.profession,
        status: "pending",
        att_family_card: nFC,
        att_certificate: nCE,
        att_rs: nRS,
        type_submission: form.typeSubmission,
        // birth
        order_child: form.orderChild,
        birth_attendant: form.birthAttendant,
        address_attendant: form.addressAttendant,
        identity_card_mother: form.identityCardMother,
        name_mother: form.nameMother,
        birth_place_mother: form.birthPlaceMother,
        birth_date_mother: form.birthDateMother,
        address_mother: form.addressMother,
        identity_card_father: form.identityCardFather,
        name_father: form.nameFather,
        birth_place_father: form.birthPlaceFather,
        birth_date_father: form.birthDateFather,
        address_father: form.addressFather,
        // death
        name_requester: form.nameRequester,
        identity_card_requester: form.identityCardRequester,
        address_requester: form.addressRequester,
        relationship_requester: form.relationshipRequester,
        date_death: form.dateDeath,
        village_death: form.villageDeath,
        sub_district_death: form.subDistrictDeath,
        district_death: form.districtDeath,
        province_death: form.provinceDeath,
        cause_death: form.causeDeath,
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

const saveFile = async (idProps, fileFC, fileCE, fileRS) => {
    let fileNameFC = "";
    let fileNameCE = "";
    let fileNameRS = "";
    const baseUrl = await AuthHelper.getBaseUrl();
    // if (form.attFC !== null) {
    const formDataFC = new FormData();
    formDataFC.append("file", fileFC);
    await axios
        .post(`${baseUrl}/letter/file`, formDataFC, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            const fileName = response.data.data;
            fileNameFC = fileName;
            // updateAttachment(
            //     idProps,
            //     fileName,
            //     form.attNameCE,
            //     form.attNameRS
            // );
        })
        .catch((error) => {
            console.log(error);
        });
    // }
    // if (form.attCE !== null) {
    const formDataCE = new FormData();
    formDataCE.append("file", fileCE);
    await axios
        .post(`${baseUrl}/letter/file`, formDataCE, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            const fileName = response.data.data;
            fileNameCE = fileName;
            // updateAttachment(
            //     idProps,
            //     form.attNameFC,
            //     fileName,
            //     form.attNameRS
            // );
        })
        .catch((error) => {
            console.log(error);
        });
    // }
    // if (form.attRS !== null) {
    const formDataRS = new FormData();
    formDataRS.append("file", fileRS);
    await axios
        .post(`${baseUrl}/letter/file`, formDataRS, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            console.log(response);
            const fileName = response.data.data;
            fileNameRS = fileName;
            // updateAttachment(
            //     idProps,
            //     form.attNameFC,
            //     form.attNameCE,
            //     fileName
            // );
        })
        .catch((error) => {
            console.log(error);
        });
    // }
    console.log(
        "idProps",
        idProps,
        "fileNameFC",
        fileNameFC,
        "fileNameCE",
        fileNameCE,
        "fileNameRS",
        fileNameRS
    );
    updateAttachment(idProps, fileNameFC, fileNameCE, fileNameRS);
};

const handleChangeFamilyCard = (e) => {
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
    form.attNameFC = e.target.files[0].name;
    form.attFC = e.target.files[0];
    console.log(form.attFC);
};

const handleChangeCertificate = (e) => {
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
    form.attNameCE = e.target.files[0].name;
    form.attCE = e.target.files[0];
    console.log(form.attCE);
};

const handleChangeRS = (e) => {
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
    form.attNameRS = e.target.files[0].name;
    form.attRS = e.target.files[0];
    console.log(form.attRS);
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
const nationalities = [
    { value: "WNI", label: "WNI" },
    { value: "WNA", label: "WNA" },
];

const openGender = ref(false);
const openReligion = ref(false);
const openMaritalStatus = ref(false);
const openProfession = ref(false);
const openNationality = ref(false);

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
                        <!-- birth letter -->
                        <div
                            class="space-y-4 px-8 py-4 text-left"
                            v-if="form.typeSubmission === 'birth-letter'"
                        >
                            <div class="flex space-x-8">
                                <!-- name -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Nama Lengkap
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.name"
                                        placeholder="Nama Lengkap Anak"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                                <!-- order child -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex">
                                        Urutan Anak
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.orderChild"
                                        type="number"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
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
                                <!-- birth attendant -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex">
                                        Penolong Kelahiran
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.birthAttendant"
                                        placeholder="Penolong Kelahiran"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
                                <!-- address -->
                                <div class="w-full">
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
                                <!-- address attendant -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Alamat Penolong Kelahiran
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <textarea
                                        v-model="form.addressAttendant"
                                        placeholder="Alamat Penolong Kelahiran"
                                        class="border-gray-300 w-full rounded-md"
                                        rows="2"
                                        style="resize: none"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
                                <!-- identity card mother -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >NIK Ibu
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.identityCardMother"
                                        type="number"
                                        placeholder="NIK Ibu"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                    />
                                </div>
                                <!-- name mother -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Nama Ibu
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.nameMother"
                                        placeholder="Nama Ibu"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
                                <!-- birth place mother -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex">
                                        Tempat Lahir Ibu
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.birthPlaceMother"
                                        placeholder="Tempat Lahir Ibu"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                                <!-- birth date mother -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex">
                                        Tanggal Lahir Ibu
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        type="date"
                                        v-model="form.birthDateMother"
                                        placeholder="Tanggal Lahir Ibu"
                                        class="border-gray-300 w-full rounded-md"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
                                <!-- identity card father -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >NIK Ayah
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.identityCardFather"
                                        type="number"
                                        placeholder="NIK Ayah"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                    />
                                </div>
                                <!-- name father -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Nama Ayah
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.nameFather"
                                        placeholder="Nama Ayah"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
                                <!-- birth place father -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex">
                                        Tempat Lahir Ayah
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        v-model="form.birthPlaceFather"
                                        placeholder="Tempat Lahir Ayah"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    />
                                </div>
                                <!-- birth date father -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex">
                                        Tanggal Lahir Ayah
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <input
                                        type="date"
                                        v-model="form.birthDateFather"
                                        placeholder="Tanggal Lahir Ayah"
                                        class="border-gray-300 w-full rounded-md"
                                    />
                                </div>
                            </div>
                            <div class="flex space-x-8">
                                <!-- address father -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Alamat Ayah
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <textarea
                                        v-model="form.addressFather"
                                        placeholder="Alamat Ayah"
                                        class="border-gray-300 w-full rounded-md"
                                        rows="2"
                                        style="resize: none"
                                    />
                                </div>
                                <!-- address mother -->
                                <div class="w-full">
                                    <label class="text-base font-bold flex"
                                        >Alamat Ibu
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <textarea
                                        v-model="form.addressMother"
                                        placeholder="Alamat Ibu"
                                        class="border-gray-300 w-full rounded-md"
                                        rows="2"
                                        style="resize: none"
                                    />
                                </div>
                            </div>
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
                        </div>
                        <!-- general letter -->
                        <div class="space-y-4 px-8 py-4 text-left" v-else>
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
                                        >Kewarganegaraan
                                        <p class="text-red-500 ml-1">*</p>
                                    </label>
                                    <Popover v-model:open="openNationality">
                                        <PopoverTrigger as-child>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                :aria-expanded="openNationality"
                                                class="w-full justify-between"
                                            >
                                                {{
                                                    form.nationality
                                                        ? nationalities.find(
                                                              (nationality) =>
                                                                  nationality.value ===
                                                                  form.nationality
                                                          )?.label
                                                        : "Kewarganegaraan"
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
                                                            v-for="national in nationalities"
                                                            :key="
                                                                national.value
                                                            "
                                                            :value="
                                                                national.value
                                                            "
                                                            @select="
                                                                (ev) => {
                                                                    if (
                                                                        typeof ev
                                                                            .detail
                                                                            .value ===
                                                                        'string'
                                                                    ) {
                                                                        form.nationality =
                                                                            ev.detail.value;
                                                                    }
                                                                    openNationality = false;
                                                                }
                                                            "
                                                        >
                                                            {{ national.label }}
                                                            <Check
                                                                :class="
                                                                    cn(
                                                                        'ml-auto h-4 w-4',
                                                                        form.nationality ===
                                                                            national.value
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

                                    <!-- <input
                                        v-model="form.nationality"
                                        placeholder="Kebangsaan"
                                        class="border-gray-300 w-full rounded-md"
                                        oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                    /> -->
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
                                                    form.maritalStatus
                                                        ? maritalStatuses.find(
                                                              (
                                                                  marital_status
                                                              ) =>
                                                                  marital_status.value ===
                                                                  form.maritalStatus
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
                                                                        form.maritalStatus =
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
                                                                        form.maritalStatus ===
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
                            <!-- death column -->
                            <div
                                class="space-y-4"
                                v-if="form.typeSubmission === 'death-letter'"
                            >
                                <div class="flex space-x-8">
                                    <!-- name requester -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >Nama Pemohon
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.nameRequester"
                                            placeholder="Nama Pemohon"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                        />
                                    </div>
                                    <!-- identity card requester -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >NIK Pemohon
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.identityCardRequester"
                                            type="number"
                                            placeholder="NIK Pemohon"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                                        />
                                    </div>
                                </div>
                                <div class="flex space-x-8">
                                    <!-- address requester -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >Alamat Pemohon
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <textarea
                                            v-model="form.addressRequester"
                                            placeholder="Alamat Pemohon"
                                            class="border-gray-300 w-full rounded-md"
                                            rows="1"
                                            style="resize: none"
                                        />
                                    </div>
                                    <!-- relationship -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >Hubungan dengan Almarhum
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.relationship"
                                            placeholder="Hubungan dengan Almarhum"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                        />
                                    </div>
                                </div>
                                <div class="flex space-x-8">
                                    <!-- death date -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex">
                                            Tanggal Kematian
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            type="date"
                                            v-model="form.dateDeath"
                                            placeholder="Tanggal Kematian"
                                            class="border-gray-300 w-full rounded-md"
                                        />
                                    </div>
                                    <!-- cause death -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex">
                                            Penyebab Kematian
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.causeDeath"
                                            placeholder="Penyebab Kematian"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                        />
                                    </div>
                                </div>
                                <div class="flex space-x-8">
                                    <!-- village death -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >Desa Tempat Kematian
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.villageDeath"
                                            placeholder="Desa Tempat Kematian"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                        />
                                    </div>
                                    <!-- sub district death -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >Kecamatan Tempat Kematian
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.subDistrictDeath"
                                            placeholder="Kecamatan Tempat Kematian"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                        />
                                    </div>
                                </div>
                                <div class="flex space-x-8">
                                    <!-- district death -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >Kabupaten Tempat Kematian
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.districtDeath"
                                            placeholder="Kabupaten Tempat Kematian"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                        />
                                    </div>
                                    <!-- province death -->
                                    <div class="w-full">
                                        <label class="text-base font-bold flex"
                                            >Provinsi Tempat Kematian
                                            <p class="text-red-500 ml-1">*</p>
                                        </label>
                                        <input
                                            v-model="form.provinceDeath"
                                            placeholder="Provinsi Tempat Kematian"
                                            class="border-gray-300 w-full rounded-md"
                                            oninput="this.value = this.value.replace(/[^a-z A-Z]/g, '')"
                                        />
                                    </div>
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
                        </div>
                        <div class="flex px-8 text-start">
                            <!-- attachment family card -->
                            <div class="w-full">
                                <label class="text-base font-bold flex"
                                    >Lampiran Kartu Keluarga
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    type="file"
                                    placeholder="Lampiran"
                                    @change="handleChangeFamilyCard"
                                    class="border-gray-300 w-full text-sm"
                                />
                                <p class="text-sm text-gray-500 mt-2">
                                    File harus berupa pdf dan tidak lebih dari
                                    2MB
                                </p>
                            </div>
                            <!-- attachment certificate -->
                            <div
                                class="w-full"
                                v-if="
                                    form.typeSubmission === 'name-change-letter'
                                "
                            >
                                <label class="text-base font-bold flex"
                                    >Lampiran Serifikat
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    type="file"
                                    placeholder="Lampiran"
                                    @change="handleChangeCertificate"
                                    class="border-gray-300 w-full text-sm"
                                />
                                <p class="text-sm text-gray-500 mt-2">
                                    File harus berupa pdf dan tidak lebih dari
                                    2MB
                                </p>
                            </div>
                            <!-- attachment rs -->
                            <div
                                class="w-full"
                                v-if="
                                    form.typeSubmission === 'birth-letter' ||
                                    form.typeSubmission === 'death-letter'
                                "
                            >
                                <label class="text-base font-bold flex"
                                    >Lampiran Surat Keterangan RS
                                    <p class="text-red-500 ml-1">*</p>
                                </label>
                                <input
                                    type="file"
                                    placeholder="Lampiran"
                                    @change="handleChangeRS"
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
