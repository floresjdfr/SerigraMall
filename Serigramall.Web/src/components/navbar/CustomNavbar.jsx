import { useMediaQuery } from "react-responsive";

import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import AuthenticationButton from "../authentication/AuthenticationButton";

function CustomNav() {
  const isMobile = useMediaQuery({
    minWidth: 0,
    maxWidth: 576,
  });

  const isTablet = useMediaQuery({
    minWidth: 577,
    maxWidth: 768,
  });

  const isLaptop = useMediaQuery({
    minWidth: 769,
    maxWidth: 992,
  });

  const isDesktop = useMediaQuery({
    minWidth: 993,
    maxWidth: 1200,
  });

  const isBigScreen = useMediaQuery({
    minWidth: 1201,
  });

  return (
    <>
      {isMobile && <CustomNavResponsive expand={"sm"} />}
      {isTablet && <CustomNavResponsive expand={"md"} />}
      {isLaptop && <CustomNavResponsive expand={"lg"} />}
      {isDesktop && <CustomNavResponsive expand={"xl"} />}
      {isBigScreen && <CustomNavResponsive expand={"xxl"} />}
    </>
  );
}

function CustomNavResponsive(props) {
  return (
    <>
      <Navbar
        key={props.expand}
        bg="light"
        expand={props.expand}
        className="mb-3"
      >
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${props.expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${props.expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${props.expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${props.expand}`}
              >
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${props.expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <AuthenticationButton />
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
