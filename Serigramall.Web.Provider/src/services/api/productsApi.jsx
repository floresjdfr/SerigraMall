import axios from "axios";
//import { baseUrl } from "./baseApi";

const productUrl = "https://localhost:44355/api/Product/";

export const getProducts = () => axios.get(productUrl);
export const postProduct = (newProduct) => axios.post(productUrl, newProduct);
export const deleteProduct = (productId) => axios.delete(productUrl + productId);

/*const url = 'roduct';
const plural = 'products';
const single = 'product';

// plural and single may be used for message logic if needed in the ApiCore class.

const productsApi = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  delete: false,
  url: url,
  plural: plural,
  single: single
});

productsApi.massUpdate = () => {
  // Add custom api call logic here
}

export productsApi;*/