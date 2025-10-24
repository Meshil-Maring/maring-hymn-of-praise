import "./registerSW";

// main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/main-routes";

const container = document.getElementById("root");
const root = createRoot(container!); // non-null assertion for TS

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
