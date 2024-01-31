"use client";
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { useAppState } from "@/utils/appStateContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Link from "next/link";
const Burger = () => {
  const { isOpen, setIsOpen } = useAppState();
  const menuButton = useRef(null);
  const navButtons = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth > 648) {
      gsap.to(menuButton.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(menuButton.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            if (window.innerWidth > 648) {
              gsap.to(menuButton.current, {
                scale: 0,
                duration: 0.25,
                ease: "power1.out",
              });
            }
          },
        },
      });
      gsap.to(navButtons.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(navButtons.current, {
              translateY: -100,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(navButtons.current, {
              translateY: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        },
      });
    }
  }, []);

  return (
    <div>
      <div className="hidden sm:flex sm:font-medium sm:gap-8" ref={navButtons}>
        <div className="flex relative p-4 group cursor-pointer">
          <Link href="/events">
            <p>Events</p>
          </Link>
          <div className="w-[6px] h-[6px] bg-black absolute rounded-full top-[80%] left-[50%] scale-0 -translate-x-[50%] transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:scale-100 group-hover:-translate-x-[50%]"></div>
        </div>
        <div className="flex relative p-4 group cursor-pointer">
          <Link href="#about" scroll={true}>
            <p>About</p>
          </Link>
          <div className="w-[6px] h-[6px] bg-black absolute rounded-full top-[80%] left-[50%] scale-0 -translate-x-[50%] transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:scale-100 group-hover:-translate-x-[50%]"></div>
        </div>
        <div className="flex relative p-4 group cursor-pointer">
          <Link href="#contact" scroll={true}>
            <p>Contact</p>
          </Link>
          <div className="w-[6px] h-[6px] bg-black absolute rounded-full top-[80%] left-[50%] scale-0 -translate-x-[50%] transition-transform duration-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:scale-100 group-hover:-translate-x-[50%]"></div>
        </div>
      </div>
      <button
        className="absolute scale-100 sm:scale-0 rounded-full top-[-24px] sm:top-2 right-0 sm:right-12 bg-transparent z-10"
        ref={menuButton}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div
          className={
            `relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 ` +
            (isOpen ? "" : "")
          }
        >
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={
                "bg-black h-[2px] w-7 transform transition-all duration-300 origin-left " +
                (isOpen ? "translate-x-10" : "")
              }
            ></div>
            <div
              className={
                "bg-black h-[2px] w-7 rounded transform transition-all duration-300 delay-75 " +
                (isOpen ? "translate-x-10" : "")
              }
            ></div>
            <div
              className={
                "bg-black h-[2px] w-7 transform transition-all duration-300 origin-left delay-150 " +
                (isOpen ? "translate-x-10" : "")
              }
            ></div>
            <div
              className={
                "absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 " +
                (isOpen ? "translate-x-0 w-12" : "")
              }
            >
              <div
                className={
                  "absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 " +
                  (isOpen ? "rotate-[45deg]" : "")
                }
              ></div>
              <div
                className={
                  "absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 " +
                  (isOpen ? "-rotate-45" : "")
                }
              ></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Burger;
