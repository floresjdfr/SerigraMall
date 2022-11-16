import ApiCore from "./utilities/core";
const plural = "Orders";
const singular = "Order";
const url = "Order";

const apiOrders = new ApiCore({
    getAll: false,
    getSingle: true,
    post: true,
    put: false,
    patch: true,
    delete: true,
    url: url,
    plural: plural,
    single: singular
});

export default apiOrders;