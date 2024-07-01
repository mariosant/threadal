<script setup lang="ts">
const pb = usePb();

const links = [
  {
    id: "home",
    label: "My account",
    icon: "i-heroicons-home",
    to: "/account/",
    tooltip: {
      text: "Home",
      shortcuts: ["G", "H"],
    },
  },
  {
    id: "content",
    label: "Content",
    icon: "i-heroicons-book-open",
    to: "/account/content",
  },
  {
    id: "media",
    label: "Media",
    icon: "i-heroicons-photo",
    to: "/account/media",
  },
  // {
  //   id: "settings",
  //   label: "Settings",
  //   to: "/account/settings",
  //   icon: "i-heroicons-cog-8-tooth",
  //   children: [
  //     {
  //       label: "General",
  //       to: "/settings",
  //       exact: true,
  //     },
  //     {
  //       label: "Members",
  //       to: "/settings/members",
  //     },
  //     {
  //       label: "Notifications",
  //       to: "/settings/notifications",
  //     },
  //   ],
  //   tooltip: {
  //     text: "Settings",
  //     shortcuts: ["G", "S"],
  //   },
  // },
];

const footerLinks = [
  {
    label: "Help & Support",
    icon: "i-heroicons-question-mark-circle",
    to: "#",
  },
];

const authStore = useAuthStore();

watchEffect(() => {
  if (authStore.isNotLoggedIn) {
    navigateTo("/login");
  }
});
</script>

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
