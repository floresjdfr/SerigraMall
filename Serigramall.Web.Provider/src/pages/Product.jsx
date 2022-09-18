import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { getProducts } from "../services/api/productsApi";
import NewProduct from "../components/product/NewProduct";
import ListProduct from "../components/product/ListProducts";
import { GlobalContext } from "../contexts/GlobalContext";

function Product() {
  const [productState, setProductState] = useState([]);
  const { setShowToast, setToastHeader, setToastBody } =
    useContext(GlobalContext);

  useEffect(() => {
    getProducts()
      .then((res) => setProductState(res.data))
      .catch((_) => {
        setToastHeader("Error");
        setToastBody("An error ocurred while trying to get the products");
        setShowToast(true);
      });
  }, []);

  return (
    <ProductContext.Provider value={[productState, setProductState]}>
      <NewProduct />
      <ListProduct />
    </ProductContext.Provider>
  );
}

export const ProductContext = createContext();
export default Product;
