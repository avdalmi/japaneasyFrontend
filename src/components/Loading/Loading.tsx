// import Lottie from "react-lottie";
import { useLottie } from "lottie-react";
import { CSSProperties } from "react";

interface LottiePlayerProps {
  animationData: any;
  style?: CSSProperties;
}

const Loading = (Props: LottiePlayerProps) => {
  const { animationData } = Props;
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  const { View } = useLottie(options);
  return (
    <div>
      <>{View}</>
    </div>
  );
};
export default Loading;

// const Loading = (Props: LottiePlayerProps) => {
//   const { animationData } = Props;
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <div>
//       <Lottie options={defaultOptions} style={{ width: "800px" }} />
//     </div>
//   );
// };
// export default Loading;
