import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./index.scss";

export interface StretchyPotatoProps {
  mass: number;
  tension: number;
  friction: number;
}

export const StretchyPotato: React.FC<StretchyPotatoProps> = ({
  mass,
  tension,
  friction,
}) => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      mass: mass,
      tension: tension,
      friction: friction,
    },
  }));
  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  const setPadding = (x: number, y: number) => {
    let top, bottom, right, left;

    if (x < 0) {
      left = Math.abs(x);
      right = 0;
    } else if (x > 0) {
      right = x;
      left = 0;
    }

    if (y < 0) {
      top = Math.abs(y);
      bottom = 0;
    } else if (y > 0) {
      bottom = y;
      top = 0;
    }

    return `${top}px ${right}px ${bottom}px ${left}px`;
  };

  const setTranslation = (x: number, y: number) => {
    return `translate3d(${0.5 * x}px, ${0.5 * y}px, 0px)`;
  };

  return (
    <animated.div
      {...bind()}
      className="stretchy-potato"
      style={{
        padding: xy.interpolate((x, y) => setPadding(x, y)),
        transform: xy.interpolate((x, y) => setTranslation(x, y)),
      }}
    />
  );
};

export default StretchyPotato;
