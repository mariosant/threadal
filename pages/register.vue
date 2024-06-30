<script setup lang="ts">
import * as v from "valibot";
import { get } from "radash";

import type { FormSubmitEvent } from "#ui/types";

const pb = usePb();
const toast = useToast();

onMounted(() => {
  pb.authStore.clear();
});

const schema = v.object({
  name: v.string(),
  email: v.pipe(v.string(), v.email("Invalid email")),
  password: v.pipe(v.string(), v.minLength(8, "Must be at least 8 characters")),
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  name: "",
  email: "",
  password: "",
});

const onSubmit = async ({ data }: FormSubmitEvent<Schema>) => {
  const email = get(data, "email", "");
  const password = get(data, "password", "");
  const name = get(data, "name", "");

  await pb
    .collection("users")
    .create({
      email,
      name,
      password,
      passwordConfirm: password,
    })
    .then(() => {
      toast.add({
        title: "Success",
        description:
          "Your account has been succesfully registered. Please login.",
        color: "green",
        icon: "i-heroicons-user",
      });

      navigateTo("/login");
    })
    .catch((err) => {
      const description = get(
        err,
        "message",
        "Something's wrong. Please try again."
      );

      toast.add({
        title: "Failed to register",
        description,
        color: "red",
        icon: "i-heroicons-x-mark",
      });
    });
};
</script>

<template>
  <div class="min-h-screen w-screen bg-slate-100">
    <UContainer class="sm:max-w-sm sm:pt-16">
      <UCard>
        <template #header><span class="font-bold">Register</span></template>
        <UForm
          :state="state"
          :schema="v.safeParser(schema)"
          @submit="onSubmit"
          class="space-y-7"
        >
          <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" />
          </UFormGroup>

          <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>

          <UButton block type="submit"> Register </UButton>
        </UForm>
      </UCard>
      <div class="text-center text-sm py-4">
        Have an account already?
        <ULink class="hover:underline" to="/login">Login here.</ULink>
      </div>
    </UContainer>
  </div>
  <UNotifications />
</template>
