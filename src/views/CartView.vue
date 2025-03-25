<template>
  <div class="border-t pt-14">
    <div class="text-2xl mb-3">
      <h2 class="text-center">
        <span>YOUR</span>
        <span class="ml-2">CART</span>
      </h2>
    </div>

    <div>
      <div
        v-for="product in mainStore.cartData"
        :key="product._id + product.size"
        class="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
      >
        <div class="flex items-start gap-6">
          <img :src="product.image[0]" :alt="product.name" class="w-166 sm:w-20" />
          <div>
            <p class="text-xs sm:text-lg font-medium line-clamp-2" :title="product.name">
              {{ product.name }}
            </p>
            <div class="flex items-center gap-5 mt-2">
              <p>{{ mainStore.currency }} {{ product.price.toLocaleString('id-ID') }}</p>
              <p class="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                {{ product.size }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1 items-center">
          <div class="flex gap-2">
            <button
              class="border border-gray-700 py-1 px-3 active:bg-gray-200"
              @click="mainStore.decreaseQuantity(product._id, product.size)"
            >
              -
            </button>
            <input
              type="number"
              class="border border-gray-700 py-1 px-1 w-12 text-center outline-none no-spinner"
              :value="product.quantity"
              readonly
            />
            <button
              class="border border-gray-700 py-1 px-3 active:bg-gray-200"
              @click="mainStore.increaseQuantity(product._id, product.size)"
            >
              +
            </button>
          </div>
          <p class="font-semibold">
            {{ mainStore.currency }}
            {{ (product.price * product.quantity).toLocaleString('id-ID') }}
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 hover:text-red-400 cursor-pointer"
          @click="mainStore.removeFromCart(product._id, product.size)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L6.16 5.79m8.786 0H5.84m11.314 0h1.5c.882 0 1.567.726 1.567 1.613 0 .888-.685 1.614-1.567 1.614h-1.5m-9.054 0H4.733c-.883 0-1.567-.726-1.567-1.614 0-.887.684-1.613 1.567-1.613h1.5"
          />
        </svg>
      </div>
    </div>

    <div class="flex justify-end my-20">
      <div class="w-full sm:w-[450px]">
        <div class="bg-slate-50 p-4 rounded-lg space-y-3">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>{{ mainStore.currency }} {{ mainStore.cartTotal?.toLocaleString('id-ID') }}</span>
          </div>
          <div class="flex justify-between">
            <span>Delivery Fee</span>
            <span
              >{{ mainStore.currency }} {{ mainStore.deliveryFee?.toLocaleString('id-ID') }}</span
            >
          </div>
          <div class="flex justify-between font-bold">
            <span>Total</span>
            <span
              >{{ mainStore.currency }}
              {{ (mainStore.cartTotal + mainStore.deliveryFee)?.toLocaleString('id-ID') }}</span
            >
          </div>
        </div>

        <div class="mt-10 flex justify-end">
          <button class="bg-gray-700 active:bg-gray-900 text-white py-2 px-4">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore'

const mainStore = useMainStore()
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
