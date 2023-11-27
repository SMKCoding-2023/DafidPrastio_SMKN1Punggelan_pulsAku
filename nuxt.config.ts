// https://nuxt.com/docs/api/configuration/nuxt-config
export default({
  
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss","@vite-pwa/nuxt","@pinia/nuxt"],
  tailwindcss : {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  router: {
    routes: [
      {
        name: 'pembelian',
        path: '/pembelian',
        component: '~/pages/pembelian.vue' // Pastikan ini mengacu pada lokasi halaman pembayaran yang benar
      }
      // Tambahkan rute lainnya jika diperlukan
    ]
  },




  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
    },

    

  pwa : {
    manifest : {
      "name": "pulsAku",
      "short_name": "pulsaku",
      "theme_color": "#fff",
      "background_color": "#fff",
      "display": "standalone",
      "orientation": "portrait",
      "scope": "/",
      "start_url": "/",
      "icons": [
        {
          "src": "images/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "images/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    },
    devOptions : {
      enabled : true,
    }
  }
})
