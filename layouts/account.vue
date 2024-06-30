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

const { isLoggedIn } = useAuth();

watchEffect(() => {
  if (!isLoggedIn.value) {
    navigateTo("/login");
  }
});
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      collapsible
      breakpoint="md"
      :width="250"
      :resizable="{ min: 200, max: 300 }"
    >
      <UDashboardSidebar>
        <template #header>
          <ULink to="/account" class="font-black text-lg"> Threadal 🥑</ULink>
        </template>

        <UDashboardSidebarLinks :links="links" />

        <div class="flex-1" />

        <template #footer>
          <UDashboardSidebarLinks :links="footerLinks" />
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />
    <!-- ~/components/NotificationsSlideover.vue -->
    <NotificationsSlideover />
  </UDashboardLayout>
</template>
