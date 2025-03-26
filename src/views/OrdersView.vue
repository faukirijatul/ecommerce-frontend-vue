<template>
  <div class="border-t pt-16 min-h-[60vh]">
    <div class="text-2xl">
      <TitleComponent text1="YOUR" text2="ORDERS" />
    </div>

    <!-- Order List -->
    <div>
      <div
        v-for="product in mainStore.cartData"
        :key="product._id"
        class="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
      >
        <div class="flex items-center gap-6 text-sm flex-1">
          <img :src="product.image[0]" :alt="product.title" class="w-16 sm:w-20 object-cover" />
          <div class="">
            <p class="font-medium text-base">{{ product.name }}</p>
            <div class="flex items-center gap-3 mt-2 text-base text-gray-700">
              <p class="text-lg">
                {{ mainStore.currency }} {{ product.price.toLocaleString('id') }}
              </p>
              <p class="">Quantity: {{ product.quantity || 1 }}</p>
              <p class="">Size: {{ product.size || '2XL' }}</p>
            </div>
            <p>
              Date: <span class="text-gray-400">{{ mainStore.product?.date || '2023-01-01' }}</span>
            </p>
          </div>
        </div>

        <div class="md:w-1/3 flex justify-end gap-3">
          <div class="flex items-center gap-2">
            <p class="min-w-2 h-2 rounded-full bg-green-500"></p>
            <p class="text-sm md:text-base">Ready to ship</p>
          </div>
          <button class="border border-gray-400 p-1">Track Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TitleComponent from '@/components/TitleComponent.vue'
import { useMainStore } from '@/stores/mainStore'

const mainStore = useMainStore()
</script>
