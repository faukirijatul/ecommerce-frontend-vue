<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import SearchBar from './components/SearchBar.vue'
</script>

<template>
  <div class="px-4 sm:px-[5vm] md:px-[7vw] lg:px-[9vw]">
    <NavbarComponent />
    <SearchBar />
    <RouterView />
    <FooterComponent />
  </div>
</template>
