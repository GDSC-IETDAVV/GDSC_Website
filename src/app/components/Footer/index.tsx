import React, { useRef } from "react";
import Map from "./Map";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { headingReveal } from "./animations";
import Image from "next/image";
const Footer = () => {
  const reachRef = useRef(null);
  const footerRef = useRef(null);
  const isInView = useInView(reachRef);
  const footerInView = useInView(footerRef);
  return (
    <div
      className="flex flex-col justify-center gap-10 pb-10 items-center w-full pt-20"
      id="contact"
    >
      {/* Map and Quick Links */}
      <div className="flex flex-col items-center gap-1 w-full">
        {/* Map */}
        <div className="flex flex-col justify-between items-start gap-1 w-full">
          {/* Reach Us */}
          <motion.span ref={reachRef}>
            <div className={styles.heading}>
              <motion.div
                variants={headingReveal}
                initial="initial"
                // animate="open"
                // animate={isInView ? "open" : "closed"}
                whileInView={"open"}
                viewport={{ once: true }}
                exit="closed"
                custom={1}
              >
                Reach Us
              </motion.div>
            </div>
          </motion.span>
          {/* Actual Map */}
          <div className="w-full h-full">
            <Map />
          </div>
        </div>
        {/* Quick Links and Support */}
        <div
          className="flex flex-col md:flex-row sm:gap-10 gap-8 justify-between items-start py-7 sm:px-28 w-full"
          ref={footerRef}
        >
          {/* Quick Links */}
          <div className="flex flex-col gap-2 items-center w-full">
            <div
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              className="text-lg text-gray-600 font-semibold"
            >
              <motion.div
                variants={headingReveal}
                initial="initial"
                // animate="open"
                // animate={footerInView ? "open" : "closed"}
                whileInView={"open"}
                viewport={{ once: true }}
                exit="closed"
                custom={1}
              >
                Quick Links
              </motion.div>
            </div>
            <motion.span
              className="opacity-0"
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 * 2,
                },
              }}
              viewport={{ once: true }}
              // animate={
              //   footerInView
              //     ? {
              //         opacity: 1,
              //         transition: {
              //           duration: 1,
              //           ease: [0.76, 0, 0.24, 1],
              //           delay: 0.5 * 2,
              //         },
              //       }
              //     : {}
              // }
            >
              About
            </motion.span>
            <motion.span
              className="opacity-0"
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 * 2.5,
                },
              }}
              viewport={{ once: true }}
            >
              Tech Stack
            </motion.span>
            <motion.span
              className="opacity-0"
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 * 3,
                },
              }}
              viewport={{ once: true }}
            >
              FAQ
            </motion.span>
          </div>
          {/* Community and Support */}
          <div className="flex flex-col gap-2 items-center w-full">
            <div
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              className="text-lg text-gray-600 font-semibold"
            >
              <motion.div
                variants={headingReveal}
                initial="initial"
                // animate="open"
                // animate={footerInView ? "open" : "closed"}
                whileInView="open"
                viewport={{ once: true }}
                exit="closed"
                custom={2.5}
                className="text-center pb-1 sm:pb-0"
              >
                Community and Support
              </motion.div>
            </div>
            <motion.span
              className="opacity-0"
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 * 4,
                },
              }}
              viewport={{ once: true }}
            >
              Guidelines
            </motion.span>
            <motion.span
              className="opacity-0"
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 * 4.5,
                },
              }}
              viewport={{ once: true }}
            >
              Help and Support
            </motion.span>
            <motion.span
              className="opacity-0"
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 * 5,
                },
              }}
              viewport={{ once: true }}
            >
              Safety
            </motion.span>
          </div>
        </div>
      </div>
      {/* Logo */}
      <div className="flex justify-center items-center gap-6 ">
        {/* Logo */}
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.div
            className=""
            variants={headingReveal}
            initial="initial"
            // animate="open"
            // animate={footerInView ? "open" : "closed"}
            whileInView={"open"}
            viewport={{ once: true }}
            exit="closed"
            custom={3.5}
          >
            <Image
              src={"/gdscLogoOnly.svg"}
              width={56}
              height={40}
              alt="logo"
            />
          </motion.div>
        </div>
        {/* Text */}
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.div
            variants={headingReveal}
            initial="initial"
            // animate="open"
            // animate={footerInView ? "open" : "closed"}
            whileInView={"open"}
            viewport={{ once: true }}
            exit="closed"
            custom={4}
          >
            <span className="font-normal sm:text-xl text-lg">
              Developer&#39;s Student Club
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
