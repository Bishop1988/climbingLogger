<script setup>
const user = ref(true)
</script>

<template>
    <nav class="sticky top-0 z-50 flex justify-between items-center spac-x-1 border-b bg-white p-4 shadow-md">
        <NuxtLink to="/" class="text-3xl font-mono">Climing logger</NuxtLink>
        <div class="flex items-center" v-if="user">
            <NuxtLink to="/" class="mr-5">Profile</NuxtLink>
            <button>Logout</button>
        </div>
        <NuxtLink v-else to="/">Login</NuxtLink>
    </nav>
</template>