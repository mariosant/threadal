export const useAuth = () => {
  const cookie = useCookie("pb_auth");
  const isLoggedIn = computed(() => Boolean(cookie.value?.model));

  return { isLoggedIn };
};
