import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Toolbox
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/lists/todo">
              To Do
            </Nav.Link>

            <Nav.Link as={NavLink} to="routines/morning_routine">
              Morning Routine
            </Nav.Link>

            <Nav.Link as={NavLink} to="routines/night_routine">
              Night Routine
            </Nav.Link>

            <Nav.Link as={NavLink} to="/budgets/master_budget">
              Budget
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}