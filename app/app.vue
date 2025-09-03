<script setup lang="ts">
useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color" },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  script: [
    {
      src: "/_vercel/speed-insights/script.js",
      defer: true,
      type: "text/javascript",
    },
  ],
  htmlAttrs: {
    lang: "pt-BR",
    class: "dark",
  },
});

useSeoMeta({
  ogTitle: "Zandaka",
  description: "O melhor izakaya de Florianópolis",
  ogDescription: "O melhor izakaya de Florianópolis",
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
