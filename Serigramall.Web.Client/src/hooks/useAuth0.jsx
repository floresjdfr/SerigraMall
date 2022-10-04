import { useEffect } from "react";
import { useState } from "react";
import { default as loginAuth0 } from "../../services/api/authentication";
import { parseHash, userInfo } from "../../services/api/authentication";

function useAuth0() {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(function(){
        
        setIsError(false);
        setIsLoading(true);
        setIsAuthenticated(false);        
        
        //get token from hash stored in local storage
        parseHash(function (error, authResult) {
            if (error) {
                setIsError(true);
                setIsLoading(false);
                return;
            }
            //get user info from token
            userInfo(authResult.accessToken, function (error, userInfo) {
                if (error) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                setUser(userInfo);
                setToken(authResult.accessToken);
                setIsAuthenticated(true);
                setIsLoading(false);
                setIsError(false);
            });

        });
    }, []);

    const login = (email, password) => {
        setIsLoading(true);
        //login
        loginAuth0(email, password, function (error) {
            if (error) {
                setIsError(true);
                setIsLoading(false);
                return;
            }
            
            //get token from hash stored in local storage
            parseHash(function (error, authResult) {
                if (error) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                //get user info from token
                userInfo(authResult.accessToken, function (error, userInfo) {
                    if (error) {
                        setIsError(true);
                        setIsLoading(false);
                        return;
                    }
                    setUser(userInfo);
                    setToken(authResult.accessToken);
                    setIsAuthenticated(true);
                    setIsLoading(false);
                    setIsError(false);
                });

            });
        });
    }

    const logout = () => {
        
    }

    return {
        user, isAuthenticated, isLoading, isError, token, login
    }
}