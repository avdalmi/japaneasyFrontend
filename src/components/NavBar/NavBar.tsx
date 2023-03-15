import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { LoggedIn, LoggedOut } from "../index";
import { selectToken } from "../../store/user/slice";

import logo from "../../images/logo.jpeg";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar: React.FC = () => {
  const token = useSelector(selectToken);

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f4f5f3" }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="brand logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ width: "100%" }} fill>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/recipes">
              Recipes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/information">
              Prefecture Explorer
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tips">
              Tips & Tricks
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bento">
              Bento Boxes
            </Nav.Link>
            {token && (
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            )}

            {token ? <LoggedIn /> : <LoggedOut />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
