// main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import App from "./App"; // your main App component

const container = document.getElementById("root");
const root = createRoot(container!); // non-null assertion for TS

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
