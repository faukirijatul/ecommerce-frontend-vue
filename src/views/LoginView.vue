<template>
  <form
      @submit.prevent="handleSubmit"
      class="flex flex-col items-center w-[90%] sm:w-96 m-auto mt-14 gap-4 text-gray-800 min-h-[52vh]"
    >
      <div class="inline-flex items-center gap-3 mb-2 mt-10">
        <h1 class="text-3xl font-semibold">Login</h1>
        <hr class="w-8 border-none h-0.5 bg-gray-800" />
      </div>

      <input
        type="email"
        placeholder="Email"
        name="email"
        class="border border-gray-400 rounded py-1.5 px-3.5 w-full"
        v-model="formData.email"
        required
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        class="border border-gray-400 rounded py-1.5 px-3.5 w-full"
        v-model="formData.password"
        required
      />

      <div class="w-full flex justify-start text-sm">
        <RouterLink to="#" class="text-gray-700 hover:text-gray-900 font-medium">
          Forgot Password?
        </RouterLink>
      </div>

      <button class="bg-gray-700 active:bg-gray-900 text-white py-2 px-4 w-full">
        Login
      </button>

      <div class="w-full flex justify-center text-sm mt-1">
        Don't have an account?
        <RouterLink to="/register" class="text-gray-700 hover:text-gray-900 font-medium ml-1">
          Register
        </RouterLink>
      </div>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const formData = ref({
  email: '',
  password: ''
})

const handleSubmit = () => {
  console.log(formData.value)
}
</script>
