import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import NotFound from "./pages/NotFound";

import GlobalProvider, { GlobalContext } from "./contexts/GlobalContext";
import { useContext } from "react";
import ProductList from "./components/product/ProductList";

function App() {

  const productScreenTypes = {
    Serigraphy: "1",
    NormalProduct: "2",
    SerigraphyAndProduct: "3"
  }

  return (
    <>

      <CustomNav />
      <main className="main">

        <Routes>

          <Route path="/" element={<Product productType={productScreenTypes.Serigraphy} />} />
          <Route path="/product" element={<Product productType={productScreenTypes.NormalProduct} />} />
          <Route path="/serigraphy" element={<Product productType={productScreenTypes.Serigraphy} />} />

          <Route path="/manage-profile" element={<ProtectedRoute component={Profile} />} />
          {/*Error Routes */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </main>

    </>
  );
}

export default App;
