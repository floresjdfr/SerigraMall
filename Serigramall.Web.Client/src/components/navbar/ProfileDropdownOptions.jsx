import { NavDropdown } from "react-bootstrap";
import LogoutButton from "../authentication/LogoutButton";

export default function ProfileDropDownOptions() {
    return (
      <>
        <NavDropdown
          className="dropdown-custom navbar-custom-button"
          title="Profile"
          id={`offcanvasNavbarDropdown-expand-lg`}
          
        >
          <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
          <NavDropdown.Item href="/manage-profile">Manage Profile</NavDropdown.Item>
          
          <LogoutButton />
        </NavDropdown>
      </>
    );
  }