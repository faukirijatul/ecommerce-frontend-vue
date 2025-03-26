<template>
  <div className="w-full">
      <div className="text-xl">
        <TitleComponent text1="CART" text2="TOTALS" />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p>
           {{ mainStore.currency }} {{ mainStore.getAmount().toLocaleString("id") || 0 }}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee:</p>
          <p>
           {{ mainStore.currency }} {{ mainStore.deliveryFee.toLocaleString("id") || 0 }}
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-lg">
          <p>Total:</p>
          <p>
           {{ mainStore.currency }}{{ ((mainStore.getAmount() || 0) + mainStore.deliveryFee).toLocaleString("id") }}
          </p>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore';
import TitleComponent from './TitleComponent.vue';

const mainStore = useMainStore()

</script>
