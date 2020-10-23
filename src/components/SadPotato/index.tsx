import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import SadPotatoImg from "../../assets/sad-potato.png";
import "./index.scss";

export const SadPotato: React.FC = () => {
  const [fadedOut, setFadedOut] = useState(false);

  const { x } = useSpring({
    x: fadedOut ? 0 : 1,
    config: { duration: 1000 },
  });

  return (
    <div className="sad-potato" onClick={() => setFadedOut(true)}>
      <animated.img
        src={SadPotatoImg}
        alt="sad potato"
        onMouseLeave={() => setFadedOut(false)}
        // @ts-ignore tis a known ts error T_T
        style={{
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: fadedOut
            ? x
                .interpolate({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                })
                .interpolate(x => `scale(${x})`)
            : "",
        }}
      />
    </div>
  );
};

export default SadPotato;
