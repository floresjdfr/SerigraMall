import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function GlobalProvider({ ...props }) {
    const productScreenTypes = {
        Serigraphy: "1",
        NormalProduct: "2",
        SerigraphyAndProduct: "3"
    }

    const [isLoading, setLoading] = useState(false);

    //Orders Context
    const [ordersList, setOrdersList] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderInformation, setShowOrderInformation] = useState(false);

    const value = {
        isLoading, setLoading,
        productScreenTypes,

        //Orders Context
        ordersList, setOrdersList,
        selectedOrder, setSelectedOrder,
        showOrderInformation, setShowOrderInformation
    }

    return <GlobalContext.Provider value={value} {...props} />
}
