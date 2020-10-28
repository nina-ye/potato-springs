import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CoolPotato from "../../assets/cool-potato.png";
import "./index.scss";

export const DancingPotato: React.FC = () => {
  const [didShake, setShake] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: didShake ? 1 : 0 }, 
    config: {mass: 1, tension: 500, friction: 10}
  });

  return (
    <div className="dancing-potato">
      <animated.img
        src={CoolPotato}
        alt="cool potato"
        draggable={false}
        // @ts-ignore
        style={{
          transform : x
            .interpolate({
              range: [0, .25, .50, .75, 1],
              output: [0, 10, 20, 10, 0]
            })
            .interpolate(x => `translate3d(${x}px, 0px, 0px)`)
          }}
        onMouseDown={() => setShake(true)}
        onClick={() => setShake(false)}
        onMouseLeave={() => setShake(false)}
      />
    </div>
  );
};

export default DancingPotato;