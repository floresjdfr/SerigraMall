import { NavDropdown } from "react-bootstrap";
import LogoutButton from "../authentication/LogoutButton";

export default function ProfileDropDownOptions() {
    return (
      <>
        <NavDropdown
          className="dropdown-custom"
          title="Profile"
          id={`offcanvasNavbarDropdown-expand-lg`}
        >
          <NavDropdown.Item href="/manage-profile">
            Manage Profile
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <LogoutButton />
        </NavDropdown>
      </>
    );
  }