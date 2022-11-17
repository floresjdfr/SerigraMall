import { Container, Navbar, Offcanvas, Nav, Form, Button, } from "react-bootstrap";
import "../../styles/loginButtonStyles.css";
import ProfileDropdown from "./ProfileDropdown";
import { useTranslation } from "react-i18next"

function CustomNav() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3">
        <Container className="Navbarbg " fluid>
          <Navbar.Brand href="/">{t("nav.provider")}</Navbar.Brand>
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
                <Nav.Link href="/product">Products</Nav.Link>
                <ProfileDropdown />
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder={t("nav.search")}
                  className="me-2"
                  aria-label="Search" />
                <Button variant="outline-success">{t("nav.search")}</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNav;
