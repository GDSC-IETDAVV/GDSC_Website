'use client';
import React from "react";
import Teams from "../components/Teams/Teams";
import Header from "../components/Header";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import { useAppState } from "@/utils/appStateContext";

const Team = () => {
	const { isOpen } = useAppState();
	return (
		<>
		<Header />
      <AnimatePresence mode="wait">{isOpen && <Navbar />}</AnimatePresence>
			<Teams />
		</>
	);
};

export default Team;
