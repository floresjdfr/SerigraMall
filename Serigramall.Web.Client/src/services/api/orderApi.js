import ApiCore from "./utilities/core";
import axios from "axios";

const plural = "Orders";
const single = "Order";
const url = "Order";
const BASE_URL = import.meta.env.VITE_SERVER_API_URL;

const apiOrders = new ApiCore({
    getAll: false,
    getSingle: true,
    post: true,
    put: false,
    patch: true,
    delete: true,
    url: url,
    plural: plural,
    single: single
});

export const getUserOrders = (userId) => {
    return axios.get(`${BASE_URL}/${url}?userId=${userId}`);
}

export default apiOrders;