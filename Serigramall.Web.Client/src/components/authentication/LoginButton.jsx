import { useAuth0 } from "@auth0/auth0-react";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import "../../styles/loginButtonStyles.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Nav.Link className="custom-btn" onClick={() => loginWithRedirect()}>Login</Nav.Link>
  );
};

export default LoginButton;
