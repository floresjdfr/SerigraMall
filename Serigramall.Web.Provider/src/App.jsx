import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Product from "./pages/Product";

import { createContext, useContext, useEffect, useState } from "react";
import CustomToast from "./components/utils/CustomToast";
import GlobalProvider from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <CustomNav />
      <CustomToast />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/manage-profile" element={<Profile />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;