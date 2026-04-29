import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  let navbarClass = "navbar-base";

  if (location.pathname === "/list") {
    navbarClass = "navbar-list";
  } else if (location.pathname === "/morning_routine") {
    navbarClass = "navbar-morning";
  } else if (location.pathname === "/night_routine") {
    navbarClass = "navbar-night";
  } 

  return (
    <Navbar className={navbarClass}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Toolbox
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/list">
              To Do List
            </Nav.Link>

            <Nav.Link as={NavLink} to="/morning_routine">
              Morning Routine
            </Nav.Link>

            <Nav.Link as={NavLink} to="/night_routine">
              Night Routine
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}