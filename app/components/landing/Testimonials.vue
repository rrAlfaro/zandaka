<script setup lang="ts">
const testimonials = ref([
  [
    {
      user: {
        name: "Mariana R.",
        description: "Jovem Profissional",
      },
      quote:
        "O ZANDAKA conseguiu trazer a essência de Tóquio para cá. Ambiente incrível e comida impecável.",
    },
    {
      user: {
        name: "Felipe & Clara",
        description: "Casal",
      },
      quote:
        "Perfeito para um jantar a dois. Drinks criativos e atmosfera intimista.",
    },
    {
      user: {
        name: "Roberto S.",
        description: "Empresário",
      },
      quote:
        "Vim com minha família e todos adoraram. Atendimento acolhedor e pratos deliciosos.",
    },
    {
      user: {
        name: "André L.",
        description: "Executivo",
      },
      quote:
        "Depois do trabalho, nada melhor do que relaxar no ZANDAKA. Ótima seleção de saquês.",
    },
  ],
  [
    {
      user: {
        name: "Juliana M.",
        description: "Estudante de Gastronomia",
      },
      quote:
        "Cada prato é uma aula de sabores. Me inspiro muito na forma como o chef trabalha os ingredientes.",
    },
    {
      user: {
        name: "Carlos e Patrícia",
        description: "Turistas",
      },
      quote:
        "Descobrimos o ZANDAKA por acaso e foi a melhor surpresa da viagem. Nos sentimos no Japão!",
    },
    {
      user: {
        name: "Henrique T.",
        description: "Sommelier",
      },
      quote:
        "A carta de saquês é impressionante. Harmonizações que realmente valorizam os pratos.",
    },
    {
      user: {
        name: "Beatriz L.",
        description: "Designer",
      },
      quote:
        "O ambiente é lindo, acolhedor e moderno ao mesmo tempo. Dá vontade de ficar a noite toda.",
    },
  ],
]);
</script>

<template>
  <UPageSection>
    <UMarquee
      pause-on-hover
      overlay
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in testimonials[0]"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description:
            'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser
            v-bind="testimonial.user"
            size="xl"
            :ui="{ description: 'line-clamp-1' }"
          />
        </template>
      </UPageCard>
    </UMarquee>

    <UMarquee
      pause-on-hover
      reverse
      overlay
      :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }"
    >
      <UPageCard
        v-for="(testimonial, index) in testimonials[1]"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description:
            'before:content-[open-quote] after:content-[close-quote] line-clamp-3',
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <UUser
            v-bind="testimonial.user"
            size="xl"
            :ui="{ description: 'line-clamp-1' }"
          />
        </template>
      </UPageCard>
    </UMarquee>
  </UPageSection>
</template>
