import React, { useState, useEffect } from "react";
import {
  Moi,
  Moi2,
  techUnleash,
  techUnleash2,
  felicitation,
  vaibhavSir,
  flutter,
  uiux,
} from "./data";
import Image from "next/image";
import styles from "./page.module.scss";
import { useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { headingReveal } from "./animations";
import { occasions } from "./constants";
import Link from "next/link";

interface image {
  kind: string;
  mimeType: string;
  id: string;
  name: string;
}

const Gallery = () => {
  // For fetching images
  const [imageData, setImageData] = useState<image[] | null>(null);
  // uniquely identify all the planes using refs
  const plane1Ref = useRef<HTMLDivElement>(null);
  const plane2Ref = useRef<HTMLDivElement>(null);
  const plane3Ref = useRef<HTMLDivElement>(null);
  const controlSpeed = 0.007; // a custom value to adjust animations
  let xF = 0 as number; // initially force on X and Y are set to 0
  let yF = 0 as number;
  let animationFrameRequest: number | null = null; // Animation frame request set to null at the start
  const ease = 0.08; // 8% easing constant
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { movementX, movementY } = e;
    xF += movementX * controlSpeed; // when mouse moves, set the force on x to "movementX" times the control constant
    yF += movementY * controlSpeed;
    if (!animationFrameRequest) {
      // To get out of the initial condition, this condition would be set only for the first time.
      animationFrameRequest = requestAnimationFrame(animations);
    }
  };
  const linearInterpolationFunction = (
    start: number,
    end: number,
    factor: number
  ) => start * (1 - factor) + end * factor; // linear interpolation function (from the internet)
  const animations = () => {
    xF = linearInterpolationFunction(xF, 0, ease); // linearly reduce the value of force on X starting from the initial amount towards 0 at a rate of 8% (0.08)
    yF = linearInterpolationFunction(yF, 0, ease); // linearly reduce the value of force on Y starting from the initial amount towards 0 at a rate of 8% (0.08)
    // setting x and y coordinates of the planes respectively
    gsap.set(plane1Ref.current, {
      x: `+=${xF}`,
      y: `+=${yF}`,
    });
    gsap.set(plane2Ref.current, {
      x: `+=${xF * 0.5}`,
      y: `+=${yF * 0.5}`,
    });
    gsap.set(plane3Ref.current, {
      x: `+=${xF * 0.25}`,
      y: `+=${yF * 0.25}`,
    });
    // Since our force on X (or Y) never touches 0, we can optimise the code
    // Absolute since we can move the mouse in both directions
    if (Math.abs(xF) < 0.01) xF = 0;
    if (Math.abs(yF) < 0.01) yF = 0;
    if (xF > 0 || yF > 0) requestAnimationFrame(animations); // run recursively
    else {
      if (animationFrameRequest) cancelAnimationFrame(animationFrameRequest);
      animationFrameRequest = null;
    }
  };

  useEffect(() => {
    // After 5 seconds, set opacity to 1 (fully visible)
    const timeout = setTimeout(() => {
      if (plane1Ref.current) {
        plane1Ref.current.style.opacity = "1";
      }
      if (plane2Ref.current) {
        plane2Ref.current.style.opacity = "1";
      }
      if (plane3Ref.current) {
        plane3Ref.current.style.opacity = "1";
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    // Main Container
    <div className="flex flex-col w-full h-full justify-center items-center mt-24">
      <div
        className="w-screen h-screen flex justify-center"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          handleMouseMove(e);
        }}
      >
        <div className="w-full h-[85%] overflow-visible relative">
          {/* Plane 1 */}
          <div
            className={`z-10 w-full h-full absolute ${styles.plane} hidden sm:block`}
            ref={plane1Ref}
            style={{ opacity: 0, transition: "opacity 2s ease-in-out" }}
          >
            <Image
              alt="img1"
              src={techUnleash}
              width={220}
              className="absolute"
            />
            <Image alt="img1" src={Moi2} width={300} className="absolute" />
            <Image alt="img1" src={Moi} width={260} className="absolute" />
          </div>
          {/* Plane 2 */}
          <div
            className={`z-5 w-full h-full absolute ${styles.plane} hidden md:block`}
            ref={plane2Ref}
            style={{ opacity: 0, transition: "opacity 2s ease-in-out" }}
          >
            <Image
              alt="img1"
              src={techUnleash2}
              width={200}
              className="absolute"
            />
            <Image alt="img1" src={flutter} width={180} className="absolute" />
            <Image
              alt="img1"
              src={felicitation}
              width={300}
              className="absolute"
            />
          </div>
          {/* Plane 3 */}
          <div
            className={`-z-20 w-full h-full absolute ${styles.plane} hidden lg:block`}
            ref={plane3Ref}
            style={{ opacity: 0, transition: "opacity 2s ease-in-out" }}
          >
            <Image
              alt="img1"
              src={vaibhavSir}
              width={280}
              className="absolute"
            />
            <Image alt="img1" src={uiux} width={220} className="absolute" />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="font-medium lg:font-semibold text-6xl lg:text-8xl z-0"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <motion.div
                variants={headingReveal}
                initial="initial"
                animate="open"
                exit="closed"
                custom={0.5}
              >
                Gallery
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:px-60 flex flex-col items-center lg:items-start gap-10">
        <div className="font-medium text-2xl md:text-3xl">
          Our Memorable Occasions
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-12 items-center justify-between w-full">
          {occasions.map((singleOccasion, index) => {
            const { name, src, path, folderID } = singleOccasion;
            return (
              <Link
                href={`/gallery${path}?folderID=${folderID}&name=${name}`}
                key={name}
              >
                <div
                  className="p-5 shadow-md rounded-md duration-150 hover:scale-105 hover:shadow-md"
                  style={{ height: "350px" }}
                >
                  <div className="h-[250px] w-[280px] relative">
                    <Image
                      loader={() => src}
                      src={src}
                      // layout="fill"
                      // objectFit="cover"
                      fill={true}
                      style={{ objectFit: "cover" }}
                      alt="occasion-image"
                      unoptimized={true}
                    />
                  </div>
                  <div className="text-xl py-5 font-medium w-max">{name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
