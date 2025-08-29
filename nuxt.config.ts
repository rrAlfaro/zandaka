// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePerson } from "nuxt-schema-org/schema";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "motion-v/nuxt", "@nuxt/image", "@nuxtjs/seo"],
  site: {
    url: "https://vercel.zandaka.com",
    name: "Zandaka",
    description: "O melhor izakaya de Florianópolis",
    defaultLocale: "pt-BR",
  },
  schemaOrg: {
    identity: definePerson({
      name: "Rafael Alfaro",
      description: "Desenvolvedor Front-end - Front-end Developer",
      url: "devrra.com",
      sameAs: ["https://github.com/rralfaro"],
    }),
  },
  fonts: {
    families: [
      {
        name: "Philosopher",
        provider: "google",
      },
    ],
  },
});
