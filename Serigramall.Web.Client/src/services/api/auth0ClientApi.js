import axios from "axios";

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const BASE_URL = `https://${DOMAIN}`;
const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const DB_CONNECTION = import.meta.env.VITE_AUTH0_DB_CONNECTION;

const changePassword = (email) => {
    const body = {
        client_id: CLIENT_ID,
        email,
        connection: DB_CONNECTION,
    }
    return axios.post(`${BASE_URL}/dbconnections/change_password`, body);
}


export const auth0ClientApi = {
    changePassword
}