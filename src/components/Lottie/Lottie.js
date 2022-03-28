import { useLottie } from "lottie-react";


const Example = ({animationData, size}) => {
  const style = {
    height: size,
  };

  const options = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default Example;