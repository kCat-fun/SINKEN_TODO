// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width",
      title: "Todo SINKEN",
      meta: [
        // <meta name="description" content="My amazing site.">
        {
          name: "description",
          content:
            "Todoアプリ。SINKEN疑似ハッカソン用。",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Inter",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      script: [],
    },
  },
  css: [
    "~/assets/style/reset.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
});
