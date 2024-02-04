import React from "react";
import Image from "next/image";
import Burger from "./Burger";
import { motion } from "framer-motion";
import { headerReveal } from "./animations";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-4/5 xl:w-full flex justify-between items-center fixed z-20 h-auto blurback xl:px-[15%]">
      <motion.div
        variants={headerReveal}
        initial="initial"
        animate="open"
        exit="closed"
      >
        <Link href="/">
        <Image src={"/logo.svg"} width={180} height={30} alt="logo" />
        </Link>
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
