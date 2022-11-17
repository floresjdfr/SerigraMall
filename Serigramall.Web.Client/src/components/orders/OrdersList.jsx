import { useContext } from "react";
import { OrdersContext } from "../../contexts/OrdersContext";
import OrderList_IndividualOrder from "./OrdersList_IndividualItem";

export default function OrdersList({ordersList}) {

    return (
        <>
            {
                ordersList.map((item) => {
                    return (
                        <OrderList_IndividualOrder key={item.id} item={item} />
                    )
                })
            }
        </>
    );
}