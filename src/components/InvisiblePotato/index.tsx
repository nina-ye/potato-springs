import React from "react";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import GarfTato from "../../assets/garftato.png";
import "./index.scss";

export const InvisiblePotato: React.FC = () => {
  const [isHide, setHide] = useState(false);
  const { opacity } = useSpring({ opacity: isHide ? 0 : 1 });
  const toggle = () => setHide(!isHide);

  return (
    <div className="invisible-potato" onClick={toggle}>
      <animated.img
        src={GarfTato}
        alt="garf potato"
        draggable={false}
        // @ts-ignore
        style={{ opacity }}
      />
    </div>
  );
};
