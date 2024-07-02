<script setup lang="ts">
definePageMeta({
  layout: "account",
  middleware: ["require-user"],
});
</script>

<template>
  <div class="container mx-auto flex gap-16 pt-8">
    <UCard class="py-4 w-[108px]">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2 items-center">
          <UButton
            variant="soft"
            color="gray"
            icon="i-heroicons-book-open"
            size="xl"
          />
          <div class="text-xs text-slate-800">Content</div>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <UButton
            variant="soft"
            color="gray"
            icon="i-heroicons-swatch"
            size="xl"
          />
          <div class="text-xs text-slate-500">Appearance</div>
        </div>
      </div>
    </UCard>
    <UCard>Lorem</UCard>
    <UCard class="flex-grow">Lorem</UCard>
  </div>
</template>
