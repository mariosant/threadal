export const useAuthStore = defineStore("auth", () => {
  const pb = usePb();

  const isLoggedIn = ref(pb.authStore.isValid);
  const isNotLoggedIn = ref(!pb.authStore.isValid);
  const model = ref(pb.authStore.model);

  pb.authStore.onChange(() => {
    isLoggedIn.value = pb.authStore.isValid;
    isNotLoggedIn.value = !pb.authStore.isValid;
    model.value = pb.authStore.model;
  });

  return {
    isLoggedIn,
    isNotLoggedIn,
    model,
  };
});
