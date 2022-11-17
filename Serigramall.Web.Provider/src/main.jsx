import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./components/authentication/Auth0ProviderWithHistory";
import "./styles/main.css"

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
/*import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';*/

i18next.init({
  interpolation : {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global:global_en,
    },
    es: {
      global:global_es,
    },
  }

});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <Auth0ProviderWithHistory>
      <BrowserRouter>
      
        <App />
             
      </BrowserRouter>
    </Auth0ProviderWithHistory>
    </I18nextProvider> 
  </React.StrictMode>
);