import React from "react";
import EventCard from "./EventCard";
import { motion } from "framer-motion";
import { events } from "./eventInfo";
const Events = () => {
  const headingReveal = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5 * i,
      },
    }),
    closed: {
      y: "100%",
      opacity: 0,
    },
  };
  const latestEvents = events.slice(0).reverse();
  return (
    <div className="flex flex-col gap-4">
      {/* <h2 className="text-3xl font-bold text-gray-900 px-5">Events</h2> */}
      <div
        style={{ clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)` }}
        className="font-semibold text-2xl mb-6 md:text-3xl md:mb-0 pt-40"
      >
        <motion.div
          variants={headingReveal}
          initial="initial"
          whileInView={"open"}
          viewport={{ once: true }}
          exit="closed"
          custom={1}
        >
          Events
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {latestEvents.map((event, index) => (
          <EventCard key={index} {...event} i={index} />
        ))}
      </div>
    </div>
  );
};

export default Events;
