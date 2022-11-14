import { useAuth0 } from "@auth0/auth0-react";
import "../../styles/loginButtonStyles.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button 
      className="custom-btn btn btn-primary btn-block login-button"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export default LoginButton;
