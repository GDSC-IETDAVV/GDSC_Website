import React from "react";
import { motion } from "framer-motion";
import { circleAnimation, headingReveal } from "./animations";
const Circles = () => {
  return (
    <div className="flex md:max-lg:flex-row flex-col gap-8 justify-normal items-center md:max-lg:gap-16 md:max-lg:items-center md:max-lg:justify-center">
      <motion.div
        variants={circleAnimation}
        custom={1}
        initial="initial"
        animate="open"
        exit="closed"
        className="xl:absolute xl:right-[320px] w-[196px] h-[196px] rounded-full bg-[#4285F4] flex items-center justify-center"
      >
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.div
            variants={headingReveal}
            initial="initial"
            animate="open"
            exit="closed"
            custom={3}
            className="flex flex-col gap-1 items-center justify-center"
          >
            <span className="text-white font-extrabold text-6xl">400+</span>
            <span className="text-white font-medium text-sm text-center">
              Active members in the community
            </span>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={circleAnimation}
        custom={2}
        initial="initial"
        animate="open"
        exit="closed"
        className="xl:absolute xl:right-[180px] xl:mt-[200px] w-[168px] h-[168px] rounded-full bg-[#34A853] flex items-center justify-center"
      >
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.div
            variants={headingReveal}
            initial="initial"
            animate="open"
            exit="closed"
            custom={4}
            className="flex flex-col gap-1 items-center justify-center"
          >
            <span className="text-white font-extrabold text-6xl">20+</span>
            <span className="text-white font-medium text-sm text-center">
              Events hosted in community
            </span>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={circleAnimation}
        custom={3}
        initial="initial"
        animate="open"
        exit="closed"
        className="xl:absolute xl:right-[270px] xl:mt-[400px] w-[168px] h-[168px] rounded-full bg-[#EA4335] flex items-center justify-center"
      >
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.div
            variants={headingReveal}
            initial="initial"
            animate="open"
            exit="closed"
            custom={5}
            className="flex flex-col gap-1 items-center justify-center"
          >
            <span className="text-white font-extrabold text-6xl">20+</span>
            <span className="text-white font-medium text-sm text-center">
              Events hosted in community
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Circles;
