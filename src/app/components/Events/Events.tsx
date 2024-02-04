import React from "react";
import EventCard from "./EventCard";
import { motion } from "framer-motion";
const Events = () => {
  const events = [
    {
      "imageUrl": "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-15/338914928_605667961141642_6142937004483739776_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=eNFQhdBIFSAAX8VdXRf&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3MjE4NzMzNDk5MjcwNjA0Mg%3D%3D.2-ccb7-5&oh=00_AfAi6dQw0V3t040w7YQwG9vCLJODDmF9VHexD8lkPOyZ_Q&oe=65BFCD15&_nc_sid=b41fef",
      "eventName": "COD-A-THON",
      "eventDescription": "GDSC IET DAVV'S very own competitive programming competition which happened last year made students learn, grow and realize that 'Winning isn't everything, it's only thing'",
      "collabWith": [],
      "date": "April 7, 2023",
      "time": "EVENT_TIME_1",
      "venue": "VENUE_1",
      "registrationUrl": "REGISTRATION_URL_1"
    },
    {
      "imageUrl": "https://instagram.fbho1-4.fna.fbcdn.net/v/t51.2885-15/367437504_256265503939349_2033191662829496470_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fbho1-4.fna.fbcdn.net&_nc_cat=105&_nc_ohc=iiQ6p15FDuoAX9d-a2j&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzE2OTM0MTY5NTM3NTU4MDgwMw%3D%3D.2-ccb7-5&oh=00_AfD1cdsjaGL3Q_VViIdv1xY3n1Y-Uy3u4fwITwas2c6xWQ&oe=65C0C6AB&_nc_sid=b41fef",
      "eventName": "TechUnleash",
      "eventDescription": "With the programming running in our veins and codes beating in our hearts, We the team GDSC IET DAVV encouraged students to join our club and gain knowledge about programming through our idea 'TechUnleash'.",
      "collabWith": [],
      "date": "August 18, 2023",
      "time": "3:00 -4:00 PM",
      "venue": "M Block Auditorium, IET DAVV",
      "registrationUrl": "http://bit.ly/gdsctechunleash"
    },
    {
      "imageUrl": "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-15/371418579_1322772091960811_4185986814030058177_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=mRwfzXMo2dEAX9O1Ske&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzE4MDI2OTQ4NDkwMzUxNTI3MQ%3D%3D.2-ccb7-5&oh=00_AfAoMn2pbfgXUVNSIWlaksHxTIc297cI3JDqdbm9pVoygg&oe=65C22BA7&_nc_sid=b41fef",
      "eventName": "Google Cloud Facilitator Program 2023", 
      "eventDescription": "We provided a program to help students boost their career in cloud computing and AI. GDSC IET DAVV also provided access to full-fledged courses provided by Google, with many surprises and goodies!",
      "collabWith": [],
      "date": "August 31, 2023",
      "time": "EVENT_TIME_3",
      "venue": "VENUE_3",
      "registrationUrl": "https://forms.gle/Bjtora7GyiKFtZCY7"
    },
    {
      "imageUrl": "https://instagram.fbho1-1.fna.fbcdn.net/v/t51.2885-15/379386778_332383305924607_31396196133864739_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fbho1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=bvPBEbtBt04AX_svEUG&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzE5NDc0MDEyODQwMzc1ODIzMw%3D%3D.2-ccb7-5&oh=00_AfAzO0yQEqNdN8JqGVGKw38q8y9iKQ_uYs3HeDMoAuMZww&oe=65C01A0E&_nc_sid=b41fef",
      "eventName": "CodeQuest 2023",
      "eventDescription": "To let our students flex those coding muscles, we brought a coding contest. And guess what? It turned out to be an epic saga of coding events which gave us memories to remember and learning to never forget!",
      "collabWith": [],
      "date": "September 21, 2023",
      "time": "6:00 - 7:00 PM",
      "venue": "VENUE_4",
      "registrationUrl": "https://forms.gle/73iTZW591cAuyYd69"
    },
    {
      "imageUrl": "URL_TO_IMAGE_5",
      "eventName": "GDSC Volunteer meet-up",
      "eventDescription": "We believe that if there's a name it's because of the family. We couldn't be more grateful to our volunteers for always being there with us. And We showed them our respect and thankfulness by organizing a meet up with them. We had fun, made memories, and promised to stay and grow with GDSC IET DAVV.",
      "collabWith": [],
      "date": "September 22, 2023",
      "time": "2:00 PM",
      "venue": "Outside Library, IET DAVV",
      "registrationUrl": "https://forms.gle/N9zbd5oR2MAKr9YJ8"
    },
    {
      "imageUrl": "https://instagram.fbho1-2.fna.fbcdn.net/v/t51.2885-15/386387457_1443136846249221_8005438878321973709_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fbho1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=x_Rxc5XEyhEAX-DmX-y&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIwNjkyODk0MzA2MzIxMjUzMA%3D%3D.2-ccb7-5&oh=00_AfB8i8JM01YuqKGBVTm4GzuNTN_dXGf081f1W27UHnVWDg&oe=65C22A8C&_nc_sid=ee9879",
      "eventName": "Hacktoberfest",
      "eventDescription": "In collaboration with GDSC IIPS and GDSC SDSF We GDSC IET DAVV successfully organized an event which sent for learners to contribute to open source projects and enhance their coding skills!",
      "collabWith": [
        {
          "name": "GDSC IIPS",
          "url": "https://gdsc.community.dev/iips-international-institute-of-professional-studies-davv-indore/"
        },
        {
          "name": "GDSC SDSF",
          "url": "https://gdsc.community.dev/school-of-data-science-and-forecasting-indore/"
        }
      ],
      "date": "October 7, 2023",
      "time": "EVENT_TIME_6",
      "venue": "Google Meet",
      "registrationUrl": "https://gdsc.community.dev/j/skgky5g9nta7w/"
    },
    {
      "imageUrl": "https://instagram.fbho1-1.fna.fbcdn.net/v/t51.2885-15/400191592_7067596153262570_3167590708174003889_n.heic?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fbho1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=KMA4ULIIM10AX8XukcQ&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIzMTYxNTk4MDQ0MTU3OTYzNg%3D%3D.2-ccb7-5&oh=00_AfCBVjD5BB8RArwV-T25R2dVQjr0bTPBG2cad-DrTz_-JQ&oe=65C2675A&_nc_sid=ee9879",
      "eventName": "CODE SERIES",
      "eventDescription": "30 Day's coding session which made all of us say code like a pro, compile like a dope. Our students believed in their own selves and stood their grounds to achieve this challenge given by us. It was definitely a Proud moment for us to see our students believe in their coding ability!!",
      "collabWith": [],
      "date": "November 10 - December 10, 2023",
      "time": "EVENT_TIME_7",
      "venue": "Hackerrank",
      "registrationUrl": "https://forms.gle/Uu6SepjLG6ns8faV7"
    }
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
        className="font-semibold text-2xl mb-6 md:text-3xl md:mb-0 pt-40 px-12 xl:px-60"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-12 xl:px-60">
        {events.map((event, index) => (
          <EventCard key={index} {...event} i={index} />
        ))}
      </div>
    </div>
  );
};

export default Events;
