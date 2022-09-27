import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Index />} />

        {/* Protected routes */}
        <Route path="/product" element={<ProtectedRoute component={Product} forceCompleteProfile={true} scopes={["manage:services"]} />} />
        <Route path="/manage-profile" element={<ProtectedRoute component={Profile} scopes={["manage:services"]} />} />

        {/*Error Routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
