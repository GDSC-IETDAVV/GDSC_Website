"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
const SecondaryButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={
        "border border-black rounded-3xl px-6 py-2 bg-black" +
        (isHovered ? "bg-white" : "")
      }
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Link href="https://gdsc.community.dev/events/details/developer-student-clubs-institute-of-engineering-and-technology-davv-indore-presents-moi-blockchain-dev-x-bootcamp/">
        <div
          className={
            "uppercase px-2 py-0.5 font-medium " +
            (isHovered ? "text-black" : "text-white")
          }
        >
          ONGOING EVENTS
        </div>
      </Link>
    </button>
  );
};

export default SecondaryButton;
