export default defineNuxtRouteMiddleware(() => {
  const pb = usePb();

  console.log(pb.authStore.isValid);

  if (!pb.authStore.isValid) {
    return navigateTo("/login");
  }
});
