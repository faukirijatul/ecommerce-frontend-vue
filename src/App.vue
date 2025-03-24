<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div class="px-4 sm:px-[5vm] md:px-[7vw] lg:px-[9vw]">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>
