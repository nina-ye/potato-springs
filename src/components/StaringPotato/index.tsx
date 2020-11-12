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
  const [{ scale }, setScale] = useSpring(() => ({
    scale: 1,
    config: config[configType],
  }));

  return (
    <animated.img
      src={SpeechlessPotatoImg}
      alt="staring potato"
      onMouseMove={() => setScale({ scale: 3 })}
      onMouseLeave={() => setScale({ scale: 1 })}
      style={{ scale }}
    />
  );
};

export default StaringPotato;
