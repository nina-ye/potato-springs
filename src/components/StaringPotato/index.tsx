import React from "react";
import { useSpring, animated } from "react-spring";
import SpeechlessPotatoImg from "../../assets/speechless-potato.png";

export const StaringPotato: React.FC = () => {
  const [{ s }, set] = useSpring(() => ({
    s: 1,
    config: { friction: 50 },
  }));

  return (
    <animated.img
      src={SpeechlessPotatoImg}
      alt="staring potato"
      onMouseMove={() => set({ s: 3 })}
      onMouseLeave={() => set({ s: 1 })}
      style={{ transform: s.interpolate(s => `scale(${s})`) }}
    />
  );
};

export default StaringPotato;
