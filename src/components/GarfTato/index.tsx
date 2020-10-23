import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import GarfTato from "../../assets/garftato.png";
import "./index.scss";

export const GarfPotato: React.FC = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  return (
    <div className="garf-potato">
      <animated.img
        {...bind()}
        src={GarfTato}
        alt="garf potato"
        draggable={false}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
        }}
      />
    </div>
  );
};
