<script setup>
import { ref } from 'vue'

const email = ref()
const show = ref(false)

const checkEmail = () => {

    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(email.value) || pattern.test == '') {
        show.value = true;
    } else {
        show.value = false;
    }

}


</script>

<template>
    <main
        class="font-josefin text-[16px] m-0 p-0 box-border min-w-[375px] grid place-content-center min-h-screen mx-auto bg-[url('./assets/images/bg-pattern-desktop.svg')]">
        <div class="h-full w-[375px] mb-20">
            <img class="px-10 py-8 w-[200px]" src="./assets/images/logo.svg" alt="logo">
            <img class="w-full mb-10" src="./assets/images/hero-mobile.jpg" alt="mobile">
            <h1 class="mb-6 text-4xl flex flex-col items-center text-center uppercase tracking-widest font-semibold">
                <span class="text-d-red font-light">We're</span>coming<br>soon
            </h1>
            <div class="flex items-center justify-center flex-col">
                <p class="text-d-red mb-10 text-center w-[350px]">
                    Hello fellow shoppers! We're currently building our new fashion store.
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
            </div>
            <div class=" border border-solid border-d-g-red border-opacity-30 px-6 py-2 rounded-l-full flex justify-between w-[330px]"
                :class="{ 'border-2 border-s-red border-opacity-100': show }">
                <input v-model="email" class="w-[300px] outline-none" type="email" placeholder="Email Address">
                <img v-if="show" class="absolute translate-x-[240px]" src="./assets/images/icon-error.svg" alt="error">
                <button @click="checkEmail"
                    class="rounded-full w-16 h-11 bg-gradient-to-r from-linear2 to-linear2-1 grid place-items-center absolute translate-x-[280px] -translate-y-[10px] transform hover:scale-110">
                    <img src="./assets/images/icon-arrow.svg" alt="arrow">
                </button>
            </div>
            <p v-if="show" class="text-s-red text-[14px] mt-1 ml-6">Please provide a valid email</p>
        </div>
    </main>
</template>

