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

let content = ref('')
let title = ref('')

const handleSubmit = async () => {
    const body = {
        content: content.value,
        title: title.value
    }

    try {
        await $fetch("/api/logclimbs", {
            method: 'POST',
            body
        })
        
        content.value = ''
        title.value = ''
    } catch (err) {
        throw createError({ statusCode: 404, message: 'not found' })
    }
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="shadow rounded p-3 mt-5 mx-auto flex flex-col w-1/2">
        <label class="mb-3">Title</label>
        <input type="text" class="p-2 mb-3 border w-100 rounded" v-model="title" placeholder="Enter title">
        <label class="mb-3">Content</label>
        <input type="text" class="p-2 mb-3 border w-100 rounded" v-model="content" placeholder="Enter content">
        <div class="flex justify-end w-full">
            <button type="submit" class="bg-blue-400 text-white rounded py-2 px-7 mt-3">Submit</button>
        </div>
    </form>
</template>