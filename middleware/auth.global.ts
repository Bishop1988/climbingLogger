export default defineNuxtRouteMiddleware((to) => {
    if (to.path.includes("loggedclimbs") || to.path.includes("logclimb")) {
        const user = useSupabaseUser()
        if (user.value) {
            return
        }
        return navigateTo("/")
    }
})