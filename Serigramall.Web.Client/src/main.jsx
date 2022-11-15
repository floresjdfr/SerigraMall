import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./components/authentication/Auth0ProviderWithHistory";
import { CartProvider } from "./components/carrito/CartContext";
import GlobalProvider from "./contexts/GlobalContext";
import "./styles/main.css"

const container = {
  position: 'relative',
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <GlobalProvider>
        <CartProvider style={container}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </GlobalProvider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>
);