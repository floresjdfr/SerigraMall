import { Container, Navbar, Offcanvas, Nav, Form, Button, } from "react-bootstrap";
import "../../styles/loginButtonStyles.css";
import ProfileDropdown from "./ProfileDropdown";
import { useTranslation } from "react-i18next"
import logo from "../../assets/logoSeri.png";
import { useAuth0 } from "@auth0/auth0-react";

function CustomNav() {

  const { isAuthenticated } = useAuth0();
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3 p-0">
        <Container className="Navbarbg " fluid>
          <Navbar.Brand href="/">
            <img src={logo} width="40px" height="40px" />
            {t("nav.provider")}</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas className="Navbarbg"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="titulo" id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                {isAuthenticated && <Nav.Link href="/products">Products</Nav.Link>}
                <ProfileDropdown />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
