import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.1,
    }
  }
};

const pageTransition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.12
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="absolute inset-0 w-full h-full flex flex-col flex-1 bg-surface z-0"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
