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
  const content = `GDSC IET DAVV is a part of dynamic community where students from various backgrounds come together to explore the latest in technology, learn about Google's tools and platforms, and collaborate on innovative projects. GDSC is a place to grow as a developer, starting from a beginner developer to an advanced developer. It's not always about “programming” but also about connecting, learning together and growing together.`;
  // async function getLatestEvent() {
  //   try {
  //     const response = await fetch(
  //       "https://gdsc.community.dev/institute-of-engineering-and-technology-davv-indore/"
  //     );
  //     const html = await response.text();
  //     // Parse the HTML to extract the relevant event information
  //     // You can use libraries like Cheerio or querySelectorAll to find specific elements.
  //     // For example:
  //     // const eventTitle = html.querySelector('.event-title').textContent;
  //     // const eventLink = html.querySelector('.event-link').href;
  //     // Now you have the event title and link to display on your site.
  //     // Update your site's content accordingly.
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // Call the function to retrieve the latest event data
  // getLatestEvent();
  return (
    <div className="mt-36 flex flex-col lg:flex-row w-full justify-between pt-10 gap-24 lg:gap-0 items-center md:items-start sm:pt-0">
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
