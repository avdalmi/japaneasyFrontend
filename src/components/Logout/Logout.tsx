import { useNavigate } from "react-router";

import { useAppDispatch } from "../../hooks";

import { logOutSuccess } from "../../store/user/slice";

import Button from "react-bootstrap/Button";

const LoggedIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="secondary"
        onClick={() => {
          navigate("/");
          dispatch(logOutSuccess());
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default LoggedIn;
