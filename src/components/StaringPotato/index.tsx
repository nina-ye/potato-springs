import React from "react";
import { useSpring, animated } from "react-spring";
import SpeechlessPotatoImg from "../../assets/speechless-potato.png";

const trans = (x: number, y: number, s: number) => {
  return `rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
};

export const StaringPotato: React.FC = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { friction: 500 },
  }));

  return (
    <animated.img
      src={SpeechlessPotatoImg}
      alt="staring potato"
      onMouseMove={() => set({ xys: [0, 0, 3] })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans as any) }}
    />
  );
};
