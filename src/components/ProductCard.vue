<template>
  <RouterLink :to="'/product/' + productId" class="text-gray-700">
      <div class="overflow-hidden">
        <img
          :src="image"
          :alt="name"
          class="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p class="pt-3 pb-1 text-sm line-clamp-2">{{ name }}</p>
      <p class="text-sm font-medium">
        {{ mainStore.currency }} {{ price }}
      </p>
    </RouterLink>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore'
import { RouterLink} from 'vue-router'
const mainStore = useMainStore()

const { image, name, price, productId } = defineProps(['image', 'name', 'price', 'productId'])
</script>
