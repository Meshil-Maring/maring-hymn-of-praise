import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // automatically updates the service worker
      outDir: "dist",
      filename: "service-worker.js",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Maring Hymn of Praise",
        short_name: "Maring Hymn",
        description:
          "Maring Hymn of Praise is a Progressive Web App designed to make accessing Maring Christian hymns easy and convenient. It allows users to read, search, and sing hymns directly from their devices — even without an internet connection. With a clean, user-friendly interface and offline support, it helps preserve and share the Maring community’s spiritual songs in a modern digital form.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "dml-192x192.jpg",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "dml-512x512.jpg",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "dml-512x512.jpg",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },

      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json}"],

        runtimeCaching: [
          {
            // Cache API responses
            urlPattern:
              /^https:\/\/maring-hymn-of-praise\.onrender\.com\/song\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "song-api-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
            },
          },
          {
            // Cache static assets (CSS, JS, images)
            urlPattern: /\.(?:js|css|png|jpg|jpeg|svg|json)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});
