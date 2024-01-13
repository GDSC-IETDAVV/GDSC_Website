// import Image from "next/image";
"use client";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { useAppState } from "@/utils/appStateContext";
import { useScrollBlock } from "@/utils/useScrollBlock";
import Hero from "./components/Hero";
import Communities from "./components/Communities";
import Footer from "./components/Footer";
export default function Home() {
  const { isOpen, setIsOpen } = useAppState();
  const [blockScroll, allowScroll] = useScrollBlock();
  isOpen ? blockScroll() : allowScroll();
  return (
    <main
      className={
        "flex flex-col items-center w-screen px-12 xl:px-60 sm:gap-[40vh] gap-[10vh] scroll-smooth"
      }
    >
      <Header />
      <AnimatePresence mode="wait">{isOpen && <Navbar />}</AnimatePresence>
      <Hero />
      <Communities />
      <Footer />
    </main>
  );
}
