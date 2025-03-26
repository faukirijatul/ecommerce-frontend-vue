<template>
  <div class="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
    <!-- Left -->
    <div class="flex flex-col gap-4 w-full sm:max-w-[480px]">
      <div class="text-xl sm:text-2xl my-3">
        <TitleComponent text1="DELIVERY" text2="INFORMATON" />
      </div>

      <div class="flex gap-3">
        <input
          type="text"
          placeholder="First Name"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      <input
        type="email"
        placeholder="Email Address"
        class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
      />
      <input
        type="text"
        placeholder="Street"
        class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
      />
      <div class="flex gap-3">
        <input
          type="text"
          placeholder="City"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="State"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      <div class="flex gap-3">
        <input
          type="number"
          placeholder="Zip Code"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full no-spinner"
        />
        <input
          type="text"
          placeholder="Country"
          class="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      <input
        type="text"
        placeholder="Phone Number: +62..."
        class="border border-gray-300 rounded py-1.5 px-3.5 w-full no-spinner"
      />
    </div>

    <!-- Right -->
    <div class="mt-4">
      <div class="min-w-80">
        <CartTotal />
      </div>

      <div class="mt-12">
        <TitleComponent text1="PAYMENT" text2="METHOD" />
        <!-- Payment Selection -->
        <div class="flex gap-3 flex-col lg:flex-row">
          <div
            class="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            @click="method = 'stripe'"
          >
            <p
              :class="`min-w-3.5 h-3.5 border rounded-full ${
                method === 'stripe' && 'bg-green-400'
              }`"
            ></p>
            <img :src="stripeLogo" alt="stripe" class="h-5" />
          </div>
          <div
            class="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            @click="method = 'razorpay'"
          >
            <p
              :class="`min-w-3.5 h-3.5 border rounded-full ${
                method === 'razorpay' && 'bg-green-400'
              }`"
            ></p>
            <img :src="razorpayLogo" alt="stripe" class="h-5" />
          </div>
          <div
            class="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            @click="method = 'cod'"
          >
            <p
              :class="`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' && 'bg-green-400'}`"
            ></p>
            <p class="text-sm text-gray-500 font-medium mx-4">Cash on Delivery</p>
          </div>
        </div>

        <div class="mt-10 flex justify-end">
          <button
            :class="`bg-gray-700 active:bg-gray-900 text-white py-2 px-4`"
            @click="router.push('/orders')"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartTotal from '@/components/CartTotal.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import stripeLogo from '../assets/images/stripe_logo.png'
import razorpayLogo from '../assets/images/razorpay_logo.png'

const method = ref('cod')

const router = useRouter()
</script>

<style scoped></style>
