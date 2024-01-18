// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  security: {
    headers: {
      contentSecurityPolicy:
        process.env.NODE_ENV === "development"
          ? false
          : {
              "base-uri": ["'none'"],
              "font-src": ["'self'", "https:", "data:"],
              "form-action": ["'self'"],
              "frame-ancestors": ["'self'"],
              "img-src": ["'self'", "data:"],
              "object-src": ["'none'"],
              "script-src-attr": ["'none'"],
              "style-src": ["'self'", "https:", "'unsafe-inline'"],
              "script-src": [
                "'self'",
                "https:",
                "'unsafe-inline'",
                "'strict-dynamic'",
                "'nonce-{{nonce}}'",
              ],
              "upgrade-insecure-requests": true,
            },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/devtools", "nuxt-security"],
  css: ["@/assets/css/main.pcss"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/logo-transparent.png" }],
      meta: [
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "BottleHub - Gambling on The Edge",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "Unparalleled Competitive GambleFi and GameFi Ecosystem Powered by Polygon.",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "/og.jpg",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "/",
        },
        { hid: "t-type", name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      projectId: process.env.WALLET_CONNECT_KEY,
    },
  },
  routeRules: {
    "/**": {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    },
    "/game/**": {
      static: true,
      ssr: false,
      security: {
        headers: {
          crossOriginEmbedderPolicy: "require-corp",
          crossOriginOpenerPolicy: "same-origin",
        },
      },
    },
    "/lobby/**": {
      static: true,
      ssr: false,
      security: {
        headers: {
          crossOriginEmbedderPolicy: "require-corp",
          crossOriginOpenerPolicy: "same-origin",
        },
      },
    },
  },
  vite: {
    server: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
      },
    },
  },
});
