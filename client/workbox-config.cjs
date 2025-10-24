module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{css,js,json,html,xml}"],
  swDest: "dist/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  runtimeCaching: [
    {
      urlPattern: /\/api\/songs/,
      handler: "NetworkFirst",
      options: {
        cacheName: "songs-api-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
  ],
};
