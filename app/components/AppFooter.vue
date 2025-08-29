<script setup lang="ts">
const contact = ref({
  title: "Contato",
  content: ["Terça à Domingo", "17h às 00h", "(99) 9 9999-9999"],
});
const address = ref({
  title: "Endereço",
  content: [
    "Praça da Lagoa, 777, Lagoa da Conceição",
    "Florianópolis, SC - 10000-010",
  ],
});
</script>

<template>
  <UFooter
    :ui="{
      container: 'lg:py-8 space-y-8 lg:space-y-0',
      top: '!py-0',
      bottom: '!py-0',
    }"
    class="py-0"
  >
    <div
      class="flex flex-col justify-center gap-2 text-center lg:flex-row lg:justify-center lg:text-left lg:gap-10"
    >
      <div class="text-sm">
        <p class="font-semibold">{{ contact.title }}</p>
        <p v-for="content in contact.content" :key="content" class="text-muted">
          {{ content }}
        </p>
      </div>

      <div class="text-sm">
        <p class="font-semibold">{{ address.title }}</p>
        <p v-for="content in address.content" :key="content" class="text-muted">
          {{ content }}
        </p>
      </div>
    </div>

    <template #top>
      <UMarquee class="py-8">
        <NuxtImg
          v-for="i in 15"
          :key="i"
          :src="`/images/Group-${i}.svg`"
          alt="Sushi image"
          class="h-12 w-auto"
        />
      </UMarquee>

      <USeparator />
    </template>

    <template #left>
      <NuxtImg src="/images/logo.png" alt="Logo" class="w-full max-w-36" />
    </template>

    <template #right>
      <UButton icon="simple-icons:instagram" variant="ghost" />
      <UButton icon="simple-icons:x" variant="ghost" />
      <UButton icon="simple-icons:spotify" variant="ghost" />
    </template>

    <template #bottom>
      <USeparator />
      <UContainer class="flex items-center justify-between py-4">
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>

        <div>
          <span class="text-muted text-sm">Criado por</span>
          <UButton variant="link" to="https://devrra.com" target="_blank">
            Rafael Alfaro</UButton
          >
        </div>
      </UContainer>
    </template>
  </UFooter>
</template>
