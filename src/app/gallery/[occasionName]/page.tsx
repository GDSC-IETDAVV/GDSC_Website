"use client";
import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useAppState } from "@/utils/appStateContext";
import { useScrollBlock } from "@/utils/useScrollBlock";
import { useParams, useSearchParams } from "next/navigation";
import OccasionGallery from "@/app/components/Gallery/components/OccasionGallery";
const Page = () => {
  const { isOpen, setIsOpen } = useAppState();
  const [blockScroll, allowScroll] = useScrollBlock();
  isOpen ? blockScroll() : allowScroll();
  const params = useParams();
  const { occasionName } = params;
  const searchParams = useSearchParams();
  const folderID = searchParams.get("folderID");
  const name = searchParams.get("name") as string;
  return (
    <div className="flex flex-col items-center gap-24 px-12 xl:px-60">
      <Header />
      <AnimatePresence mode="wait">{isOpen && <Navbar />}</AnimatePresence>
      <OccasionGallery name={name} folderID={folderID} />
      <Footer />
    </div>
  );
};

export default Page;

/**
 *
 const params = useParams();
  const { occasionName } = params;
  return <div>Our Memories with {occasionName.toString().toUpperCase()}</div>;
 */
