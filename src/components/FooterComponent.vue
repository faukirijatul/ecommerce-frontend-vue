<template>
  <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20">
    <div>
      <RouterLink to="/" className="text-2xl font-semibold" @click="moveToTop">Tokobaju</RouterLink>
      <p className="w-full md:w-2/3 text-gray-600 mt-5 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quae dolores
        eum quibusdam expedita quia.
      </p>
    </div>

    <div>
      <p className="font-medium text-xl mb-5">COMPANY</p>
      <ul className="flex flex-col gap-1 text-gray-600">
        <li>Home</li>
        <li>About</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
      </ul>
    </div>

    <div>
      <p className="font-medium text-xl mb-5">GET IN TOUCH</p>
      <ul className="flex flex-col gap-1 text-gray-600">
        <li>+6287845352397</li>
        <li>faukiofficial@gmail.com</li>
      </ul>
    </div>
  </div>

  <div>
    <hr />
    <p className="text-center text-gray-500 my-5">
      &copy; {{ new Date().getFullYear() }}.
      <RouterLink to="/" className="font-medium" @click="moveToTop"> Tokobaju </RouterLink> - All
      rights reserved
    </p>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { moveToTop } from '../lib/moveToTop.js'
</script>
