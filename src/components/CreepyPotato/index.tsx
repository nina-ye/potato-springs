import React from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import CreepyPotatoImg from "../../assets/evil-potato.png";
import "./index.scss";

export const CreepyPotato: React.FC = () => {
  const [{ x }, setX] = useSpring(() => ({ x: 0 }));
  const { scale } = useSpring({
    scale: x.to([0, -100, -200], [1, 1.1, 1.2]),
  });

  const bind = useDrag(({ down, movement }) => {
    setX({
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
      <animated.div className="creepy-potato-slider" style={{ x }}>
        <h1>Slide me!</h1>
      </animated.div>
      <div className="creepy-potato-img-container">
        <animated.img
          src={CreepyPotatoImg}
          alt="creepy potato"
          draggable={false}
          style={{ scale }}
        />
      </div>
    </animated.div>
  );
};

export default CreepyPotato;
