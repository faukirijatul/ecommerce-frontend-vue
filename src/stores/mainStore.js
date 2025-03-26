import { ref, computed  } from 'vue'
import { defineStore } from 'pinia'
import { products as allProducts } from '@/assets/products'

export const useMainStore = defineStore('mainStore', () => {
  const products = ref(allProducts)
  const currency = 'Rp.'
  const deliveryFee = 10000
  const search = ref('')
  const showSearch = ref(false)
  const cartData = ref(JSON.parse(localStorage.getItem('cartItems')) || [])

  function saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartData.value))
  }

  function increaseQuantity(productId, size) {
    const index = cartData.value.findIndex((item) => item._id === productId && item.size === size)
    if (index !== -1) {
      cartData.value[index].quantity++
      saveCartToLocalStorage()
    }
  }

  function decreaseQuantity(productId, size) {
    const index = cartData.value.findIndex((item) => item._id === productId && item.size === size)
    if (index !== -1 && cartData.value[index].quantity > 1) {
      cartData.value[index].quantity--
      saveCartToLocalStorage()
    }
  }

  function removeFromCart(id, size) {
    cartData.value = cartData.value.filter(
      (product) => !(product._id === id && product.size === size),
    )
    saveCartToLocalStorage()
  }

  const cartTotal = computed(() => {
    return cartData.value.reduce((total, product) => total + product.price * product.quantity, 0)
  })

  const getAmount = () => {
    let amount = 0;
    cartData.value.forEach((product) => {
      let totalPerItem = product.price * product.quantity;
      amount = amount + totalPerItem;
    });
    return amount;
  };

  return {
    products,
    currency,
    deliveryFee,
    search,
    showSearch,
    cartData,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
    getAmount
  }
})
