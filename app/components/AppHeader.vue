<script setup lang="ts">
import type { NavigationMenuItem, ButtonProps } from "@nuxt/ui";

const route = useRoute();

const navigationItems = computed<NavigationMenuItem[]>(() => [
  {
    label: "Início",
    to: "/",
  },
  {
    label: "Sobre",
    to: "#sobre",
  },
  {
    label: "Contato",
    to: "#contato",
  },
]);

const links = ref<ButtonProps[]>([
  {
    label: "Menu",
    color: "neutral",
    icon: "lucide:fish",
    ui: {
      leadingIcon: "hidden sm:inline-block",
    },
  },
  {
    label: "Reservas",
    variant: "subtle",
    color: "error",
    trailingIcon: "i-lucide-arrow-right",
    ui: {
      trailingIcon: "hidden sm:inline-block",
    },
  },
]);
</script>

<template>
  <UHeader mode="drawer">
    <template #title>
      <div class="flex items-center gap-2">
        <NuxtImg
          src="/images/logo-draw.svg"
          alt="Logo"
          height="40"
          class="h-10 w-auto bg-transparent"
        />
        <p class="font-normal">Zandaka</p>
      </div>
    </template>

    <UNavigationMenu :items="navigationItems" variant="link" />

    <template #right>
      <UButton v-for="link in links" v-bind="link" :key="link.label" />
    </template>

    <template #body>
      <UNavigationMenu
        :items="navigationItems"
        variant="link"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>
