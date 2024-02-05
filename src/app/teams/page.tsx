"use client";
import React from "react";
import Teams from "../components/Teams/Teams";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useAppState } from "@/utils/appStateContext";
import { useScrollBlock } from "@/utils/useScrollBlock";
const Event = () => {
  const { isOpen, setIsOpen } = useAppState();
  const [blockScroll, allowScroll] = useScrollBlock();
  isOpen ? blockScroll() : allowScroll();
  return (
    <div className="flex flex-col items-center gap-24 px-12 xl:px-60">
      <Header />
      <AnimatePresence mode="wait">{isOpen && <Navbar />}</AnimatePresence>
      <Teams />
      <Footer />
    </div>
  );
};

export default Event;
