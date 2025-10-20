import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // allows LAN access
    port: 5800, // optional: specify port
  },

  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate", // Automatically updates service worker
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "Maring Hymn of Praise",
        short_name: "Maring Hymn",
        description:
          "Maring Hymn of Praise (PWA). A fast, modern digital resource built with Vite and React to provide reliable, instant access to the complete hymn collection.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "dml-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "dml-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "dml-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
