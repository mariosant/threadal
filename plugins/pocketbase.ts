import PocketBase from "pocketbase";

export default defineNuxtPlugin(async () => {
  const c = useRuntimeConfig();
  const pb = new PocketBase(c.public.pocketbaseUrl);

  const cookie = useCookie("pb_auth", {
    path: "/",
    secure: true,
    sameSite: "strict",
    httpOnly: false, // change to "true" if you want only server-side access
    maxAge: 604800,
  });

  pb.authStore.save(cookie.value?.token, cookie.value?.model);

  pb.authStore.onChange(() => {
    cookie.value = {
      token: pb.authStore.token,
      model: pb.authStore.model,
    };
  });

  try {
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (_) {
    pb.authStore.clear();
  }

  return {
    provide: { pb },
  };
});
