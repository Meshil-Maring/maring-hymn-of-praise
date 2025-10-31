// src/registerSW.js
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    updateSW(true); // Force activate new SW immediately
  },
  onOfflineReady() {
    console.log("App is ready to work offline!");
  },
});
