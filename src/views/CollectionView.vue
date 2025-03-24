<template>
  <div class="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
    <!-- Filter Options -->
    <div class="min-w-60">
      <p
        class="my-2 text-xl flex items-center cursor-pointer gap-2"
        @click="showFilter = !showFilter"
      >
        <span>Filters</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="`${
            showFilter ? 'rotate-180' : ''
          } size-5 transition-all duration-300 ease-in-out inline-block sm:hidden`"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </p>

      <!-- Category Filter -->
      <div :class="`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`">
        <p class="mb-3 text-sm font-medium">Categories</p>
        <div class="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p class="flex gap-2">
            <input type="checkbox" value="Men" id="Men" @change="handleCategory" />
            <label for="Men" class="cursor-pointer"> Men </label>
          </p>
          <p class="flex gap-2">
            <input type="checkbox" value="Women" id="Women" @change="handleCategory" />
            <label for="Women" class="cursor-pointer"> Women </label>
          </p>
          <p class="flex gap-2">
            <input type="checkbox" value="Kids" id="Kids" @change="handleCategory" />
            <label for="Kids" class="cursor-pointer"> Kids </label>
          </p>
        </div>
      </div>

      <!-- Sub Category Filter -->
      <div :class="`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`">
        <p class="mb-3 text-sm font-medium">Type</p>
        <div class="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p class="flex gap-2">
            <input type="checkbox" value="Topwear" id="Topwear" @change="handleSubCategory" />
            <label for="Topwear" class="cursor-pointer"> Topwear </label>
          </p>
          <p class="flex gap-2">
            <input type="checkbox" value="Bottomwear" id="Bottomwear" @change="handleSubCategory" />
            <label for="Bottomwear" class="cursor-pointer"> Bottomwear </label>
          </p>
          <p class="flex gap-2">
            <input type="checkbox" value="Winterwear" id="Winterwear" @change="handleSubCategory" />
            <label for="Winterwear" class="cursor-pointer"> Winterwear </label>
          </p>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex-1">
      <div class="flex justify-between text-base sm:text-2xl mb-4">
        <TitleComponent text1="ALL" text2="COLLECTIONS" />
        <!-- Sorter -->
        <select
          class="border-2 border-gray-300 text-sm px-2"
          @change="(e) => (sortType = e.target.value)"
        >
          <option value="relevant">Sort: Relevant</option>
          <option value="low-high">Sort: Low to High</option>
          <option value="high-low">Sort: High to Low</option>
        </select>
      </div>

      <!-- Products -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <ProductCard
          v-for="product in filtredProducts"
          :key="product._id"
          :product-id="product._id"
          :image="product.image[0]"
          :name="product.name"
          :price="product.price"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useMainStore } from '../stores/mainStore'
import TitleComponent from '../components/TitleComponent.vue'
import ProductCard from '../components/ProductCard.vue'

const mainStore = useMainStore()
const showFilter = ref(false)
const filtredProducts = ref([])
const category = ref([])
const subCategory = ref([])
const sortType = ref('')

const handleCategory = (value) => {
  const cat = value

  if (category.value.includes(cat)) {
    category.value = category.value.filter((item) => item !== cat)
  } else {
    category.value.push(cat)
  }

  console.log(category.value)
}

const handleSubCategory = (e) => {
  const subCat = e.target.value

  if (subCategory.value.includes(subCat)) {
    subCategory.value = subCategory.value.filter((item) => item !== subCat)
  } else {
    subCategory.value.push(subCat)
  }
}
const handleSort = () => {
  if (sortType.value === 'low-high') {
    filtredProducts.value = [...filtredProducts.value].sort((a, b) => a.price - b.price)
  } else if (sortType.value === 'high-low') {
    filtredProducts.value = [...filtredProducts.value].sort((a, b) => b.price - a.price)
  } else {
    filtredProducts.value = [...mainStore.products]
  }
}

watch(
  () => mainStore.products,
  (newProducts) => {
    if (newProducts.length > 0) {
      filtredProducts.value = newProducts
    }
  },
  { immediate: true },
)

watch([category, subCategory, () => mainStore.products], () => {
  if (category.value.length > 0 || subCategory.value.length > 0) {
    filtredProducts.value = [...mainStore.products].filter((product) => {
      return (
        (category.value.includes(product.category) || category.value.length === 0) &&
        (subCategory.value.includes(product.subCategory) || subCategory.value.length === 0)
      )
    })
  } else {
    filtredProducts.value = mainStore.products
  }
  handleSort()
})

watch(sortType, () => {
  handleSort()
})
</script>

<style scoped></style>
