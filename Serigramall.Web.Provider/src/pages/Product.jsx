import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'

import { createContext, useContext, useEffect, useState } from "react";

import { GlobalContext } from "../contexts/GlobalContext";
import ProductsProvider from "../contexts/ProductsContext";
import Loading from "../components/utils/Loading";


function Product() {
    const [productsState, setProductsState] = useState([]);
    const { setShowToast, setToastHeader, setToastBody, isLoading } =
        useContext(GlobalContext);

    return (
        <ProductsProvider>
            <div className="b1">
                <Header />
                <ProductList />
            </div>
        </ProductsProvider>
    );
}
export const ProductContext = createContext();
export default Product;