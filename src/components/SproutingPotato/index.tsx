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
  const { deg } = useSpring({
    from: { deg: 0 },
    to: async next => {
      while (1) {
        await next({ deg: 40 });
        await next({ deg: 0 });
      }
    },
    config: { duration },
  });

  return (
    <>
      <img
        src={CutePotatoBaseImg}
        alt="cute potato"
        className="sprouting-potato-base"
      />

      <animated.img
        src={CutePotatoSproutImg}
        alt="sprout"
        className="sprouting-potato-sprout"
        style={{
          transform: deg.interpolate(deg => `rotateZ(${deg}deg)`),
        }}
      />
    </>
  );
};

export default SproutingPotato;
