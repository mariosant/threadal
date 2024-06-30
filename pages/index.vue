<script setup lang="ts">
const img = useImage();
const coverImage = "bg.jpeg";

const imgUrl = img(coverImage, { blur: 50, gamma: 1 });
</script>
<template>
  <div
    class="min-h-screen w-screen bg-gray-100 md:pt-14 font-sans bg-no-repeat selection:bg-gray-300 bg-cover"
    :style="{
      backgroundImage: `url(${imgUrl})`,
    }"
  >
    <UContainer class="max-w-screen-lg p-0">
      <div
        class="grid md:grid-cols-2 md:h-[512px] overflow-hidden md:rounded-lg"
      >
        <NuxtImg
          :src="coverImage"
          densities="x1"
          placeholder
          class="w-full min-w-fit h-[256px] md:w-[512px] md:h-[512px] place-self-center object-cover"
          height="512px"
          width="512px"
        />

        <div class="w-full bg-white h-full p-6 md:overflow-y-auto">
          <div class="text-4xl font-bold mb-4">John Doe</div>
          <div class="text-2xl font-semibold mb-4">
            It enim ad minim veniam, quis nostrud exercitation.
          </div>
          <div class="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div class="flex flex-col gap-4 overflow-y-auto">
            <UButton block size="xl" variant="outline" color="gray">
              <template #leading>
                <NuxtImg
                  src="https://logo.clearbit.com/github.com"
                  height="24px"
                  width="24px"
                />
              </template>
              Github
            </UButton>

            <UButton block size="xl" variant="outline" color="gray">
              <template #leading>
                <NuxtImg
                  src="https://logo.clearbit.com/spotify.com"
                  height="24px"
                  width="24px"
                />
              </template>
              Spotify
            </UButton>

            <UButton block size="xl" variant="outline" color="gray">
              <template #leading>
                <NuxtImg
                  src="https://logo.clearbit.com/linkedin.com"
                  height="24px"
                  width="24px"
                />
              </template>
              Linkedin
            </UButton>

            <UButton block size="xl" variant="outline" color="gray">
              <template #leading>
                <NuxtImg
                  src="https://logo.clearbit.com/github.com"
                  height="24px"
                  width="24px"
                />
              </template>
              Github
            </UButton>

            <UButton block size="xl" variant="outline" color="gray">
              <template #leading>
                <NuxtImg
                  src="https://logo.clearbit.com/spotify.com"
                  height="24px"
                  width="24px"
                />
              </template>
              Spotify
            </UButton>

            <UButton block size="xl" variant="outline" color="gray">
              <template #leading>
                <NuxtImg
                  src="https://logo.clearbit.com/linkedin.com"
                  height="24px"
                  width="24px"
                />
              </template>
              Linkedin
            </UButton>
          </div>
        </div>
      </div>
      <div class="py-4 text-center text-xs text-white">Powered by this app</div>
    </UContainer>
  </div>
</template>
