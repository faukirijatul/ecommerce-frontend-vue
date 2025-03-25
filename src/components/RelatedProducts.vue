<template>
  <div className="my-20">
    <div className="text-center text-xl py-2">
      <TitleComponent text1="RELATED" text2="PRODUCTS" />
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      <ProductCard
        v-for="product in related"
        :key="product._id"
        :product-id="product._id"
        :image="product.image[0]"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore'
import { storeToRefs } from 'pinia'
import ProductCard from './ProductCard.vue'
import TitleComponent from './TitleComponent.vue'
import { computed } from 'vue'

const store = useMainStore()
const { products } = storeToRefs(store)

const props = defineProps(['category', 'subCategory'])

const related = computed(() => {
  return products.value.filter((product) => {
    return product.category === props.category && product.subCategory === props.subCategory
  })
})
</script>
