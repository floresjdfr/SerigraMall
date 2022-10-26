import { createContext, useState } from "react";


export default function ProductsProvider({... props}){

    const [productsState, setProductsState] = useState([]);

    const value = {
        productsState, setProductsState
    }
    return <ProductsContext.Provider {...props} value = {value} />
}

export const ProductsContext = createContext();