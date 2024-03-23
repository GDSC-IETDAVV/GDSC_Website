import React from "react";
import Image from "next/image";
import Burger from "./Burger";
import Link from "next/link";
import { motion } from "framer-motion";
import { headerReveal } from "./animations";
import { useScrollBlock } from "@/utils/useScrollBlock";

const Header = () => {
  const [blockScroll, allowScroll] = useScrollBlock();
  return (
    <div className="w-4/5 xl:w-[69%] flex justify-between items-center fixed z-50 h-auto">
      <motion.div
        variants={headerReveal}
        initial="initial"
        animate="open"
        exit="closed"
      >
        <Link href="/">
          <Image
            src={"/logo.svg"}
            width={180}
            height={30}
            alt="logo"
            onClick={() => allowScroll()}
          />
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
