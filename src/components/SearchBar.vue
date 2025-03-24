<template>
  <div
    v-if="mainStore.showSearch"
    class="flex items-center justify-center border-t border-b bg-gray-50 text-center py-3"
  >
    <div class="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2">
      <input
        type="text"
        placeholder="Search"
        class="flex-1 outline-none bg-inherit text-sm"
        v-model="mainStore.search"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 cursor-pointer"
        @click="handleSearch"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 cursor-pointer"
      @click="handleClose"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  </div>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore';
import { useRouter } from 'vue-router';

const mainStore = useMainStore();
const router = useRouter();

const handleSearch = () => {
  router.push('/collection');
};

const handleClose = () => {
  mainStore.showSearch = false;
  mainStore.search = '';
};
</script>
