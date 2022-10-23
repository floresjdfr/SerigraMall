import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import NotFound from "./pages/NotFound";
import "./styles/main.css";

function App() {
  return (
    <>
      <CustomNav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Protected routes */}
          <Route path="/product" element={<ProtectedRoute component={Product} forceCompleteProfile={true} />} />
          <Route path="/manage-profile" element={<ProtectedRoute component={Profile} />} />

          {/*Error Routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
