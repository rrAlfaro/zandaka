<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui";

const links = ref<ButtonProps[]>([
  {
    label: "Ver menu",
    color: "neutral",
    icon: "lucide:fish",
  },
  {
    label: "Fazer reserva",
    variant: "subtle",
    color: "error",
    trailingIcon: "i-lucide-arrow-right",
  },
]);

const contact = {
  title: "Contato",
  content: ["Terça à Domingo", "17h às 00h", "(99) 9 9999-9999"],
};
const address = {
  title: "Endereço",
  content: [
    "Praça da Lagoa, 777, Lagoa da Conceição",
    "Florianópolis, SC - 10000-010",
  ],
};
</script>

<template>
  <UPageSection id="contato">
    <ClientOnly>
      <UPageCTA
        orientation="horizontal"
        variant="soft"
        reverse
        :links="links"
        :ui="{ body: 'space-y-4', description: 'mt-3' }"
      >
        <template #title>
          <Motion
            as="h2"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.2 }"
            :in-view-options="{ once: false }"
          >
            Localização e Contato
          </Motion>
        </template>

        <template #description>
          <Motion
            as="p"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.3 }"
            :in-view-options="{ once: false }"
          >
            Reserve sua mesa online agora e viva a experiência ZANDAKA.
          </Motion>
        </template>

        <template #body>
          <Motion
            as="div"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.4 }"
            :in-view-options="{ once: false }"
            class="text-sm"
          >
            <p class="font-semibold">{{ contact.title }}</p>
            <p
              v-for="content in contact.content"
              :key="content"
              class="text-muted"
            >
              {{ content }}
            </p>
          </Motion>

          <Motion
            as="div"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.5 }"
            :in-view-options="{ once: false }"
            class="text-sm"
          >
            <p class="font-semibold">{{ address.title }}</p>
            <p
              v-for="content in address.content"
              :key="content"
              class="text-muted"
            >
              {{ content }}
            </p>
          </Motion>
        </template>

        <template #links>
          <Motion
            v-for="(link, index) in links"
            :key="index"
            as="div"
            :initial="{ opacity: 0, transform: 'translateY(20px)' }"
            :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
            :transition="{ delay: 0.6 + 0.1 * index }"
            :in-view-options="{ once: false }"
            class="text-sm"
          >
            <UButton v-bind="link" />
          </Motion>
        </template>

        <Motion
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.1 }"
          :in-view-options="{ once: false }"
          class="w-full h-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14142.662650622306!2d-48.483764630810256!3d-27.603893304590553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273ea848636a4d%3A0x6f700ac19098c89d!2sLagoa%20da%20Concei%C3%A7%C3%A3o%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1756404788580!5m2!1spt-BR!2sbr"
            style="border: 0"
            :allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="h-full w-full rounded-lg"
          />
        </Motion>
      </UPageCTA>
    </ClientOnly>
  </UPageSection>
</template>
