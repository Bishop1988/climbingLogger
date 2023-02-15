<script setup>
const user = ref(true)

const startNow = () => {
    navigateTo("/logclimb")
}

const login = () => {
  navigateTo("/login")
}
</script>

<template>
    <div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=803&q=80')]">
      <div class="z-10 absolute w-full h-full flex justify-center items-center">
        <div class="text-center w-1/2">
          <h1 class="text-8xl font-serif mb-10 text-white">Log your climbs!</h1>
          <button v-if="user" @click="startNow" class="bg-white px-2 py-1 rounded-md font-bold hover:text-blue-500">Start Now!</button>
          <button v-else @click="login">Login</button>
        </div>
      </div>
      <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
</template>