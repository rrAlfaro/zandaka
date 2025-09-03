<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "pt-BR",
    class: "dark",
  },
});

useSeoMeta({
  title: "404",
  description: "Desculpe, ocorreu um erro",
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

    <UError
      :error="error"
      :clear="{ label: 'Voltar para o inicio', to: '/' }"
    />

    <USeparator />

    <AppFooter />
  </UApp>
</template>
