import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="loading_spinner">
      <Spinner animation="grow" role="status"></Spinner>
    </div>
  );
}
