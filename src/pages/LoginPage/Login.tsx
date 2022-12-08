import { useState, useEffect, SyntheticEvent } from "react";
import { login } from "../../store/user/thunks";
import { selectToken } from "../../store/user/slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
    <div
      onSubmit={submitForm}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "400px",
        }}
      >
        <label>Enter your email address</label>
        <input
          style={{ width: "100%" }}
          name="email"
          id="outlined-basic"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Enter your password</label>
        <input
          style={{ width: "100%" }}
          name="password"
          id="outlined-multiline"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          style={{ backgroundColor: "#343A40" }}
          variant="secondary"
          type="submit"
        >
          Login
        </Button>
        <Link style={{ color: "#343A40" }} to="/signup">
          Click here to sign up
        </Link>
      </form>
    </div>
  );
}
