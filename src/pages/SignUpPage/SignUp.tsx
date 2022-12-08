import { useState, useEffect, SyntheticEvent } from "react";
import { signUp } from "../../store/user/thunks";
import { selectToken } from "../../store/user/slice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");

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
    dispatch(signUp(firstName, lastName, email, password));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <h1>Sign Up</h1>
        <form
          onSubmit={submitForm}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "400px",
          }}
        >
          <label>You first name:</label>
          <input
            style={{ width: "100%" }}
            name="firstName"
            id="outlined-basic"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label>Your last name:</label>
          <input
            style={{ width: "100%" }}
            name="lastName"
            id="outlined-basic"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <label>E-mail:</label>
          <input
            style={{ width: "100%" }}
            name="email"
            id="outlined-basic"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>Your password:</label>
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
            variant="contained"
            type="submit"
          >
            Sign up
          </Button>
          <Link style={{ color: "#343A40" }} to="/login">
            Click here to log in
          </Link>
        </form>
      </div>
    </div>
  );
}
