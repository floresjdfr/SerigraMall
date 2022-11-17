import { createContext, useState } from "react";

export const OrdersContext = createContext();
export default function OrdersProvider({ props }) {
    const [ordersList, setOrdersList] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderInformation, setShowOrderInformation] = useState([]);
    const value = {
        ordersList, setOrdersList,
        selectedOrder, setSelectedOrder,
        showOrderInformation, setShowOrderInformation
    }
    return <OrdersContext.Provider value={value} {...props} />
}