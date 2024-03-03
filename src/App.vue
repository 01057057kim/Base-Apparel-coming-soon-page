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
    class="font-josefin text-[16px] m-0 p-0 box-border min-w-[1440px] w-full min-h-screen grid grid-cols-2 bg-[url('./assets/images/bg-pattern-desktop.svg')]">
    <div class="col-span-1 row-span-1 flex items-center justify-center flex-col m-auto ml-[230px]">
      <div class="h-[600px] w-[500px]">
        <img class="mb-20" src="./assets/images/logo.svg" alt="logo">
        <h1 class="mb-6 text-7xl w-[400px] uppercase tracking-widest"><span class="text-d-red font-light">We're</span><br>
          coming soon </h1>
        <p class="text-d-red w-[450px] mb-10">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        <div class="border border-solid border-d-g-red border-opacity-30 px-6 py-2 rounded-l-full flex justify-between w-[400px]" :class="{'border-2 border-s-red border-opacity-100': show}">
          <input v-model="email" class="w-[300px] outline-none" type="email" placeholder="Email Address">
          <img v-if="show" class="absolute translate-x-[270px]" src="./assets/images/icon-error.svg" alt="error">
          <button @click="checkEmail" class="rounded-full w-24 h-11 bg-gradient-to-r from-linear2 to-linear2-1 grid place-items-center absolute translate-x-[310px] -translate-y-[10px] transform hover:scale-110">
            <img src="./assets/images/icon-arrow.svg" alt="arrow">
          </button>
        </div>
        <p v-if="show" class="text-s-red text-[14px] mt-1 ml-6">Please provide a valid email</p>
      </div>
    </div>
    <div class="col-span-1 row-span-1 flex justify-end">
      <img class="h-screen" src="./assets/images/hero-desktop.jpg" alt="desktop">
    </div>
  </main>
</template>

