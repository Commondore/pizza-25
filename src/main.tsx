import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

import "./index.css";
import { PizzaProvider } from "@/context/pizza-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </BrowserRouter>
  </StrictMode>
);
