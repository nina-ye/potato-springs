import React, { useRef } from "react";
import { motion } from "framer-motion";
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
}

const PotatoCard: React.FC<PotatoCardProps> = ({
  potatoImg,
  backgroundColor,
  constraintsRef,
}) => {
  return (
    <motion.div
      className="potato-card"
      whileTap={{ scale: 1.1 }}
      style={{ backgroundColor }}
      drag
      dragConstraints={constraintsRef}
    >
      <img alt="potato" src={potatoImg} draggable={false} />
    </motion.div>
  );
};

export const DeckOfPotatoes: React.FC = () => {
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
      potatoImg={value}
      backgroundColor={backgroundColors[index]}
      constraintsRef={constraintsRef}
    />
  ));

  return (
    <div className="deck-of-potatoes-container" ref={constraintsRef}>
      {Potatoes}
    </div>
  );
};

export default DeckOfPotatoes;
