"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
        <Link href="https://chat.whatsapp.com/CcTjDYXNfQMEoLUHzB3hwa">
          <div className="uppercase px-2 font-medium">Connect with us</div>
        </Link>
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
