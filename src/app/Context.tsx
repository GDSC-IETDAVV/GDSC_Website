"use client";
import React from "react";
import { AppStateProvider } from "../utils/appStateContext";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
interface contextProps {
  props: React.ReactNode;
}
const Context = ({ props }: contextProps) => {
  return (
    <AppStateProvider>
      <body className={poppins.className}>
        {props}
        <Analytics />
      </body>
    </AppStateProvider>
  );
};

export default Context;
