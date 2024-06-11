<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import axios from "axios";
import { Checkbox } from "@sc/components/ui/checkbox";
import { Button } from "@sc/components/ui/button";
import AuthHelper from "@/Helper/auth_helper";
import { onMounted } from "vue";
import Swal from "sweetalert2";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    name: "",
    password: "",
    remember: false,
});

const validate = () => {
    if (!form.name) {
        // alert("Username tidak boleh kosong");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username tidak boleh kosong",
        });
        return false;
    }

    if (!form.password) {
        // alert("Password tidak boleh kosong");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password tidak boleh kosong",
        });
        return false;
    }

    return true;
};

const submit = async () => {
    if (!validate()) {
        return;
    }
    const baseUrl = await AuthHelper.getBaseUrl();
    axios
        .post(`${baseUrl}/login`, {
            name: form.name,
            password: form.password,
        })
        .then(async (response) => {
            localStorage.setItem("token", response.data.token);
            const roleApi = response.data.user.role;
            const role = await AuthHelper.getRoleString(roleApi);
            localStorage.setItem("role", role);
            // alert("Login berhasil");
            Swal.fire({
                icon: "success",
                title: "Login berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
            window.location.href = "/";
        })
        .catch((error) => {
            // alert("Login gagal");
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login gagal",
            });
        });
};

onMounted(() => {
    LocalStorage.clear();
});
</script>

<template>
    <Head title="Log in" />

    <div
        class="flex items-center justify-center py-20 px-4 bg-blue-400 space-x-12 w-screen h-screen select-none"
    >
        <div class="flex w-full px-20">
            <div class="flex items-center justify-center grow">
                <img src="/assets/images/logo.png" class="object-cover" />
            </div>
            <form
                class="p-8 bg-blue-range-50 rounded-xl shadow-lg bg-blue-50 max-w-md"
                @submit.prevent="submit"
            >
                <p class="font-black text-2xl text-center tracking-widest">
                    SIAPENKU
                </p>
                <div
                    class="flex flex-col items-center justify-center mx-auto space-y-8 mt-16"
                >
                    <input
                        type="text"
                        v-model="form.name"
                        @input="form.name = $event.target.value"
                        placeholder="Username"
                        class="border-gray-300 w-full rounded-md"
                    />
                    <input
                        type="password"
                        v-model="form.password"
                        @input="form.password = $event.target.value"
                        class="border-gray-300 w-full rounded-md"
                        placeholder="Password"
                    />
                </div>
                <div
                    class="flex transition duration-300 ease-in-out justify-between mt-4 text-sm"
                >
                    <div
                        class="flex space-x-2 cursor-pointer items-center"
                        @click="form.remember = !form.remember"
                    >
                        <Checkbox />
                        <p class="my-auto">Ingat Saya</p>
                    </div>
                    <p class="my-auto">Lupa password ?</p>
                </div>
                <div class="flex justify-center mt-12">
                    <Button class="px-12">Login</Button>
                </div>
                <p class="mt-8 text-center font-semibold">
                    Sistem Pengolahan Data Administrasi Desa Balian Kecamatan
                    Kabutambangan
                </p>
            </form>
        </div>
    </div>

    <!-- <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div
            v-if="status"
            class="mb-4 font-medium text-sm text-green-600 dark:text-green-400"
        >
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="username"
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm text-gray-600 dark:text-gray-400"
                        >Remember me</span
                    >
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton
                    class="ms-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard> -->
</template>
