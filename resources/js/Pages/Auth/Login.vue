<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import AuthenticationCard from "@/Components/AuthenticationCard.vue";
import AuthenticationCardLogo from "@/Components/AuthenticationCardLogo.vue";
import Checkbox from "@/Components/Checkbox.vue";
import InputError from "@/Components/InputError.vue";
// import PrimaryButton from "@/Components/PrimaryButton.vue";
// import PrimaryButton from "@/Components/Custom/PrimaryButton.vue";
import InputLabel from "@/Components/Custom/InputLabel.vue";
import TextInput from "@/Components/Custom/TextInput.vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <Head title="Log in" />

    <div
        class="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#bee6a7] space-x-12 w-screen h-screen select-none"
    >
        <div class="flex max-w-screen-xl">
            <img
                src="/assets/images/login.png"
                alt="login"
                class="w-1/3 h-1/2 object-cover flex self-center"
            />
            <form
                class="p-8 bg-[#D0F0C0] rounded-xl shadow-lg w-full"
                @submit.prevent="submit"
            >
                <div class="w-32 h-32 mx-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="black"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <p
                    class="bg-white px-4 py-1 w-max mt-8 font-semibold text-lg text-center mx-auto mb-16"
                >
                    USER LOGIN
                </p>
                <div
                    class="flex flex-col items-center justify-center w-96 mx-auto space-y-8"
                >
                    <div class="flex items-center w-96 justify-between">
                        <!-- <InputLabel for="username" value="Username" />
                        <TextInput
                            id="username"
                            type="text"
                            class="mt-1 block w-full"
                            required
                            autofocus
                            autocomplete="username"
                        /> -->
                        <p class="bg-white p-1">Username :</p>
                        <input
                            type="text"
                            v-model="form.email"
                            @input="form.email = $event.target.value"
                            class="border-gray-300 focus:border-lime-400 focus:ring-lime-400 rounded-md shadow-sm focus:ring-opacity-50"
                        />
                    </div>
                    <div class="flex items-center w-96 justify-between">
                        <p class="bg-white p-1">Password :</p>
                        <input
                            type="password"
                            v-model="form.password"
                            @input="form.password = $event.target.value"
                            class="border-gray-300 focus:border-lime-400 focus:ring-lime-400 rounded-md shadow-sm focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <p
                    class="mt-4 flex justify-end cursor-pointer max-w-sm mx-auto hover:text-lime-400 transition duration-300 ease-in-out"
                >
                    Lupa password ?
                </p>
                <div class="flex justify-center mt-12">
                    <button
                        class="py-1 rounded-md bg-white px-24 font-bold text-lg text-black hover:bg-lime-400 hover:text-white transition duration-300 ease-in-out"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        type="submit"
                    >
                        Log in
                    </button>
                </div>
                <p class="mt-8 mb-8 max-w-sm text-center mx-auto font-semibold">
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
