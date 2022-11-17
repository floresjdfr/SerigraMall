import { useContext, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap"
import OrdersProvider, { OrdersContext } from "../contexts/OrdersContext"
import apiOrders, { getUserOrders } from "../services/api/orderApi";
import Loading from "../components/utils/Loading";
import OrdersList from "../components/orders/OrdersList";
import { useAuth0 } from "@auth0/auth0-react";

function Orders() {

    const [ordersList, setOrdersList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user, getAccessTokenSilently } = useAuth0();

    useEffect(function () {
        setIsLoading(true);
        getUserOrders(user.sub)
            .then((response) => {
                setOrdersList(response.data);
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <OrdersList ordersList={ordersList} />
            }
        </>
    );
}

export default Orders;