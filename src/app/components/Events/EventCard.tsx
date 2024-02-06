import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
interface eventcard {
  imageUrl: string;
  eventName: string;
  eventDescription: string;
  collabWith: collab[];
  date: string;
  time: string;
  venue: string;
  registrationUrl: string;
  i: number;
}

interface collab {
  name: string;
  url: string;
}

const cardReveal = {
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

const EventCard = ({
  imageUrl,
  eventName,
  eventDescription,
  collabWith,
  date,
  time,
  venue,
  registrationUrl,
  i,
}: eventcard) => {
  return (
    <motion.div
      variants={cardReveal}
      initial="initial"
      animate={"open"}
      viewport={{ once: true }}
      exit="closed"
      custom={i}
      className="flex max-h-screen items-center justify-center my-4"
    >
      <div className="mx-auto px-5">
        <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md pb-6">
          <img
            className="w-full rounded-lg object-cover object-center"
            src={imageUrl}
            alt={eventName}
          />
          <div>
            <div className="my-3 flex items-center justify-between p-4">
              <p className="font-bold text-gray-500">{eventName}</p>
            </div>
            <div className="my-2 px-4 flex items-center justify-around gap-4">
              <p className="rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-white">
                {time}
              </p>
              <p className="rounded-full bg-gray-200 px-4 py-2 text-xs font-semibold text-gray-600">
                {date}
              </p>
            </div>
            <div className="my-2 p-4">
              <p className="text-sm font-medium text-gray-500 text-justify">
                {eventDescription}
              </p>
            </div>
            <div className="my-2 flex items-center space-x-4 px-4">
              <p className="rounded-full bg-gray-200 p-2 py-1 text-xs font-semibold text-gray-600">
                Venue:
              </p>
              <p className="text-sm font-semibold text-gray-500">{venue}</p>
            </div>
            <div className="my-2 flex items-center justify-between p-4">
              <p className="text-sm font-semibold text-gray-500">Collab:</p>
              <div className="space-x-2">
                {collabWith.map((collab: collab, index: number) => (
                  <Link
                    key={index}
                    href={collab.url}
                    className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-600"
                  >
                    {collab.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={registrationUrl}
              className="rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-white mx-4"
            >
              Register Link
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
