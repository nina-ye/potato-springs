import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SadPotatoImg from "../../assets/sad-potato.png";
import "./index.scss";

export interface SadPotatoProps {
  duration?: number;
}

export const SadPotato: React.FC<SadPotatoProps> = ({ duration = 1000 }) => {
  const [fadedOut, setFadedOut] = useState(false);

  const { opacity } = useSpring({
    opacity: fadedOut ? 0.2 : 1,
    config: { duration },
  });
  const { scale } = useSpring({
    scale: fadedOut
      ? opacity.to(
          [0.2, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 1],
          [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
        )
      : 1,
  });

  return (
    <div className="sad-potato" onClick={() => setFadedOut(true)}>
      <animated.img
        src={SadPotatoImg}
        alt="sad potato"
        onMouseLeave={() => setFadedOut(false)}
        // @ts-ignore tis a known ts error T_T
        style={{ opacity, scale }}
      />
    </div>
  );
};

export default SadPotato;
