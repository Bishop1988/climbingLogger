<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
    const {error} = await supabase.auth.signOut()
    try {
        await $fetch('/api/_supabase/session', {
            method: "POST",
            body: {event: "SIGNED_OUT", session: null}
        })
    } catch (err) {
        console.error(err)
    }
}
</script>

<template>
    <nav class="sticky top-0 z-50 flex justify-between items-center spac-x-1 border-black border-b bg-sky-400 p-4 shadow-md">
        <NuxtLink to="/" class="text-3xl font-mono">Climbing logger</NuxtLink>
        <div class="flex items-center" v-if="user">
            <NuxtLink class="mr-5" to="/loggedclimbs">My Climbs</NuxtLink>
            <NuxtLink class="mr-5" to="/logclimb">Log Climbs</NuxtLink>
            <button @click="logout">Logout</button>
        </div>
    </nav>
</template>