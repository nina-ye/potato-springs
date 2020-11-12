import React from "react";
import { useSpring, animated } from "react-spring";
import CutePotatoBaseImg from "../../assets/cute-potato-base.png";
import CutePotatoSproutImg from "../../assets/cute-potato-sprout.png";
import "./index.scss";

export interface SproutingPotatoProps {
  duration?: number;
}

export const SproutingPotato: React.FC<SproutingPotatoProps> = ({
  duration = 1000,
}) => {
  const { rotateZ } = useSpring({
    loop: { reverse: true },
    from: { rotateZ: 40 },
    to: { rotateZ: 0 },
    config: { duration },
  });

  return (
    <div className="sprouting-potato-container">
      <img
        src={CutePotatoBaseImg}
        alt="cute potato"
        className="sprouting-potato-base"
      />

      <animated.img
        src={CutePotatoSproutImg}
        alt="sprout"
        className="sprouting-potato-sprout"
        style={{ rotateZ }}
      />
    </div>
  );
};

export default SproutingPotato;
