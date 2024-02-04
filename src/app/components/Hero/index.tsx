import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PrimaryButton from "../Buttons/primary";
import SecondaryButton from "../Buttons/secondary";
import Image from "next/image";
import styles from "./style.module.scss";
import { buttonReveal, headingReveal, revelAnim } from "./animations";
import Circles from "./Circles";
const Hero = () => {
  const mainPragraph = useRef(null);
  const isInView = useInView(mainPragraph);
  const content = `Google Developer Student Clubs (GDSC) are community groups for
  college and university students interested in Google developer
  technologies. Students from all undergraduate or graduate programs
  with an interest in growing as a developer are welcome. By joining a
  GDSC, students grow their knowledge in a peer-to-peer learning
  environment and build solutions for local businesses and their
  community.`;

  return (
    <div className="margintop flex flex-col lg:flex-row w-full justify-between pt-10 gap-24 lg:gap-0 items-center md:items-start sm:pt-0">
      {/* Left */}
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-8 w-full">
          <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
            <motion.div
              variants={headingReveal}
              initial="initial"
              animate="open"
              exit="closed"
              custom={0.5}
            >
              <Image
                src={"/googleLogo.png"}
                width={208}
                height={70}
                alt="googleLogo"
              />
            </motion.div>
          </div>
          {/* text content */}
          <div className="flex flex-col gap-4">
            <div className={styles.heading}>
              <motion.div
                variants={headingReveal}
                initial="initial"
                animate="open"
                exit="closed"
                custom={1.5}
              >
                Developer&#39;s Student Club
              </motion.div>
            </div>
            <div className={styles.heading}>
              <motion.div
                variants={headingReveal}
                initial="initial"
                animate="open"
                exit="closed"
                custom={2.5}
              >
                {" "}
                IET-DAVV, Indore
              </motion.div>
            </div>
          </div>
          <div className={styles.desc} ref={mainPragraph}>
            <div className={styles.body}>
              <p className={styles.mainPara}>
                {content.split(" ").map((word, index) => {
                  return (
                    // mask
                    <span key={index} className={styles.mask}>
                      <motion.span
                        custom={index}
                        variants={revelAnim}
                        initial="initial"
                        // animate={isInView ? "open" : "closed"}
                        animate="open"
                        exit="closed"
                      >
                        {word}
                      </motion.span>
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
        {/* buttons */}
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.div
            className="flex flex-col sm:flex-row sm:gap-12 gap-4"
            variants={buttonReveal}
            initial="initial"
            animate="open"
            exit="closed"
            custom={2}
          >
            <PrimaryButton />
            <SecondaryButton />
          </motion.div>
        </div>
      </div>
      {/* Right */}
      <div className="lg:w-[400px] py-20 w-full md:py-0">
        <Circles />
      </div>
    </div>
  );
};

export default Hero;
