import { createContext, useState } from "react";

export default function ProductProvider({ ...props }) {
    const [productsState, setProductsState] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [showProductsModal, setShowProductsModal] = useState(false);
    const [selectedSerigraphy, setSelectedSerigraphy] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const productType = {
        Serigraphy: 1,
        NormalProduct: 2
    }

    const value = {
        productsState, setProductsState, //used to store the list of serigraphy or products
        isLoading, setLoading, //used to show a loading spinner
        showProductsModal, setShowProductsModal,
        selectedSerigraphy, setSelectedSerigraphy, //used to store the selected serigraphy
        selectedProduct, setSelectedProduct       
    }

    return <ProductsContext.Provider value={value} {...props} />
}

export const ProductsContext = createContext();