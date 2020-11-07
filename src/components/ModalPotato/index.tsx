import React from "react";
import { motion } from "framer-motion";
import "./index.scss";

export interface ModalPotatoProps {
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export const ModalPotato: React.FC<ModalPotatoProps> = ({
  isModalOpen,
  onCloseModal,
}) => {
  const variants = {
    open: { opacity: 1, y: "100px" },
    closed: { opacity: 0, y: 0 },
  };

  return (
    <motion.div
      className="modal-potato"
      animate={isModalOpen ? "open" : "closed"}
      variants={variants}
      onClick={onCloseModal}
    >
      test
    </motion.div>
  );
};

export default ModalPotato;
