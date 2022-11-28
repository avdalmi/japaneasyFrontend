import Button from "@mui/material/Button";
import Nav from "react-bootstrap/Nav";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logOut } from "../../store/user/thunks";
import { selectUser } from "../../store/user/selectors";
import { useNavigate } from "react-router";

const LoggedIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  return (
    <>
      <Nav.Item
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ marginLeft: "0.5rem" }}>{user.name}</span>
      </Nav.Item>
      <Button
        style={{ color: "white", borderColor: "white" }}
        variant="outlined"
        onClick={() => {
          navigate("/");
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default LoggedIn;
