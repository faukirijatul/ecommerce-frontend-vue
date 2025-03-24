import { ref } from 'vue'
import { defineStore } from 'pinia'
import { products as allProducts } from '@/assets/products'

export const useMainStore = defineStore('mainStore', () => {
  const products = ref(allProducts)
  const currency = 'Rp'
  const deliveryFee = 10000
  const search = ref('')
  const showSearch = ref(false)

  return { products, currency, deliveryFee, search, showSearch }
})
