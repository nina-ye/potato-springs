import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import GarfTato from "../../assets/garftato.png";
import "./index.scss";

export const GarfPotato: React.FC = () => {
  const [{ x, y }, setXY] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    setXY({ x: down ? mx : 0, y: down ? my : 0 });
  });

  return (
    <div className="garf-potato">
      <animated.img
        {...bind()}
        src={GarfTato}
        alt="garf potato"
        draggable={false}
        style={{ x, y }}
      />
    </div>
  );
};
