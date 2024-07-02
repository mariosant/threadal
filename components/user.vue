<script setup lang="ts">
const auth = useAuthStore();
</script>

<template>
  <div class="flex items-center gap-4">
    <div class="text-sm">{{ auth.model?.name }}</div>
    <UAvatar :src="auth.model?.avatar" :alt="auth.model?.name" />
  </div>
</template>
