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
      script: [
          "https://www.gstatic.com/firebasejs/5.7.0/firebase.js"
      ],
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
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
              apiKey: "AIzaSyAaOhW-0kx2TWk_OnaNiKO36ETwU4rtSs4",
              authDomain: "sinken-todo.firebaseapp.com",
              projectId: "sinken-todo",
              storageBucket: "sinken-todo.appspot.com",
              messagingSenderId: "535927454066",
              appId: "1:535927454066:web:29111414f055e66a8005eb",
              measurementId: "G-QCCEPX0FNV"
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          database: true // Realtime Databaseの使用を宣言
        }
      }
    ]
  ],
});
