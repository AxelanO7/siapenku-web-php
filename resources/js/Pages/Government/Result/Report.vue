<script setup>
import CustomAppLayout from "@/Pages/Customs/Layouts/CustomAppLayout.vue";
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);
import ApiHelper from "@/Helper/auth_helper";
import axios from "axios";
import { onMounted, ref } from "vue";
import CustomSpinner from "@/Components/Customs/CustomSpinner.vue";

const lettersByMonth = ref([
    { month: 1, total: 0 },
    { month: 2, total: 0 },
    { month: 3, total: 0 },
    { month: 4, total: 0 },
    { month: 5, total: 0 },
    { month: 6, total: 0 },
    { month: 7, total: 0 },
    { month: 8, total: 0 },
    { month: 9, total: 0 },
    { month: 10, total: 0 },
    { month: 11, total: 0 },
    { month: 12, total: 0 },
]);
const getLetters = async () => {
    const baseUrl = await ApiHelper.getBaseUrl();
    await axios
        .get(`${baseUrl}/letter`)
        .then((response) => {
            const data = response.data.data;
            data.forEach((item) => {
                const month = new Date(item.created_at).getMonth();
                lettersByMonth.value[month].total += 1;
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

const fetchData = async () => {
    isLoading.value = true;
    await getLetters();
    chartData.datasets[0].data = lettersByMonth.value.map((item) => item.total);
    console.log(lettersByMonth.value);
    isLoading.value = false;
};

const isLoading = ref(false);
onMounted(() => {
    fetchData();
});

const chartData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    datasets: [
        {
            label: "Surat Masuk",
            backgroundColor: "#f87979",
            data: [],
        },
    ],
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};
</script>

<template>
    <CustomAppLayout title="Report">
        <div class="flex justify-center items-center py-8" v-if="isLoading">
            <CustomSpinner />
        </div>

        <div class="bg-white rounded-lg shadow-lg mx-12 mb-12" v-else>
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
                        <h3>Desa Bulian</h3>
                        <h3>
                            Jln. Kubutambahan-Kintamani, Telp. 087758730344,
                            Kode Pos 81172
                        </h3>
                    </div>
                </div>
                <hr class="border-2 border-black my-4" />
                <div class="text-left px-8">
                    <p>A. Pendahuluan</p>
                    <p class="mt-4">
                        &nbsp&nbsp&nbsp&nbsp&nbsp Pada pelaksanaan kegiatan
                        administrasi kependudukan desa yang dilakukan selama
                        periode 2022/2023, saya selaku penanggung jawab membuat
                        laporan pertanggung jawaban ini untuk keperluan
                        administrasi desa. Dibawah ini saya lampirkan
                        perkembangan dari pengadministrasian kependudukan di
                        Desa Bulian.
                    </p>
                    <p class="mt-4">B. Pengajuan Surat</p>
                    <div class="flex items-center max-w-6xl">
                        <Bar
                            v-if="!isLoading"
                            id="my-chart-id"
                            :data="chartData"
                            class="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </CustomAppLayout>
</template>
