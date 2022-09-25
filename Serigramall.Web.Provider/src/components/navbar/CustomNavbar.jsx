import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import Loading from "../utils/Loading";
import "../../styles/loginButtonStyles.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../authentication/LoginButton";
import LogoutButton from "../authentication/LogoutButton";

function CustomNav() {
  const { isAuthenticated, isLoading } = useAuth0();

  function ProfileDropDown() {
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

  function InitProfileOptions() {
    return (
      <>
        {isLoading ? (
          <Loading width={"40px"} />
        ) : isAuthenticated ? (
          <ProfileDropDown />
        ) : (
          <LoginButton />
        )}
      </>
    );
  }

  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">SerigraMall Provider</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/product">Products</Nav.Link>
                <InitProfileOptions />
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
