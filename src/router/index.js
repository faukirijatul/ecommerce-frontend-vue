import AboutView from '@/views/AboutView.vue'
import CartView from '@/views/CartView.vue'
import CollectionView from '@/views/CollectionView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import OrdersView from '@/views/OrdersView.vue'
import PlaceOrderView from '@/views/PlaceOrderView.vue'
import ProductView from '@/views/ProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/collection',
      name: 'collection',
      component: CollectionView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/place-order',
      name: 'place-order',
      component: PlaceOrderView,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView,
    },
    // not found
    {
      path: '/:notfound*',
      name: 'notfound',
      component: NotFoundView,
    },
  ],
})

export default router
