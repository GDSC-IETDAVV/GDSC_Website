import React, { useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";
import {
  headingReveal,
  paraRevealAnimation,
  revelAnim,
  buttonReveal,
} from "./animations";
import EventsButton from "../Buttons/eventButton";

const Communities = () => {
  const subText = useRef(null);
  const headingRef = useRef(null);
  const missionsRef = useRef(null);
  const eventRef = useRef(null);
  const valuesRef = useRef(null);
  const isInView = useInView(subText);
  const isInViewEthic = useInView(missionsRef || valuesRef);
  const isInViewEvents = useInView(eventRef);
  const heading = "We Develop Communities";
  const missionPara =
    "We're built different, so we build different. Our mission is to empower future developers by bringing students passionate about technology together and helping them grow their skills in tech, regardless of background.";
  const valuesPara =
    "We believe you don't need to code to be a developer. We develop both products and people by making Google technologies accessible to everyone through workshops, events, and more. Dreamers, problem solvers, and tinkerers: That's who we are.";
  const eventPara =
    "Immerse yourself in the future of technology at our cutting-edge events, where ideas become reality and innovation flourishes. Here, you'll discover workshops, resources, and networking opportunities designed to propel your career in the tech field.";
  return (
    // mid
    <div className="flex flex-col w-full gap-12 pt-24" id="about">
      {/* mid top */}
      <div className="flex flex-col gap-10">
        {/* Headings */}
        <div className="flex flex-col gap-2">
          <motion.span
            ref={subText}
            variants={headingReveal}
            initial="initial"
            // animate={isInView ? "open" : ""}
            whileInView={"open"}
            viewport={{ once: true }}
            exit="closed"
            custom={0.5}
            className={styles.subText}
          >
            At{" "}
            <span className="font-medium">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>{" "}
            Student Developer Club IET-DAVV
          </motion.span>
          {/* <span className={styles.heading}>We Develop Communities</span> */}
          <div className={styles.desc}>
            <div className={styles.body}>
              <p className={styles.mainPara}>
                {heading.split(" ").map((word, index) => {
                  return (
                    // mask
                    <span key={index} className={styles.mask}>
                      <motion.span
                        custom={index}
                        variants={revelAnim}
                        ref={headingRef}
                        initial="initial"
                        // animate={isInView ? "open" : "closed"}
                        whileInView={"open"}
                        viewport={{ once: true }}
                        // animate="open"
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
        {/* Image - 1138x456 */}
        <div className="w-auto h-[20vh] md:h-[50vh]">
          <div className="w-auto h-full relative">
            <Image
              src={"/group.png"}
              // width={56}
              // height={56}
              // layout="fill"
              fill={true}
              alt="group-photo"
              sizes="(min-width: 768px) 50vw,
            (max-width: 768px) 100vw,
            100vw"
              // objectFit="contain"
            />
            {/* <img
              src={"/group.png"}
              alt="group-photo"
              sizes="(min-width: 768px) 50vw,
            (max-width: 768px) 100vw,
            100vw"
              // objectFit="contain"
            /> */}
          </div>
        </div>
        {/* Mission/Values */}
        <div className="flex w-full md:flex-row gap-8 flex-col justify-between items-baseline">
          {/* Misson */}
          <div className="flex flex-col gap-3 md:pr-8 justify-between items-baseline w-full md:border-r md:border-r-gray-300">
            <motion.span>
              <div className={styles.heading}>
                <motion.div
                  variants={headingReveal}
                  initial="initial"
                  // animate="open"
                  // animate={isInViewEthic ? "open" : "closed"}
                  whileInView={"open"}
                  viewport={{ once: true }}
                  exit="closed"
                  custom={1.5}
                >
                  Our Mission
                </motion.div>
              </div>
            </motion.span>
            <div className={styles.descEthic} ref={missionsRef}>
              <div className={styles.body}>
                <p className={styles.mainPara}>
                  {missionPara.split(" ").map((word, index) => {
                    return (
                      // mask
                      <span key={index} className={styles.mask}>
                        <motion.span
                          custom={index}
                          variants={paraRevealAnimation}
                          initial="initial"
                          // animate={isInViewEthic ? "open" : "closed"}
                          whileInView={"open"}
                          viewport={{ once: true }}
                          // animate="open"
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
          {/* Values */}
          <div className="flex flex-col gap-3 justify-between items-baseline w-full md:pl-8">
            <motion.span>
              <div className={styles.heading}>
                <motion.div
                  variants={headingReveal}
                  initial="initial"
                  // animate="open"
                  // animate={isInViewEthic ? "open" : "closed"}
                  whileInView={"open"}
                  viewport={{ once: true }}
                  exit="closed"
                  custom={1.5}
                >
                  Our Values
                </motion.div>
              </div>
            </motion.span>
            <div className={styles.descEthic} ref={valuesRef}>
              <div className={styles.body}>
                <p className={styles.mainPara}>
                  {valuesPara.split(" ").map((word, index) => {
                    return (
                      // mask
                      <span key={index} className={styles.mask}>
                        <motion.span
                          custom={index}
                          variants={paraRevealAnimation}
                          initial="initial"
                          // animate={isInViewEthic ? "open" : "closed"}
                          whileInView={"open"}
                          viewport={{ once: true }}
                          // animate="open"
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
        </div>
      </div>
      {/* Events */}
      <div className="flex lg:flex-row flex-col gap-4 justify-between w-full items-center">
        {/* Heading and text */}
        <div className="flex flex-col gap-3 justify-between items-baseline w-full lg:w-[60%]">
          <motion.span>
            <div className={styles.heading}>
              <motion.div
                variants={headingReveal}
                initial="initial"
                // animate="open"
                // animate={isInViewEvents ? "open" : "closed"}
                whileInView={"open"}
                viewport={{ once: true }}
                exit="closed"
                custom={1.5}
              >
                Our Events
              </motion.div>
            </div>
          </motion.span>
          <div className={styles.descEthic} ref={eventRef}>
            <div className={styles.body}>
              <p className={styles.mainPara}>
                {eventPara.split(" ").map((word, index) => {
                  return (
                    // mask
                    <span key={index} className={styles.mask}>
                      <motion.span
                        custom={index}
                        variants={paraRevealAnimation}
                        initial="initial"
                        // animate={isInViewEvents ? "open" : "closed"}
                        whileInView={"open"}
                        viewport={{ once: true }}
                        // animate="open"
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
        {/* button */}
        <div className="pt-10">
          <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
            <motion.div
              className=""
              variants={buttonReveal}
              initial="initial"
              // animate={isInViewEvents ? "open" : "closed"}
              whileInView={"open"}
              viewport={{ once: true }}
              // animate="open"
              exit="closed"
              custom={1.25}
            >
              <EventsButton />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
