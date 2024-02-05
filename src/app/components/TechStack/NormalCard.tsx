import React from "react";
import { color, motion } from "framer-motion";
interface NormalCardParams {
  name: Array<string>;
  stack: string;
  color: string;
  tags: Array<string>;
  custom: number;
}
const NormalCard: React.FC<NormalCardParams> = ({
  name,
  stack,
  color,
  tags,
  custom,
}) => {
  const ind = custom;
  return (
    <div className="mb-20">
      <div className="grid grid-cols-3 gap-4 font-noto">
        <div
          key={ind}
          className="w-80 h-72 shadowTechStackCard mx-auto cursor-pointer my-auto"
        >
          <div className="p-4 flex items-center space-x-2 border-b border-[#E4E4E7]">
            {/* <img src="/mustafa.png" alt={item.mentorName} className="rounded-full h-9 w-9"/> */}
            <div className="capitalize">
              {/* <h3 className="font-semibold text-gray-700">{name}</h3> */}
              <p className="text-blue-600 flex flex-col gap-2">
                {name.map((singleName, index) => {
                  return (
                    <span
                      key={index}
                      className="text-base sm:text-lg font-medium"
                    >
                      {singleName}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="p-4 flex items-center space-x-6">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormalCard;

/*

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

*/
