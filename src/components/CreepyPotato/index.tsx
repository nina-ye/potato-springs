import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import CreepyPotatoImg from "../../assets/evil-potato.png";
import "./index.scss";

export const CreepyPotato: React.FC = () => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ down, movement }) => {
    set({
      x: down
        ? movement[0] > 0
          ? 0
          : movement[0] < -400
          ? -400
          : movement[0]
        : 0,
    });
  });
  return (
    <animated.div className="creepy-potato-slider-container" {...bind()}>
      <animated.div
        className="creepy-potato-slider"
        style={{
          transform: x.interpolate(x => `translate3d(${x}px, 0px, 0px)`),
        }}
      >
        <h1>Slide me!</h1>
      </animated.div>
      <div className="creepy-potato-img-container">
        <animated.img
          src={CreepyPotatoImg}
          alt="creepy potato"
          style={{
            transform: x
              .interpolate({
                range: [0, -100, -200],
                output: [1, 1.1, 1.2],
              })
              .interpolate(x => `scale(${x})`),
          }}
        />
      </div>
    </animated.div>
  );
};

export default CreepyPotato;
