import { useState } from "react";
import { auth0Provider } from "../services/api/auth/auth0Provider";

export default function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function login(email, password) {
    auth0Provider
      .login(email, password)
      .then((response) => {
        const accessToken = response.data.access_token;
        setIsAuthenticated(true);
        setToken(accessToken);
        console.log("Logged in successfully");
        console.log("Token: " + token);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return { login, isAuthenticated, token };
}
