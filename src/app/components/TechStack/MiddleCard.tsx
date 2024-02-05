import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface cardType {
  desc: string;
  title: string;
}

const MiddleCard = ({desc, title} : cardType) => {
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
        className="flex flex-col gap-8 sm:w-[480px] h-max border border-[#157BF6] rounded-xl p-8"
      >
        {/* Text and Logo */}
        <div className="flex flex-row gap-4 items-center">
          <div>
            <Image
              src={"/gdscLogoOnly.svg"}
              width={56}
              height={40}
              alt="logo"
            />
          </div>
          <div className="font-bold text-2xl sm:text-6xl">{title || "Tech Stack"}</div>
        </div>
        <div>
          <p className="text-justify text-sm sm:text-base">
            {desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MiddleCard;
