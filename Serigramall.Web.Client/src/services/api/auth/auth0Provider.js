import axios from "axios";

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const AUDIENCE = import.meta.env.VITE_AUTH0_AUDIENCE;
const CONNECTION = import.meta.env.VITE_AUTH0_DB_CONNECTION;
const BASE_URL = `https://${DOMAIN}`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const login = (username, password) => {
  return axiosInstance.post("/oauth/token", {
    client_id: CLIENT_ID,

    audience: AUDIENCE,
    grant_type: "password",
    username: username,
    password: password,
  });
};

const signup = ({
  email,
  username,
  password,
  firstName,
  lastName,
  address,
  phoneNumber,
}) => {
  return axiosInstance.post("dbconnections/signup", {
    client_id: CLIENT_ID,
    connection: CONNECTION,
    email,
    username,
    password,
    given_name: firstName,
    family_name: lastName,
    name: `${firstName} ${lastName}`,
    user_metadata: { address, phone_number: phoneNumber },
  });
};

export const auth0Provider = {
  login,
  signup,
};
