import React from "react";
import { useSpring, animated, config } from "react-spring";
import SpeechlessPotatoImg from "../../assets/speechless-potato.png";
import { Presets } from "../../types/configPresents";

export interface StaringPotatoProps {
  configType?: Presets;
}

export const StaringPotato: React.FC<StaringPotatoProps> = ({
  configType = "default",
}) => {
  const [{ s }, set] = useSpring(() => ({
    s: 1,
    config: config[configType],
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
