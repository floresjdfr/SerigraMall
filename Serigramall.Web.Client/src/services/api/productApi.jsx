import axios from 'axios';
import ApiCore from './utilities/core';
const url = 'Product';
const plural = 'Products';
const single = 'Product';
// const BASE_URL = "https://localhost:44355/api/Product";
const BASE_URL = `${import.meta.env.VITE_SERVER_API_URL}/api`;

// plural and single may be used for message logic if needed in the ApiCore class.

const apiTasks = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: false,
  patch: true,
  delete: true,
  url: url,
  plural: plural,
  single: single
});
/*
apiTasks.massUpdate = () => {
  // Add custom api call logic here
    return null
}*/

///This endpoint returns a list of products by product type
///productType=1 ==> Serigraphy products
///productType=2 ==> Normal products
export const getByProductType = (productType) => axios.get(`${BASE_URL}?productType=${productType.productType ? productType.productType : productType}`);

export default apiTasks;