import { motion } from "motion/react";

const motionAnimation = () => {
  return (
    <>
      <component />
      <motion.div
        initial={{ y: 1000, opacity: 1 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      ></motion.div>
    </>
  );
};

export default motionAnimation;
