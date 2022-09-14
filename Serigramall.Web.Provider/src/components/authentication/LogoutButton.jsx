import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavDropdown } from "react-bootstrap";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <NavDropdown.Item
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Logout
    </NavDropdown.Item>
  );
};

export default LogoutButton;
