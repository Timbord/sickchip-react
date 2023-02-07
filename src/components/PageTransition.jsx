/* Page Transition */
import { motion } from "framer-motion";
/* check if move left and right */
const direction = 1;
const variants = {
  inital: (direction) => {
    return {
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};

export const PageTransition = ({ children, ...props }) => {
  return (
    <motion.div
      {...props}
      variants={variants}
      initial={"inital"}
      animate={"animate"}
      exit={"exit"}
      transition={{ ease: "anticipate", duration: 0.5 }}>
      {children}
    </motion.div>
  );
};
