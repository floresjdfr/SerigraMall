import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProtectedRoute from "./components/authentication/ProctedRoute";

function App() {
  return (
    <>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Protected routes */}
        <Route
          path="/product"
          element={<ProtectedRoute component={Product} />}
        />
        <Route
          path="/manage-profile"
          element={<ProtectedRoute component={Profile} scopes={["manage:services"]} />}
        />
        

        {/*Error Routes */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
