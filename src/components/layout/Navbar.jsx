import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <img
            src="/images/logo.png"
            height="60"
            alt="Combat Agni Fire Solutions"
          />

          <div className="brand-text">
            <span className="brand-name">Combat Agni</span>
            <span className="brand-tagline">Fire Solutions</span>
          </div>
        </Navbar.Brand>



        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-2">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>

            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
