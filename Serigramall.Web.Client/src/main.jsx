import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./components/authentication/Auth0ProviderWithHistory";
import GlobalProvider from "./contexts/GlobalContext";
import "./styles/main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <GlobalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalProvider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);