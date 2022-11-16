import { useEffect } from "react";
import { Table } from "react-bootstrap"
import OrdersProvider from "../contexts/OrdersContext"
import apiOrders from "../services/api/orderApi";

export default function Orders() {    
    useEffect(function(){
        
    }, []);

    return (
        <OrdersProvider>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
            </Table>
        </OrdersProvider>
    );
}