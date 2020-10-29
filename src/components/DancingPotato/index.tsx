import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CoolPotato from "../../assets/cool-potato.png";
import "./index.scss";

export interface DancingPotatoProps {
  friction?: number;
}

export const DancingPotato: React.FC<DancingPotatoProps> = ({
  friction = 50,
}) => {
  const [didShake, setShake] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    to: { x: didShake ? 1 : 0 },
    config: { mass: 1, tension: 500, friction: friction },
  });

  return (
    <div className="dancing-potato">
      <animated.img
        src={CoolPotato}
        alt="cool potato"
        draggable={false}
        style={{
          transform: x
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, 10, 20, 30, 40],
            })
            // @ts-ignore
            .interpolate(x => `translate3d(${x}px, 0px, 0px)`),
        }}
        onClick={() => setShake(!didShake)}
      />
    </div>
  );
};

export default DancingPotato;
