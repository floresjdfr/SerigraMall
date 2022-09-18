import { useState } from "react";
import axios from "axios";

export default function useAuthentication(token, username, passworwd) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const baseUrl = `https://${domain}/`

  

  function customLogin(){
    axios.get(`${baseUrl}authorize?response_type=token&client_id=${clientId}&connection=facebook&`);  
  }

  return { isAuthenticated, token, login };
}
