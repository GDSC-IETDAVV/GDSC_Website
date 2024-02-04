import React from "react";
import { color, motion } from "framer-motion";
interface NormalCardParams {
  name: Array<string>;
  stack: string;
  color: string;
  custom: number;
}
const NormalCard: React.FC<NormalCardParams> = ({
  name,
  stack,
  color,
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
      className="flex flex-col gap-8 border border-black rounded-xl pb-5 h-max w-[300px] sm:w-[336px] min-h-56 relative"
    >
      <div
        className={
          "absolute w-full h-8 rounded-tl-lg rounded-tr-lg bg-[#4285F4]"
        }
      ></div>
      <div className="flex flex-col gap-10 sm:gap-8 justify-between items-center mt-12">
        <div className="text-xl sm:text-3xl font-bold text-center w-min sm:[line-height:1.3] [line-height:1]">
          {stack}
        </div>
        <div className="flex flex-col gap-4">
          {/* Names */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {name.map((singleName, index) => {
              return (
                <span key={index} className="text-base sm:text-lg font-medium">
                  {singleName}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NormalCard;
