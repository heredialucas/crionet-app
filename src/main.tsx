import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/config/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </HashRouter>
  </StrictMode>
);
