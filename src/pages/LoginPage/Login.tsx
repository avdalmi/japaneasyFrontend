import { useState, useEffect, SyntheticEvent } from "react";
import Container from "@mui/material/Container";
import { login } from "../../store/user/thunks";
import { selectToken } from "../../store/user/slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <h1>Login</h1>
      <Box
        component="form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "400px",
        }}
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          style={{ width: "100%" }}
          name="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          style={{ width: "100%" }}
          name="password"
          id="outlined-multiline"
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          style={{ backgroundColor: "#343A40" }}
          variant="contained"
          type="submit"
          onClick={submitForm}
        >
          Login
        </Button>
        <Link style={{ color: "#343A40" }} to="/signup">
          Click here to sign up
        </Link>
      </Box>
    </Container>
  );
}
