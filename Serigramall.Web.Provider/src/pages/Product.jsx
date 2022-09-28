import ProductList from "../components/product/ProductList";
import Header from "../components/product/Header";
import '../styles/product.css'

import { createContext, useContext, useEffect, useState } from "react";

import { GlobalContext } from "../contexts/GlobalContext";


function Product() {
    //const { setShowToast, setToastHeader, setToastBody } =
     //   useContext(GlobalContext);

    return (
        <>
            <div>
                <div >
                    <Header />
                    <ProductList />
                </div>
            </div>
        </>
    );
}
export default Product;