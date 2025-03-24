<template>
  <div class="flex flex-col sm:flex-row border border-gray-400">
    <!-- Left -->
    <div class="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
      <div class="text-[#414141]">
        <div class="flex items-center gap-2">
          <p class="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p class="font-medium text-sm md:text-base">Our Best Seller</p>
        </div>
        <h1 class="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
        <div class="flex items-center gap-2">
          <p class="font-medium text-sm md:text-base">Shop Now</p>
          <p class="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>
      </div>
    </div>

    <!-- Right -->
    <img :src="heroimage" alt="hero-image" class="w-full sm:w-1/2" />
  </div>
</template>

<script setup>
import heroimage from '../assets/images/heroimage.png'
</script>
