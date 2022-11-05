import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../utils/Loading";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Unauthorized from "../../pages/Unauthorized";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ component, scopes, forceCompleteProfile, ...args }) => {

  const [token, setToken] = useState(null);
  const { isLoading, getAccessTokenSilently, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      await getAccessTokenSilently()
        .then(token => setToken(token))
        .catch(err => console.error(err));
    };
    getToken();
  }, []);

  //Check if token containes specified scopes
  if (isLoading) return <Loading />;
  if (!token) return <Unauthorized />;

    //Validate that profile is complete, if not force user to complete profile   
    if (forceCompleteProfile && !user.user_metadata.isInformationComplete)
      navigate("/manage-profile");

    const permissions = jwt_decode(token).permissions;
    var hasPermission = true;

    if (scopes)
      hasPermission = scopes.every((scope) => permissions.includes(scope));

    if (hasPermission) {
      const ProtectedComponent = withAuthenticationRequired(component, {
        onredirecting: () => <Loading />
      });
      return <ProtectedComponent {...args} />;
    }
    return <Unauthorized />;
};

export default ProtectedRoute;