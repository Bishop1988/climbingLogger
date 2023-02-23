<script setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo('/')
        }
    })
})

let description = ref('')
let title = ref('')
let date = ref('')

const handleSubmit = async () => {
    const body = {
        description: description.value,
        title: title.value,
        date: date.value
    }

    try {
        await $fetch("/api/logclimbs", {
            method: 'POST',
            body
        })
        
        description.value = ''
        title.value = ''
        date.value = ''
    } catch (err) {
        throw createError({ statusCode: 404, message: 'not found' })
    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="shadow rounded p-3 mt-5 mx-auto flex flex-col w-1/2">
        <label class="mb-3">Title</label>
        <input type="text" class="p-2 mb-3 border w-100 rounded" v-model="title" placeholder="Enter title">
        <label class="mb-3">Description</label>
        <input type="text" class="p-2 mb-3 border w-100 rounded" v-model="description" placeholder="Enter Description">
        <label for="climbdate">Date Climbed</label>
        <input type="date" class="p-2 mb-3 border w-100 rounded" name="climbdate" v-model="date">
        <div class="flex justify-end w-full">
            <button type="submit" class="bg-blue-400 text-white rounded py-2 px-7 mt-3">Submit</button>
        </div>
    </form>
</template>