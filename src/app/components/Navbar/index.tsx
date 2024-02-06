"use client";
import Link from "next/link";
import React from "react";
import Item from "./Item";
import { easeInOut, motion } from "framer-motion";
import { NavAnimation, paragraphAnimation } from "./animations";
import styles from "./page.module.scss";
import { useAppState } from "@/utils/appStateContext";
import { AnimatePresence } from "framer-motion";
const Navbar = () => {
  const { isOpen, setIsOpen } = useAppState();
  const items = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Domains",
      href: "/#domains",
    },
    {
      title: "Team",
      href: "/teams",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];
  // console.log(window.innerHeight, window.innerWidth);
  const x = window.innerWidth / 3;
  const y = window.innerHeight / 3;
  const maskSize = isOpen ? 2800 : 0;
  return (
    // menu
    // <motion.div
    //   variants={NavAnimation}
    //   animate="enter"
    //   exit="exit"
    //   initial="initial"
    //   className="fixed flex items-center justify-center left-24 top-24 w-screen h-screen bg-[black] text-[white] z-5"
    // ></motion.div>
    <motion.div
      key="navbar"
      className={styles.mask}
      initial={{
        WebkitMaskPosition: -maskSize / 6.5 + "px " + -maskSize / 2 + "px",
        WebkitMaskSize: 0 + "px",
      }}
      animate={{
        WebkitMaskPosition: -maskSize / 6.5 + "px " + -maskSize / 2 + "px",
        WebkitMaskSize: maskSize + "px",
      }}
      exit={{
        WebkitMaskPosition: -maskSize / 6.5 + "px " + -maskSize / 2 + "px",
        WebkitMaskSize: 0 + "px",
        transition: { duration: 1, ease: "easeInOut" },
      }}
      transition={{ duration: 2.5, ease: [0.76, 0, 0.24, 1], delay: -0.8 }}
    >
      <div className="fixed flex justify-center w-full h-full bg-[black] text-[white] z-5">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-24 w-full mx-80 items-baseline h-max">
          <motion.p
            transition={{ delay: 0.5 }}
            className="text-4xl sm:text-6xl w-max sm:w-auto font-bold"
          >
            Where to?
          </motion.p>
          <div className="flex flex-col gap-8 text-2xl sm:text-4xl font-light">
            {items.map((item, index) => {
              return <Item key={index} data={{ ...item, index }} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
