<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <router-view />
  <Footer />
  <router-link :to="{ name: 'ContactUs' }">
    <div class="fixed w-16 h-16 rounded-full bg-[#382a1d] bottom-0 right-0 m-5 flex justify-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="white"
        class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    </div>
  </router-link>
</template>


