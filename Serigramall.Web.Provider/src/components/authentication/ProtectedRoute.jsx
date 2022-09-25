import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../utils/Loading";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Unauthorized from "../../pages/Unauthorized";

const ProtectedRoute = ({ component, scopes, ...args }) => {

  const [token, setToken] = useState(null);
  const { isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently().then((token) => {
        setToken(token);
      });
    };
    getToken();
  }, []);

  //Check if token containes specified scopes
  if (!isLoading && token) {

    const permissions = jwt_decode(token).permissions;
    var hasPermission = true;
    
    if (scopes)
      hasPermission = scopes.every((scope) => permissions.includes(scope));

    if (hasPermission) {
      const ProtectedComponent = withAuthenticationRequired(component, {
        onredirecting: () => <Loading />, //Not working
      });

      return <ProtectedComponent {...args} />;
    }

    return <Unauthorized />;
  }
};

export default ProtectedRoute;