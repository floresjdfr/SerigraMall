import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'

import { createContext, useContext, useEffect, useState } from "react";

import { GlobalContext } from "../contexts/GlobalContext";


function Product() {
    const [productsState, setProductsState] = useState([]);
    const { setShowToast, setToastHeader, setToastBody } =
        useContext(GlobalContext);

    return (
        <ProductContext.Provider value={[productsState, setProductsState]}>
            <div className="b1">
                <Header />
                <ProductList />
            </div>
        </ProductContext.Provider>
    );
}
export const ProductContext = createContext();
export default Product;