<template>
  <div v-if="product" class="border-t pt-10">
    <div class="flex gap-5 md:gap-12 flex-col sm:flex-row">
      <!-- product images -->
      <div class="w-full sm:w-1/2">
        <img :src="image" :alt="product.name" class="w-full object-cover" />
        <div class="grid grid-cols-5 gap-1 mt-5 w-full">
          <img
            v-for="img in product.image"
            :key="img"
            :src="img"
            alt="product"
            :class="`object-cover border border-gray-300 ${
              img === image ? 'border-2 border-gray-700' : ''
            }`"
            @click="image = img"
          />
        </div>
      </div>

      <!-- product details -->
      <div class="w-full sm:w-1/2">
        <h1 class="text-2xl font-meduim">{{ product.name }}</h1>
        <p class="text-2xl mt-2">{{ currency }} {{ product.price.toLocaleString('id-ID') }}</p>
        <div class="flex flex-col gap-2 my-8">
          <p>Select Size:</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="item in product.sizes"
              :key="item"
              :class="`border border-gray-700 py-1 px-3 ${
                item === size ? 'bg-gray-700 text-white' : ''
              }`"
              @click="size = item"
            >
              {{ item }}
            </button>
          </div>
        </div>

        <!-- product quantity -->
        <div class="flex flex-col gap-2 my-8">
          <p>Quantity:</p>
          <div class="flex gap-2">
            <button
              class="border border-gray-700 py-1 px-3 active:bg-gray-200"
              @click="decrementQuantity"
            >
              -
            </button>
            <input
              type="number"
              class="border border-gray-700 py-1 px-1 w-12 text-center outline-none no-spinner"
              v-model="quantity"
            />
            <button
              class="border border-gray-700 py-1 px-3 active:bg-gray-200"
              @click="incrementQuantity"
            >
              +
            </button>
          </div>
        </div>

        <!-- add to cart -->
        <div class="flex gap-3">
          <button
            :class="`bg-gray-700 active:bg-gray-900 text-white py-2 px-4 ${
              !size || !quantity ? 'opacity-50 cursor-not-allowed' : ''
            }`"
            @click="handleAddToCart"
            :disabled="!size || !quantity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- product description -->
    <div class="mt-10">
      <h2 class="text-2xl font-medium">Description</h2>
      <p class="mt-3 whitespace-pre-wrap">{{ product.description }}</p>
    </div>

    <!-- related products -->
    <RelatedProducts :category="product.category" :subCategory="product.subCategory" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '../stores/mainStore'
import { storeToRefs } from 'pinia'
import RelatedProducts from '../components/RelatedProducts.vue'
import { useToast } from "vue-toastification";

const toast = useToast();
const route = useRoute()
const store = useMainStore()
const { products, currency, cartData } = storeToRefs(store)

const productId = computed(() => route.params.productId)
const product = ref(null)
const image = ref('')
const size = ref(null)
const quantity = ref(1)

// Function to find and set the product
const findProduct = () => {
  const foundProduct = products.value.find((p) => p._id === productId.value)
  if (foundProduct) {
    product.value = foundProduct
    image.value = foundProduct.image[0]
  }
}

// Watch for changes in productId or products array
watch(
  [productId, products],
  () => {
    findProduct()
  },
  { immediate: true },
)

// Increment quantity
const incrementQuantity = () => {
  quantity.value = Number(quantity.value) + 1
}

// Decrement quantity
const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value = Number(quantity.value) - 1
  }
}

onMounted(() => {
  cartData.value = JSON.parse(localStorage.getItem('cartItems')) || []
})

watch(
  cartData,
  (newCartData) => {
    localStorage.setItem('cartItems', JSON.stringify(newCartData))
  },
  { deep: true },
)

// Add to cart function
const handleAddToCart = () => {
  if (!size.value) {
    alert('Silakan pilih ukuran terlebih dahulu!')
    return
  }

  const orderItem = {
    ...product.value,
    size: size.value,
    quantity: Number(quantity.value),
  }

  let updatedCartItems

  if (cartData.value.some((item) => item._id === orderItem._id && item.size === orderItem.size)) {
    updatedCartItems = cartData.value.map((item) => {
      if (item._id === orderItem._id && item.size === orderItem.size) {
        return { ...item, quantity: item.quantity + orderItem.quantity }
      }
      return item
    })
  } else {
    updatedCartItems = [...cartData.value, orderItem]
  }

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))

  cartData.value = [...updatedCartItems]

  toast.success("Cart updated!")
}
</script>

<style scoped>
.no-spinner::-webkit-inner-spin-button,
.no-spinner::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.no-spinner {
  -moz-appearance: textfield;
}
</style>
