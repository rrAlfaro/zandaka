<script setup lang="ts">
useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "keywords",
      content: "izakaya, Florianópolis, comida japonesa, Zandaka",
    },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "pt-BR",
    class: "dark",
  },
});

useSeoMeta({
  ogTitle: "Zandaka",
  description: "O melhor izakaya de Florianópolis",
  ogDescription: "O melhor izakaya de Florianópolis",
  ogImage: "/images/og-image.png",
  twitterCard: "summary_large_image",
});

defineOgImageComponent("NuxtSeo", {
  siteName: "Zandaka",
  title: "Zandaka",
  description: "O melhor izakaya de Florianópolis",
  theme: "#101010",
  colorMode: "dark",
  siteLogo: "/images/logo.png",
});
</script>

<template>
  <UApp>
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <AppFooter />
  </UApp>
</template>
