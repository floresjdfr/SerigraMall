// provider.js

import axios from 'axios';

const BASE_URL = import.meta.env.VITE_SERVER_API_URL;

/** @param {string} resource */
const getAll = (resource) => {
  return axios
    .get(`${BASE_URL}/${resource}`);
};

/** @param {string} resource */
/** @param {string} id */
const getSingle = (resource, id) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`);
};

/** @param {string} resource */
/** @param {object} model */
const post = (resource, model) => {
  return axios
    .post(`${BASE_URL}/${resource}`, model);
};

/** @param {string} resource */
/** @param {object} model */
const put = (resource, model) => {
  return axios
    .put(`${BASE_URL}/${resource}`, model);
};

/** @param {string} resource */
/** @param {object} model */
const patch = (resource, id, model, config) => {
  return axios
    .patch(`${BASE_URL}/${resource}/${id}/PROVIDER`, model, config);
};


/** @param {string} resource */
/** @param {string} id */

const remove = (resource, id) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, id);
};

/** @param {string} resource */
/** @param {string} id */

const removeA = (resource, id) => {
  return axios
    .delete(`${BASE_URL}/${resource}/${id}`);
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove,
  removeA,
};
export default apiProvider;

/*
const remove = (resource, id) => { 
  return axios 
    .delete(`${BASE_URL}/${resource}`, id) 
    .then(handleResponse) 
    .catch(handleError); 
}; 
*/