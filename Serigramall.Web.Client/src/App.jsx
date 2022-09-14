import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/manage-profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
