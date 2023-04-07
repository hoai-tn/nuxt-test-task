// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    alias: {

    },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/flowbite@latest/dist/flowbite.css",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/flowbite@latest/dist/flowbite.min.js",
          body: true,
        },
      ],
    },
  },
});
