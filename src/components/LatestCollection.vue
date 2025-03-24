<template>
  <div class="my-10">
    <div class="text-center py-8 text-3xl">
      <TitleComponent text1="LATEST" text2="COLLECTION" />
      <p class="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quae dolores
        eum quibusdam expedita quia.
      </p>
    </div>

    <!-- Products -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      <ProductCard
        v-for="product in latestProduct"
        :key="product._id"
        :productId="product._id"
        :image="product.image[0]"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script setup>
import TitleComponent from './TitleComponent.vue'
import ProductCard from './ProductCard.vue'
import { useMainStore } from '../stores/mainStore'
import { ref, watchEffect } from 'vue'

const mainStore = useMainStore()

const latestProduct = ref([])

watchEffect(() => {
  if (mainStore.products) {
    const sortedProducts = [...mainStore.products].sort((a, b) => b.date - a.date)
    latestProduct.value = sortedProducts.slice(0, 10)
  }
})
</script>
