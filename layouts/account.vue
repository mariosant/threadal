<script setup lang="ts"></script>

<template>
  <div class="bg-slate-100 min-h-screen w-screen">
    <TopBar>
      <div>
        <ULink to="/account"
          ><NuxtImg src="https://placehold.co/170x55"
        /></ULink>
      </div>
      <div></div>
      <User />
    </TopBar>
    <slot />
  </div>
</template>
