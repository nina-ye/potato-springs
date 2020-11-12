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
    to: { x: didShake ? 50 : 0 },
    config: { mass: 1, tension: 500, friction },
  });

  return (
    <div className="dancing-potato">
      <animated.img
        src={CoolPotato}
        alt="cool potato"
        draggable={false}
        style={{ x }}
        onClick={() => setShake(!didShake)}
      />
    </div>
  );
};

export default DancingPotato;
