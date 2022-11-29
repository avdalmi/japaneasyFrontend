import Spinner from "react-bootstrap/Spinner";
import Lottie from "react-lottie";

import { CSSProperties } from "react";
interface LottiePlayerProps {
  animationData: any;
  style?: CSSProperties;
}

const Loading = (Props: LottiePlayerProps) => {
  const { animationData, style } = Props;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      {/* @ts-ignore */}
      <Lottie options={defaultOptions} style={style} />
    </div>
    // <div className="loading_spinner">
    //   {/* @ts-ignore */}
    //   <Lottie animationData={animationData} />
    //   <Spinner animation="grow" role="status"></Spinner>
    // </div>
  );
};
export default Loading;
