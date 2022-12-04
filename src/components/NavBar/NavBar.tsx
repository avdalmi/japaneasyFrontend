import { NavLink } from "react-router-dom";
import Logout from "../Logout/Logout";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/slice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo.jpeg";

const NavBar: React.FC = () => {
  const token = useSelector(selectToken);

  return (
    <Navbar expand="lg" variant="light" bg="light">
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
            {token && (
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            )}

            {token ? <Logout /> : <Login />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
