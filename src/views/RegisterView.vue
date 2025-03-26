<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col items-center w-[90%] sm:w-96 m-auto mt-14 gap-4 text-gray-800 min-h-[52vh]"
  >
    <div class="inline-flex items-center gap-3 mb-2 mt-10">
      <h1 class="text-3xl font-semibold">Register</h1>
      <hr class="w-8 border-none h-0.5 bg-gray-800" />
    </div>
    <input
      type="text"
      placeholder="Name"
      name="name"
      v-model="formData.name"
      class="border border-gray-400 rounded py-1.5 px-3.5 w-full"
      required
    />
    <input
      type="email"
      placeholder="Email"
      name="email"
      v-model="formData.email"
      class="border border-gray-400 rounded py-1.5 px-3.5 w-full"
      required
    />
    <input
      type="password"
      placeholder="Password"
      name="password"
      v-model="formData.password"
      class="border border-gray-400 rounded py-1.5 px-3.5 w-full"
      required
    />
    <input
      type="password"
      placeholder="Confirm Password"
      name="confirmPassword"
      v-model="formData.confirmPassword"
      class="border border-gray-400 rounded py-1.5 px-3.5 w-full"
      required
    />

    <button class="bg-gray-700 active:bg-gray-900 text-white py-2 px-4 w-full">
      Register
    </button>
    <div class="w-full flex justify-center text-sm mt-1">
      Already have an account?
      <RouterLink to="/login" class="text-gray-700 hover:text-gray-900 font-medium ml-1">
        Login
      </RouterLink>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';import { RouterLink } from 'vue-router';
import { useToast } from "vue-toastification";

const toast = useToast();

const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleSubmit = () => {
  console.log(formData.value);

  if (formData.value.password !== formData.value.confirmPassword) {
    toast.error("Passsword and Confirm Passworda not Match");
    return;
  }
}
</script>
