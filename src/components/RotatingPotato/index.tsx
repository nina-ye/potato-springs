import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import CoolPotato from "../../assets/cool-potato.png";
import "./index.scss";

export const RotatingPotato: React.FC = () => {
  const [isRotated, setRotated] = useState(false);
  const {rotateZ} = useSpring({
    from: {
      rotateZ: 0
    },
    to: {
      rotateZ: !isRotated ? 360 : 0
    },
  });
  const toggle = () => setRotated(!isRotated);

  return (
    <div className="rotating-potato" onClick={toggle}>
      <animated.img
        src={CoolPotato}
        alt="cool potato"
        draggable={false}
        // @ts-ignore
        style={{ transform : rotateZ.interpolate(z => `rotateZ(${z}deg)`) }}
      />
    </div>
  );
};
