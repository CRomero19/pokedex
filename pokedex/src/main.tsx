import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PokeListProvider } from "./Context/pokesList";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <PokeListProvider>
          <App />
        </PokeListProvider>
    </BrowserRouter>
  </React.StrictMode>
);
