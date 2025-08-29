<script setup lang="ts">
const highlights = ref([
  {
    title: "Ingredientes cuidadosamente selecionados",
    description:
      "Peixes frescos da pesca local e insumos japoneses escolhidos a dedo.",
  },
  {
    title: "Clássicos perfeitamente executados",
    description:
      "Receitas japonesas feitas com técnica e frescor da costa catarinense.",
  },
  {
    title: "Contemporâneos simplesmente surpreendentes",
    description:
      "Criações que unem tradição nipônica e sabores do litoral de Floripa.",
  },
]);
</script>

<template>
  <UPageSection>
    <UPageList :ui="{ root: 'sm:grid' }">
      <Motion
        v-for="(highlight, index) in highlights"
        :key="index"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="highlight.title"
          :description="highlight.description"
          :reverse="index % 2 === 0"
          variant="ghost"
          orientation="horizontal"
          :ui="{
            container: '!px-0 sm:grid sm:grid-cols-2',
            wrapper: `${index % 2 === 0 ? 'sm:order-last' : ''}`,
            title: `text-xl sm:text-4xl lg:text-6xl font-normal  ${
              index % 2 === 0 ? '' : 'text-right'
            }`,
            description: `text-lg sm:text-xl lg:text-2xl max-w-sm ${
              index % 2 === 0 ? '' : 'text-right ml-auto'
            }`,
            body: 'w-full',
          }"
        >
          <NuxtImg
            :src="`/images/banner (${index + 1}).jpg`"
            class="w-full aspect-[3/2] object-cover rounded-lg"
          />
        </UPageCard>
      </Motion>
    </UPageList>
  </UPageSection>
</template>
