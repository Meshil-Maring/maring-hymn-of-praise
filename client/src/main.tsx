import "./registerSW";
import { BookmarkProvider } from "./context/BookmarkContext";

// main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/main-routes";
import { setRealVH } from "./utils/setViewportHeight";

const container = document.getElementById("root");
const root = createRoot(container!);

// Fix viewport height once before rendering
setRealVH();

// Update height on resize
window.addEventListener("resize", setRealVH);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookmarkProvider>
        <MainRoutes />
      </BookmarkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
