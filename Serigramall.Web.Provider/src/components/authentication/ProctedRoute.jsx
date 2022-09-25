import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../utils/Loading";
import { useAuth0 } from "@auth0/auth0-react";
import jwt_decode from "jwt-decode";
import { useAsync } from "react-async";

const ProtectedRoute = ({ component, scopes, ...args }) => {

  const { isLoading, getAccessTokenSilently } = useAuth0();
  var hasPermission = false;


  getAccessTokenSilently()
    .then(response => {
      const permissions = jwt_decode(response).permissions;

      scopes.forEach(scope => {
        if (permissions.includes(scope)) {
          hasPermission = true;
          console.log("Has permission");
        }
      });

      return hasPermission;
    })
    .catch(error => {
      console.log(error);
      return false;
    });


  //Check if token containes specified scopes
  if (!isLoading) {
    console.log("Has Permissions? " + data);

    if (true) {
      console.log("Authorized");
      const ProtectedComponent = withAuthenticationRequired(component, {
        onredirecting: () => <Loading />, //Not working
      });

      return <ProtectedComponent {...args} />;
    }

    else {
      console.log("Unauthorized");
      return <h1>Unauthorized</h1>;
    }
  }
};



export default ProtectedRoute;
