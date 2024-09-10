<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import ApiHelper from "@/Helper/auth_helper";

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

// surat keterangan combo box
const sukets = [
    {
        label: "Surat Keterangan Usaha",
        value: "Surat Keterangan Usaha",
    },
    {
        label: "Surat Keterangan Domisili",
        value: "Surat Keterangan Domisili",
    },
    {
        label: "Surat Keterangan Tidak Mampu",
        value: "Surat Keterangan Tidak Mampu",
    },
    {
        label: "Surat Keterangan Kematian",
        value: "Surat Keterangan Kematian",
    },
    {
        label: "Surat Keterangan Lahir",
        value: "Surat Keterangan Lahir",
    },
    {
        label: "Surat Keterangan Pindah",
        value: "Surat Keterangan Pindah",
    },
    {
        label: "Surat Keterangan Cerai",
        value: "Surat Keterangan Cerai",
    },
    {
        label: "Surat Keterangan Belum Menikah",
        value: "Surat Keterangan Belum Menikah",
    },
    {
        label: "Surat Keterangan Menikah",
        value: "Surat Keterangan Menikah",
    },
];
const openSuket = ref(false);
const valueSuket = ref("");

// no surat combo box
const noLetters = [
    {
        label: "01/SKU/2024",
        value: "01/SKU/2024",
    },
    {
        label: "02/SKD/2024",
        value: "02/SKD/2024",
    },
    {
        label: "03/SKT/2024",
        value: "03/SKT/2024",
    },
    {
        label: "04/SKK/2024",
        value: "04/SKK/2024",
    },
    {
        label: "05/SKL/2024",
        value: "05/SKL/2024",
    },
    {
        label: "06/SKP/2024",
        value: "06/SKP/2024",
    },
    {
        label: "07/SKC/2024",
        value: "07/SKC/2024",
    },
    {
        label: "08/SKBM/2024",
        value: "08/SKBM/2024",
    },
    {
        label: "09/SKM/2024",
        value: "09/SKM/2024",
    },
];
const openNoLetter = ref(false);
const valueNoLetter = ref("");

// input witness
const openKadus = ref(false);
const valueKadus = ref("");
const selectedKadus = ref();

// applicant data
const getLetter = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    axios
        .get(`${baseUrl}/letter/${idIndex}`)
        .then((response) => {
            const data = response.data.data;
            dataValidate.value = data;
            filterData();
        })
        .catch((error) => {
            console.log(error);
        });
};
const dataValidate = ref();
const filteredData = ref();

const filterData = () => {
    const data = dataValidate.value;
    const filtered = Object.keys(data).reduce((acc, key) => {
        if (
            key !== "id" &&
            key !== "status" &&
            key !== "created_at" &&
            key !== "updated_at" &&
            key !== "no_letter" &&
            key !== "type_letter" &&
            key !== "name_witness" &&
            key !== "position_witness" &&
            key !== "kasi_id" &&
            key !== "kadus_id" &&
            key !== "kadus" &&
            key !== "kasi" &&
            data[key] !== null
        ) {
            acc[key] = data[key];
        }
        return acc;
    }, {});
    filteredData.value = filtered;
};

// kadus data
const getKadus = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    axios
        .get(`${baseUrl}/kadus`)
        .then((response) => {
            const data = response.data.data;
            dataKadus.value = data;
        })
        .catch((error) => {
            console.log(error);
        });
};
const dataKadus = ref();

const typeLetter = ref();
const getTypeLetter = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    axios.get(`${baseUrl}/letter/type/${idIndex}`).then((response) => {
        typeLetter.value = response.data.data;
    });
};

const handleValidate = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    let payload = dataValidate.value;
    const additionalPayload = {
        // type_letter: valueSuket.value,
        no_letter: typeLetter.value.last_no_letter_by_type,
        kadus_id: valueKadus.value,
    };
    payload = { ...payload, ...additionalPayload };
    payload.status = "sended";
    delete payload.kasi;
    delete payload.kadus;
    axios
        .put(`${baseUrl}/letter/${idIndex}`, payload)
        .then((response) => {
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Data berhasil dikirim",
                showConfirmButton: false,
                timer: 1500,
            });
            window.location.href = `/village-chief/validate`;
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Data gagal dikirim",
                showConfirmButton: false,
                timer: 1500,
            });
            console.log(error);
        });
};

const translateKeyToIndonesian = (key) => {
    switch (key) {
        case "id":
            return "ID";
        case "status":
            return "Status";
        case "created_at":
            return "Dibuat pada";
        case "updated_at":
            return "Diperbarui pada";
        case "nik":
            return "NIK";
        case "name":
            return "Nama";
        case "birth_place":
            return "Tempat Lahir";
        case "birth_date":
            return "Tanggal Lahir";
        case "gender":
            return "Jenis Kelamin";
        case "religion":
            return "Agama";
        case "address":
            return "Alamat";
        case "family_card":
            return "Nomor Kartu Keluarga";
        case "identity_card":
            return "Nomor KTP";
        case "nationality":
            return "Kewarganegaraan";
        case "marital_status":
            return "Status Perkawinan";
        case "profession":
            return "Pekerjaan";
        case "needs":
            return "Keperluan";
        case "attachment":
            return "Lampiran";
        case "type_submission":
            return "Jenis Pengajuan";
        case "att_family_card":
            return "Lampiran Kartu Keluarga";
        case "att_certificate":
            return "Lampiran Ijazah";
        case "att_rs":
            return "Lampiran Surat Keterangan Rumah Sakit";
        case "order_child":
            return "Anak ke";
        case "birth_attendant":
            return "Pembantu Kelahiran";
        case "address_attendant":
            return "Alamat Pembantu Kelahiran";
        case "identity_card_mother":
            return "Nomor KTP Ibu";
        case "name_mother":
            return "Nama Ibu";
        case "birth_place_mother":
            return "Tempat Lahir Ibu";
        case "birth_date_mother":
            return "Tanggal Lahir Ibu";
        case "address_mother":
            return "Alamat Ibu";
        case "identity_card_father":
            return "Nomor KTP Ayah";
        case "name_father":
            return "Nama Ayah";
        case "birth_place_father":
            return "Tempat Lahir Ayah";
        case "birth_date_father":
            return "Tanggal Lahir Ayah";
        case "address_father":
            return "Alamat Ayah";
        case "name_requester":
            return "Nama Pemohon";
        case "identity_card_requester":
            return "Nomor KTP Pemohon";
        case "address_requester":
            return "Alamat Pemohon";
        case "relationship_requester":
            return "Hubungan dengan Pemohon";
        case "date_death":
            return "Tanggal Kematian";
        case "village_death":
            return "Desa Kematian";
        case "sub_district_death":
            return "Kecamatan Kematian";
        case "district_death":
            return "Kabupaten Kematian";
        case "province_death":
            return "Provinsi Kematian";
        case "cause_death":
            return "Penyebab Kematian";
        default:
            return key;
    }
};

const handleTapFile = (value) => {
    Swal.fire({
        title: "Lampiran",
        text: value,
        imageUrl: `/files/${value}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
    });
};

const idIndex = window.location.href.split("/").pop();
onMounted(() => {
    getLetter();
    getKadus();
    getTypeLetter();
});
</script>

<template>
    <CustomAppLayout title="Submission">
        <div class="m-12">
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
                            <h3>Pemerintahan Kabupaten Buleleng</h3>
                            <h3>Kecamatan Kabutambahan</h3>
                            <h3>Banjar Dinas Desa Bulian</h3>
                        </div>
                    </div>
                    <hr class="border-2 border-black my-4" />
                    <div
                        class="flex items-center w-full justify-center space-x-4"
                    >
                        <h3>Surat Keterangan :</h3>
                        <p>{{ dataValidate?.type_letter }}</p>
                        <!-- <Popover v-model:open="openSuket">
                            <PopoverTrigger as-child>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    :aria-expanded="openSuket"
                                    class="justify-between"
                                >
                                    {{
                                        valueSuket
                                            ? sukets.find(
                                                  (letter) =>
                                                      letter.value ===
                                                      valueSuket
                                              )?.label
                                            : "Pilih surat keterangan..."
                                    }}
                                    <ChevronsUpDown
                                        class="ml-2 h-4 w-4 shrink-0 opacity-50"
                                    />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent class="w-[200px] p-0">
                                <Command>
                                    <CommandInput
                                        class="h-9"
                                        placeholder="Cari suket..."
                                    />
                                    <CommandEmpty>
                                        Tidak ada data
                                    </CommandEmpty>
                                    <CommandList>
                                        <CommandGroup>
                                            <CommandItem
                                                v-for="suket in sukets"
                                                :key="suket.value"
                                                :value="suket.value"
                                                @select="
                                                    (ev) => {
                                                        if (
                                                            typeof ev.detail
                                                                .value ===
                                                            'string'
                                                        ) {
                                                            valueSuket =
                                                                ev.detail.value;
                                                        }
                                                        openSuket = false;
                                                    }
                                                "
                                            >
                                                {{ suket.label }}
                                                <Check
                                                    :class="
                                                        cn(
                                                            'ml-auto h-4 w-4',
                                                            valueSuket ===
                                                                suket.value
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
                        </Popover> -->
                    </div>
                    <div class="h-4" />
                    <div
                        class="flex items-center w-full justify-center space-x-4"
                    >
                        <h3>Nomor :</h3>
                        <p>{{ typeLetter.value.last_no_letter_by_type }}</p>
                        <!-- <Popover v-model:open="openNoLetter">
                            <PopoverTrigger as-child>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    :aria-expanded="openNoLetter"
                                    class="justify-between"
                                >
                                    {{
                                        valueNoLetter
                                            ? noLetters.find(
                                                  (letter) =>
                                                      letter.value ===
                                                      valueNoLetter
                                              )?.label
                                            : "Pilih nomor surat..."
                                    }}
                                    <ChevronsUpDown
                                        class="ml-2 h-4 w-4 shrink-0 opacity-50"
                                    />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent class="w-[200px] p-0">
                                <Command>
                                    <CommandInput
                                        class="h-9"
                                        placeholder="Cari nomor surat..."
                                    />
                                    <CommandEmpty>
                                        Tidak ada data
                                    </CommandEmpty>
                                    <CommandList>
                                        <CommandGroup>
                                            <CommandItem
                                                v-for="noLetter in noLetters"
                                                :key="noLetter.value"
                                                :value="noLetter.value"
                                                @select="
                                                    (ev) => {
                                                        if (
                                                            typeof ev.detail
                                                                .value ===
                                                            'string'
                                                        ) {
                                                            valueNoLetter =
                                                                ev.detail.value;
                                                        }
                                                        openNoLetter = false;
                                                    }
                                                "
                                            >
                                                {{ noLetter.label }}
                                                <Check
                                                    :class="
                                                        cn(
                                                            'ml-auto h-4 w-4',
                                                            valueNoLetter ===
                                                                noLetter.value
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
                        </Popover> -->
                    </div>
                    <div class="h-4" />
                    <div class="px-8 text-left">
                        <h3 class="mb-4">
                            Saya yang bertanda tangan dibawah ini :
                        </h3>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <p class="w-1/4">a. Nama</p>
                                <p class="mx-4">:</p>
                                <Popover v-model:open="openKadus">
                                    <PopoverTrigger as-child>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            :aria-expanded="openKadus"
                                            class="justify-between w-3/4"
                                        >
                                            {{
                                                valueKadus
                                                    ? dataKadus.find(
                                                          (kadus) =>
                                                              kadus.id ===
                                                              valueKadus
                                                      )?.name
                                                    : "Pilih nama..."
                                            }}
                                            <ChevronsUpDown
                                                class="ml-2 h-4 w-4 shrink-0 opacity-50"
                                            />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent class="w-[200px] p-0">
                                        <Command>
                                            <CommandInput
                                                class="h-9"
                                                placeholder="Cari nama..."
                                            />
                                            <CommandEmpty>
                                                Tidak ada data
                                            </CommandEmpty>
                                            <CommandList>
                                                <CommandGroup>
                                                    <CommandItem
                                                        v-for="kadus in dataKadus"
                                                        :key="kadus.id"
                                                        :value="kadus.id"
                                                        @select="
                                                            (ev) => {
                                                                if (
                                                                    typeof ev
                                                                        .detail
                                                                        .value ===
                                                                    'number'
                                                                ) {
                                                                    valueKadus =
                                                                        ev
                                                                            .detail
                                                                            .value;
                                                                }
                                                                selectedKadus =
                                                                    kadus;
                                                                openKadus = false;
                                                            }
                                                        "
                                                    >
                                                        {{ kadus.name }}
                                                        <Check
                                                            :class="
                                                                cn(
                                                                    'ml-auto h-4 w-4',
                                                                    valueKadus ===
                                                                        kadus.id
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
                            <div class="flex">
                                <p class="w-1/4">b. Jabatan</p>
                                <p class="mx-4">:</p>
                                <input
                                    class="w-3/4 rounded border border-gray-300"
                                    disabled
                                    :value="selectedKadus?.position || `-`"
                                />
                            </div>
                        </div>
                        <h3 class="my-4">Dengan ini menyatakan bahwa :</h3>
                        <div class="space-y-2">
                            <div v-for="(value, key, index) in filteredData">
                                <div class="flex text-left ml-8">
                                    <div class="w-1/3 flex">
                                        <h3 class="w-10">{{ index + 1 }}.</h3>
                                        <h3>
                                            {{ translateKeyToIndonesian(key) }}
                                        </h3>
                                    </div>
                                    <div
                                        v-if="
                                            key === 'att_family_card' ||
                                            key === 'att_certificate' ||
                                            key === 'att_rs'
                                        "
                                        class="w-2/3 flex"
                                        @click="handleTapFile(value)"
                                    >
                                        :
                                        <div
                                            class="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1"
                                            @click="handleTapFile(value)"
                                        >
                                            {{ value }}
                                        </div>
                                    </div>
                                    <div v-else class="w-2/3">
                                        : {{ value }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="space-y-2" v-if="dataValidate">
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">1. Nama</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.name }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">2. Tempat Lahir</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.birth_place }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">3. Tanggal Lahir</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.birth_date }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">4. Jenis Kelamin</div>
                                    <p class="w-3/4">
                                        :
                                        {{
                                            dataValidate.gender === 1
                                                ? "Laki-laki"
                                                : "Perempuan"
                                        }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">5. Agama</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.religion }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">6. No. KK</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.family_card }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">7. NIK</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.identity_card }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">8. Alamat</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.address }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">9. Kebangsaan</div>
                                    <p class="w-3/4">
                                        :
                                        {{ dataValidate.nationality }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">10. Keperluan</div>
                                    <p class="w-3/4">
                                        : {{ dataValidate.needs }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">
                                        11. Status Perkawinan
                                    </div>
                                    <p class="w-3/4">
                                        :
                                        {{ dataValidate.marital_status }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">12. Pekerjaan</div>
                                    <p class="w-3/4">
                                        :
                                        {{
                                            dataValidate.profession
                                                .charAt(0)
                                                .toUpperCase() +
                                            dataValidate.profession.slice(1)
                                        }}
                                    </p>
                                </div>
                            </div>
                            <div class="flex pl-8">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">13. Lampiran KK</div>
                                    <div class="flex">
                                        :
                                        <div
                                            class="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1"
                                            @click="
                                                handleTapFile(
                                                    dataValidate.att_family_card
                                                )
                                            "
                                        >
                                            {{ dataValidate.att_family_card }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex pl-8"
                                v-if="dataValidate.att_certificate"
                            >
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">14. Lampiran Ijazah</div>
                                    <div class="flex">
                                        :
                                        <div
                                            class="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1"
                                            @click="
                                                handleTapFile(
                                                    dataValidate.att_certificate
                                                )
                                            "
                                        >
                                            {{ dataValidate.att_certificate }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex pl-8" v-if="dataValidate.att_rs">
                                <div class="flex w-full items-center">
                                    <div class="w-1/4">
                                        15. Lampiran Surat RS
                                    </div>
                                    <div class="flex">
                                        :
                                        <div
                                            class="bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1"
                                            @click="
                                                handleTapFile(
                                                    dataValidate.att_rs
                                                )
                                            "
                                        >
                                            {{ dataValidate.att_rs }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <p class="mt-12">
                            Demikian surat keterangan ini dibuat untuk
                            dipergunakan dengan semestinya.
                        </p>
                        <div class="flex justify-end">
                            <div class="text-center">
                                <p>
                                    Bulian,
                                    {{
                                        new Date(dataValidate?.updated_at)
                                            .toLocaleDateString("id-ID", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })
                                            .split("/")
                                            .join("-")
                                    }}
                                </p>
                                <p>Kelian Banjar Dinas Desa Bulian</p>
                                <div class="w-44 mx-auto p-1 rounded mt-4">
                                    <!-- <p>Tanda Tangan Digital</p> -->
                                    <img
                                        :src="`/assets/images/signature/${selectedKadus?.signature}`"
                                        alt="tanda tangan"
                                        class="w-full"
                                    />
                                </div>
                                <p class="mt-4">({{ selectedKadus?.name }})</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end mt-8">
                <button
                    class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white"
                    @click="handleValidate"
                >
                    Kirim
                </button>
            </div>
        </div>
    </CustomAppLayout>
</template>
