"use client";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: "-100%" }, // Slide from left
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, x: "100%", transition: { duration: 0.6, ease: "easeIn" } }, // Slide to right
};

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
