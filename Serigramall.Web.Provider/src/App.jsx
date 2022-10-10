import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import NotFound from "./pages/NotFound";
import "./styles/main.css";

import { createContext, useContext, useEffect, useState } from "react";
import CustomToast from "./components/utils/CustomToast";
import GlobalProvider from "./contexts/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <CustomNav />
        <CustomToast />
        <main className="main">
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Protected routes */}
            {/*<Route path="/product" element={<ProtectedRoute component={Product} forceCompleteProfile={true} scopes={["manage:services"]} />} />*/}
            <Route path="/product" element={<Product />} />
            <Route path="/manage-profile" element={<ProtectedRoute component={Profile} scopes={["manage:services"]} />} />

            {/*Error Routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </GlobalProvider>
    </>
  );
}

export default App;