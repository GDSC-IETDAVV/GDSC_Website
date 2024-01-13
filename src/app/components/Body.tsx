"use client";
import React from "react";
import { AppStateProvider } from "@/utils/appStateContext";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <AppStateProvider>
      <body className={poppins.className}>{children}</body>
    </AppStateProvider>
  );
};

export default Body;
