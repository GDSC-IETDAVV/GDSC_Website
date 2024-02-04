'use client';
import React from "react";
import Events from "../components/Events/Events";
import Header from "../components/Header";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { useAppState } from "@/utils/appStateContext";

const Event = () => {
	const { isOpen } = useAppState();
	return (
	<>
	<Header />
      <AnimatePresence mode="wait">{isOpen && <Navbar />}</AnimatePresence>
	<Events />
	</>
	);
};

export default Event;
