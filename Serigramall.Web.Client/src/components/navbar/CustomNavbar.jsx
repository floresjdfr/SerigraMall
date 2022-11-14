import { Container, Navbar, Offcanvas, Nav, Form, Button, } from "react-bootstrap";
import "../../styles/loginButtonStyles.css";
import ProfileDropdown from "./ProfileDropdown";

function CustomNav() {
  return (
    <>
      <Navbar key={"lg"} bg="light" expand={"lg"} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">SerigraMall</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/serigraphy">Serigraphy</Nav.Link>
                <Nav.Link href="/product">Only Products</Nav.Link>
                <ProfileDropdown />
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search" />
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
