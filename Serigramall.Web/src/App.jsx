import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import CustomNav from "./components/navbar/CustomNavbar";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
