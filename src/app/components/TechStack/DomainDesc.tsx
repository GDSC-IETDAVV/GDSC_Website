import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const DomainDesc = () => {
  return (
    // Rectangle
    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
      <motion.div
        initial={{ y: "+300px" }}
        animate={{
          y: "0px",
          transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: 2.5,
          },
        }}
        className="flex flex-col gap-8 sm:w-[100%] h-max p-8 items-center"
      >
        {/* Text and Logo */}
        <div className="flex flex-row gap-4 items-center">
          <div>
            <Image
              src={"/gdscLogoOnly.svg"}
              width={56}
              height={40}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="logo"
            />
          </div>
          <div className="font-bold text-3xl sm:text-6xl px-4">Domains</div>
        </div>
        <div className="w-full">
          <p className="text-center text-sm sm:text-base">
            We&#39;re built different, so we build different. Our mission is to
            empower future developers by bringing students passionate about
            technology together and helping them grow their skills in tech,
            regardless of background.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DomainDesc;
