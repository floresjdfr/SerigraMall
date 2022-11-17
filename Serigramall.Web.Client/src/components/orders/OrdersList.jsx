import { useContext } from "react";
import { Table } from "react-bootstrap";
import { OrdersContext } from "../../contexts/OrdersContext";
import OrderList_IndividualOrder from "./OrdersList_IndividualItem";

export default function OrdersList({ ordersList }) {

    return (
        <>
            <h2 className="mb-2">Orders List</h2>
            <Table borderless striped>
                <tbody>
                    {
                        ordersList.map((item) => {
                            return (
                                <OrderList_IndividualOrder key={item.id} item={item} />
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
}