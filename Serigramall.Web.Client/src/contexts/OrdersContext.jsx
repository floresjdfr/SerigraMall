import { createContext, useState } from "react";

export const OrdersContext = createContext();
export default function OrdersProvider({ props }) {
    const [ordersList, setOrdersList] = useState([]);
    const value = {
        ordersList, setOrdersList
    }
    return <OrdersContext.Provider value={value} {...props} />
}