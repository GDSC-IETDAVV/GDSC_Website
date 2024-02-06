import React from "react";
import { color, motion } from "framer-motion";
import Image from "next/image";
interface NormalCardParams {
  name: Array<string>;
  stack: string;
  color: string;
  desc: string;
  logo: string;
  custom: number;
}
const NormalCard: React.FC<NormalCardParams> = ({
  name,
  stack,
  color,
  desc,
  logo,
  custom,
}) => {
  const ind = custom;
  return (
    <motion.div
      initial={{ x: "-500px", opacity: 0 }}
      animate={{
        x: "0",
        opacity: 1,
        transition: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.75 * ind,
        },
      }}
      className={
        "flex flex-col gap-8 border border-black rounded-xl pb-5 h-full w-[300px] sm:w-full min-h-80 relative"
      }
    >
      {/* <div
        className={
          "absolute w-full h-8 rounded-tl-lg rounded-tr-lg bg-[#4285F4]"
        }
      ></div> */}
      <div className="flex flex-col gap-10 sm:gap-6 justify-between items-center mt-4 py-4">
        <Image
          src={"/domain-images/" + logo}
          alt="logo"
          width={80}
          height={80}
        />
        <div className="text-xl sm:text-2xl font-bold text-center w-min sm:[line-height:1.3] [line-height:1]">
          {stack}
        </div>
        <div className="flex items-center justify-center text-center">
          {/* Names */}
          {/* <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {name.map((singleName, index) => {
              return (
                <span key={index} className="text-base sm:text-lg font-medium">
                  {singleName}
                </span>
              );
            })}
          </div> */}

          {/* Description */}
          <div className="px-6">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NormalCard;
