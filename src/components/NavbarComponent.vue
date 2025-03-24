<template>
  <div class="flex items-center justify-between py-5 font-medium">
    <RouterLink to="/" class="text-2xl">Tokobaju</RouterLink>

    <ul class="hidden sm:flex gap-5 text-gray-700">
      <RouterLink to="/" class="flex flex-col items-center gap-1" v-slot="{ isActive }"
        ><div>Home</div>
        <hr class="w-2/4 border-none h-[1.5px] bg-gray-700" :class="{ hidden: !isActive }" />
      </RouterLink>

      <RouterLink to="/collection" class="flex flex-col items-center gap-1" v-slot="{ isActive }"
        ><div>Collection</div>
        <hr class="w-2/4 border-none h-[1.5px] bg-gray-700" :class="{ hidden: !isActive }" />
      </RouterLink>

      <RouterLink to="/about" class="flex flex-col items-center gap-1" v-slot="{ isActive }"
        ><div>About</div>
        <hr class="w-2/4 border-none h-[1.5px] bg-gray-700" :class="{ hidden: !isActive }" />
      </RouterLink>

      <RouterLink to="/contact" class="flex flex-col items-center gap-1" v-slot="{ isActive }"
        ><div>Contact</div>
        <hr class="w-2/4 border-none h-[1.5px] bg-gray-700" :class="{ hidden: !isActive }" />
      </RouterLink>
    </ul>

    <div class="flex items-center gap-5">
      <!-- Search -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <!-- User -->
      <div class="group relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        <!-- menu -->
        <div class="absolute hidden group-hover:block right-0 pt-3">
          <div class="flex flex-col gap-2 w-36 px-5 bg-slate-100 text-gray-500 rounded">
            <RouterLink to="/profile" class="py-3 cursor-pointer hover:text-black"
              ><div>Profile</div></RouterLink
            >
            <RouterLink to="/orders" class="py-3 cursor-pointer hover:text-black"
              ><div>Orders</div></RouterLink
            >
            <div class="py-3 cursor-pointer hover:text-black">Logout</div>
          </div>
        </div>
      </div>

      <!-- Cart -->
      <RouterLink to="/cart" class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>

        <span
          class="absolute leading-4 bottom-[-5px] right-[-5px] text-[8px] bg-black text-white text-center aspect-square w-4 rounded-full"
        >
          1
        </span>
      </RouterLink>

      <!-- Menu icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 sm:hidden cursor-pointer"
        @click="menuOpen = !menuOpen"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>

    <div
      class="absolute top-0 left-0 bottom-0 overflow-hidden bg-white transition-all"
      :class="menuOpen ? 'w-full' : 'w-0'"
    >
      <!-- close -->
      <div class="absolute top-5 left-5 cursor-pointer" @click="menuOpen = false">
        <!-- Close icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>

      <div class="flex flex-col gap-10 items-center justify-center h-full">
        <RouterLink to="/" v-slot="{ isActive }" @click="menuOpen = false">
          <div
            class="flex flex-col items-center gap-1"
            :class="isActive ? 'text-gray-700 underline' : ''"
          >
            Home
          </div>
        </RouterLink>
        <RouterLink to="/collection" v-slot="{ isActive }" @click="menuOpen = false">
          <div
            class="flex flex-col items-center gap-1"
            :class="isActive ? 'text-gray-700 underline' : ''"
          >
            Collection
          </div>
        </RouterLink>
        <RouterLink to="/about" v-slot="{ isActive }" @click="menuOpen = false">
          <div
            class="flex flex-col items-center gap-1"
            :class="isActive ? 'text-gray-700 underline' : ''"
          >
            About
          </div>
        </RouterLink>
        <RouterLink to="/contact" v-slot="{ isActive }" @click="menuOpen = false">
          <div
            class="flex flex-col items-center gap-1"
            :class="isActive ? 'text-gray-700 underline' : ''"
          >
            Contact
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const menuOpen = ref(false)
</script>
