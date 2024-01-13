"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
const PrimaryButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={
        "border rounded-3xl px-4 py-1 border-black " +
        (isHovered ? "bg-black text-white" : "")
      }
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="flex flex-row gap-2 items-center justify-center sm:justify-between">
        <div className="uppercase px-2 font-medium">Connect with us</div>
        {isHovered ? (
          <div>
            <Image
              src={"/arrow-right-white.svg"}
              width={18}
              height={18}
              alt="arrow"
            />
          </div>
        ) : (
          <div>
            <Image
              src={"/arrow-right.svg"}
              width={18}
              height={18}
              alt="arrow"
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default PrimaryButton;
