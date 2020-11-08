import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HappyPotatoImg from "../../assets/happy-potato.png";
import CoolPotatoImg from "../../assets/cool-potato.png";
import CutePotatoImg from "../../assets/cute-potato.png";
import EvilPotatoImg from "../../assets/evil-potato.png";
import SadPotatoImg from "../../assets/sad-potato.png";
import SpeechlessPotatoImg from "../../assets/speechless-potato.png";
import "./index.scss";

interface PotatoCardProps {
  potatoImg: string;
  backgroundColor: string;
  constraintsRef?: React.MutableRefObject<null>;
  reset: number;
}

const PotatoCard: React.FC<PotatoCardProps> = ({
  potatoImg,
  backgroundColor,
  constraintsRef,
  reset,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(() => ({
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    }));
  }, [reset, controls]);

  return (
    <motion.div
      className="potato-card"
      whileTap={{ scale: 1.1 }}
      style={{ backgroundColor }}
      drag
      dragConstraints={constraintsRef}
      animate={controls}
    >
      <img alt="potato" src={potatoImg} draggable={false} />
    </motion.div>
  );
};

export interface DeckOfPotatoesProps {
  reset: number;
}

export const DeckOfPotatoes: React.FC<DeckOfPotatoesProps> = ({ reset }) => {
  const potatoImages = [
    HappyPotatoImg,
    CoolPotatoImg,
    CutePotatoImg,
    EvilPotatoImg,
    SadPotatoImg,
    SpeechlessPotatoImg,
  ];

  const backgroundColors = [
    "antiquewhite",
    "aliceblue",
    "lavender",
    "lavenderblush",
    "honeydew",
    "ivory",
  ];

  const constraintsRef = useRef(null);

  const Potatoes = potatoImages.map((value, index) => (
    <PotatoCard
      key={index}
      potatoImg={value}
      backgroundColor={backgroundColors[index]}
      constraintsRef={constraintsRef}
      reset={reset}
    />
  ));

  return (
    <div className="deck-of-potatoes-container" ref={constraintsRef}>
      {Potatoes}
    </div>
  );
};

export default DeckOfPotatoes;
