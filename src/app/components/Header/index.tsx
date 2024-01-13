import React from "react";
import Image from "next/image";
import Burger from "./Burger";
import { motion } from "framer-motion";
import { headerReveal } from "./animations";
const Header = () => {
  return (
    <div className="w-4/5 xl:w-2/3 flex justify-between items-center fixed z-20 h-auto">
      <motion.div
        variants={headerReveal}
        initial="initial"
        animate="open"
        exit="closed"
      >
        <Image src={"/logo.svg"} width={180} height={30} alt="logo" />
      </motion.div>
      <motion.div
        variants={headerReveal}
        initial="initial"
        animate="open"
        exit="closed"
      >
        <Burger />
      </motion.div>
    </div>
  );
};

export default Header;
