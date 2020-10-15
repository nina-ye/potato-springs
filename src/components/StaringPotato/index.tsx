import React from "react";
import { useSpring, animated } from "react-spring";
import SpeechlessPotatoImg from "../../assets/speechless-potato.png";

const trans = (s: number) => {
  return `scale(${s})`;
};

export const StaringPotato: React.FC = () => {
  const [props, set] = useSpring(() => ({
    s: 1,
    config: { friction: 500 },
  }));

  return (
    <animated.img
      src={SpeechlessPotatoImg}
      alt="staring potato"
      onMouseMove={() => set({ s: 3 })}
      onMouseLeave={() => set({ s: 1 })}
      style={{ transform: props.s.interpolate(trans) }}
    />
  );
};
