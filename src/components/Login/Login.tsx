import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const LoggedOut: React.FC = () => {
  return (
    <>
      <div>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/login" style={{ textDecoration: "none" }}>
            Login
          </Nav.Link>
        </Nav.Item>
      </div>
    </>
  );
};

export default LoggedOut;
