import { Container, Navbar, Offcanvas, Nav, Form, Button, } from "react-bootstrap";
import "../../styles/loginButtonStyles.css";
import ProfileDropdown from "./ProfileDropdown";

function CustomNav() {
  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3">
        <Container className="Navbarbg " fluid>
          <Navbar.Brand className="titulo" href="/">
            <img src="src/styles/img/logoSeri.png" width="8%" height="8%" />
            SerigraMall</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas className="Navbarbg"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end">
            <Offcanvas.Header closeButton className="Navbarbg">
              <Offcanvas.Title className="titulo" id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="Navbarbg justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="custom-btn" href="/">Home</Nav.Link>
                <Nav.Link className="custom-btn" href="/serigraphy">Serigraphy</Nav.Link>
                <Nav.Link className="custom-btn" href="/product">Only Products</Nav.Link>
                <ProfileDropdown className="custom-btn" />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
