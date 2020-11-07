import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HappyPotatoImg from "../../assets/happy-potato.png";
import "./index.scss";

export interface SpinningModalPotatoProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export const SpinningModalPotato: React.FC<SpinningModalPotatoProps> = ({
  isModalOpen,
  onCloseModal,
}) => {
  const overlayVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    close: { opacity: 0 },
  };

  const modalVariant = {
    initial: { y: "-50%" },
    isOpen: { y: "25%" },
    close: { y: "-50%" },
  };

  const potatoVariant = {
    initial: { rotateY: -360 },
    isOpen: { rotateY: 360 },
    close: { rotateY: -360 },
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="modal-potato-overlay"
          initial={"initial"}
          animate={"isOpen"}
          exit={"close"}
          variants={overlayVariant}
        >
          <motion.div className="modal-potato-content" variants={modalVariant}>
            <span className="modal-potato-x" onClick={onCloseModal}>
              &times;
            </span>
            <motion.img
              alt="spinning-potato"
              src={HappyPotatoImg}
              variants={potatoVariant}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpinningModalPotato;
