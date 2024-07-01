export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();

  if (authStore.isNotLoggedIn) {
    return navigateTo("/login");
  }
});
