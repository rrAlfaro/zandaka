<script setup lang="ts"></script>

<template>
  <UPageSection
    id="sobre"
    headline="Um verdadeiro Izakaya"
    orientation="horizontal"
    :ui="{
      title: 'text-4xl lg:text-6xl font-normal',
      description: 'space-y-3',
    }"
  >
    <template #title>
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.2 }"
        :in-view-options="{ once: false }"
      >
        Zandaka
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.3 }"
        :in-view-options="{ once: false }"
      >
        O ZANDAKA nasceu para trazer a essência dos izakayas de Tóquio para
        Florianópolis. Aqui você encontra pratos tradicionais, drinks autorais e
        um ambiente intimista — perfeito para compartilhar bons momentos, seja
        entre amigos, a dois ou depois do trabalho.
      </Motion>
    </template>

    <template #body>
      <UPageGrid class="place-items-center grid-cols-3 sm:grid-cols-3">
        <Motion
          v-for="(i, index) in 3"
          :key="i"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ delay: 0.4 + 0.1 * index }"
          :in-view-options="{ once: false }"
        >
          <NuxtImg
            :src="`/images/Group-${i + 4}.svg`"
            alt="Sushi image"
            height="68"
            loading="lazy"
            quality="80"
            format="webp"
          />
        </Motion>
      </UPageGrid>
    </template>

    <Motion
      :initial="{ opacity: 0, y: 20 }"
      :while-in-view="{ opacity: 1, y: 0 }"
      :transition="{ delay: 0.1 }"
      :in-view-options="{ once: false }"
      class="w-full h-full"
    >
      <NuxtImg
        src="/images/banner (4).jpg"
        alt="Banner (4)"
        format="webp"
        quality="80"
        sizes="100vw lg:576px"
        loading="lazy"
        class="aspect-square rounded-lg object-cover"
      />
    </Motion>
  </UPageSection>
</template>
