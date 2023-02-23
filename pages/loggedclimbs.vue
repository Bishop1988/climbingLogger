<script setup>
const user = useSupabaseUser()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/')
        }
    })
})


const { data: climbs } = await useFetch('/api/loggedclimbs', {
    key: `climbs for ${user.value.id}`,
    headers: useRequestHeaders(['cookie']),
})

const handleDelete = async (id) => {
    const body = {
        id: id
    }

    try {
        await $fetch("/api/deleteclimb", {
            method: 'DELETE',
            body
        })
        climbs.value = climbs.value.filter(climb => climb.id !== id)
    } catch (err) {
        throw createError({ statusCode: 404, message: 'not found' })
    }
}

</script>

<template>
    <div class="flex flex-col items-center mb-10">
        <p class="mt-8 mb-16">Hello  {{ user.email }}</p>

        <h1 class="text-3xl font-semibold">Your Climbs</h1>
        <div class="flex flex-col gap-4 mt-4 w-1/2">
            <div v-for="climb in climbs" :key="climb.id" class="p-8 bg-gray-700 rounded">
                <div class="flex">
                    <p class="text-sky-500 mr-3">Title:</p>
                    <p class="text-white">{{ climb.title }}</p>
                </div>
                <div class="flex">
                    <p class="text-sky-500 mr-3">Date Climbed:</p>
                    <p class="text-white">{{ climb.date }}</p>
                </div>
                <div class="flex">
                    <p class="text-sky-500 mr-3">Description:</p>
                    <p class="text-white">{{ climb.description }}</p>
                </div>
                <div>
                    <button @click="handleDelete(climb.id)" class="bg-red-400 text-white rounded py-2 px-7 mt-3">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>