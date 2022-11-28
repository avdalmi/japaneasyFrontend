import Spinner from "react-bootstrap/Spinner";

const Loading: React.FC = () => {
  return (
    <div className="loading_spinner">
      <Spinner animation="grow" role="status"></Spinner>
    </div>
  );
};

export default Loading;
