import ApiCore from './utilities/core';
import axios from 'axios';

const url = 'Product';
const plural = 'Products';
const single = 'Product';
const BASE_URL = import.meta.env.VITE_SERVER_API_URL;

// plural and single may be used for message logic if needed in the ApiCore class.

export const apiTasks = new ApiCore({
  getAll: false,
  getSingle: true,
  post: true,
  put: true,
  patch: false,
  remove: true,
  removeA: true,
  url: url,
  plural: plural,
  single: single
});
/*
apiTasks.massUpdate = () => {
  // Add custom api call logic here
    return null
}*/

export const getProductsByProvider = (id) => {
  return axios.get(`${BASE_URL}/${url}/${id}`);
}

export default apiTasks;