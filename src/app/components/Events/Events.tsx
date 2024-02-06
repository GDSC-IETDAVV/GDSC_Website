import React from "react";
import EventCard from "./EventCard";
import { motion } from "framer-motion";
const Events = () => {
  const events = [
    {
      imageUrl:
        "https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707237226/Cod-A-Thon_id4mpp.jpg",
      eventName: "COD-A-THON",
      eventDescription:
        "GDSC IET DAVV'S very own competitive programming competition which happened last year made students learn, grow and realize that 'Winning isn't everything, it's only thing'",
      collabWith: [],
      date: "Apr 7, 2023",
      time: "1:00 PM",
      venue: "IET DAVV",
      registrationUrl: "REGISTRATION_URL_1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707237227/TechUnleash_jakmx4.jpg",
      eventName: "TechUnleash",
      eventDescription:
        "With the programming running in our veins and codes beating in our hearts, We the team GDSC IET DAVV encouraged students to join our club and gain knowledge about programming through our idea 'TechUnleash'.",
      collabWith: [],
      date: "Aug 18, 2023",
      time: "3:00 -4:00 PM",
      venue: "M Block Auditorium, IET DAVV",
      registrationUrl: "http://bit.ly/gdsctechunleash",
    },
    {
      imageUrl: "https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707237226/Cloud_mcuhe8.jpg",
      eventName: "Google Cloud Facilitator Program 2023",
      eventDescription:
        "We provided a program to help students boost their career in cloud computing and AI. GDSC IET DAVV also provided access to full-fledged courses provided by Google, with many surprises and goodies!",
      collabWith: [],
      date: "Aug 31, 2023",
      time: "2:00 PM",
      venue: "VENUE_3",
      registrationUrl: "https://forms.gle/Bjtora7GyiKFtZCY7",
    },
    {
      imageUrl: "https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707237226/Code_Quest_qdiyfy.jpg",
      eventName: "CodeQuest 2023",
      eventDescription:
        "To let our students flex those coding muscles, we brought a coding contest. And guess what? It turned out to be an epic saga of coding events which gave us memories to remember and learning to never forget!",
      collabWith: [],
      date: "Sept 21, 2023",
      time: "6:00 - 7:00 PM",
      venue: "VENUE_4",
      registrationUrl: "https://forms.gle/73iTZW591cAuyYd69",
    },
    {
      imageUrl: "https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707237227/Invento_x18oah.jpg",
      eventName: "GDSC Volunteer meet-up",
      eventDescription:
        "We believe that if there's a name it's because of the family. We couldn't be more grateful to our volunteers for always being there with us. And We showed them our respect and thankfulness by organizing a meet up with them. We had fun, made memories, and promised to stay and grow with GDSC IET DAVV.",
      collabWith: [],
      date: "Sept 22, 2023",
      time: "2:00 PM",
      venue: "Outside Library, IET DAVV",
      registrationUrl: "https://forms.gle/N9zbd5oR2MAKr9YJ8",
    },
    {
      imageUrl: "https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707237226/Hacktober_Fest_sszqj6.jpg",
      eventName: "Hacktoberfest",
      eventDescription:
        "In collaboration with GDSC IIPS and GDSC SDSF We GDSC IET DAVV successfully organized an event which sent for learners to contribute to open source projects and enhance their coding skills!",
      collabWith: [
        {
          name: "GDSC IIPS",
          url: "https://gdsc.community.dev/iips-international-institute-of-professional-studies-davv-indore/",
        },
        {
          name: "GDSC SDSF",
          url: "https://gdsc.community.dev/school-of-data-science-and-forecasting-indore/",
        },
      ],
      date: "Oct 7, 2023",
      time: "12:00PM",
      venue: "Google Meet",
      registrationUrl: "https://gdsc.community.dev/j/skgky5g9nta7w/",
    },
    {
      imageUrl: "https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707237226/Code_Series_vl5xap.jpg",
      eventName: "CODE SERIES",
      eventDescription:
        "30 Day's coding session which made all of us say code like a pro, compile like a dope. Our students believed in their own selves and stood their grounds to achieve this challenge given by us. It was definitely a Proud moment for us to see our students believe in their coding ability!!",
      collabWith: [],
      date: "Dec 10, 2023",
      time: "EVENT_TIME_7",
      venue: "Hackerrank",
      registrationUrl: "https://forms.gle/Uu6SepjLG6ns8faV7",
    },
  ];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard key={index} {...event} i={index} />
        ))}
      </div>
    </div>
  );
};

export default Events;
