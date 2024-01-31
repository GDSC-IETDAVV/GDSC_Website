import React from "react";
import EventCard from "./EventCard";

const Events = () => {
	const events = [
		{
			imageUrl: "https://gdscjgec.github.io/assets/img/events/sample.png",
			eventName: "COD-A-THON",
			eventDescription:
				"GDSC IET DAVV'S very own competitive programming competition which happened last year made students learn, grow and realize that 'Winning isn't everything, it's only thing'",
			collabWith: [],
			date: "EVENT_DATE_1",
			time: "EVENT_TIME_1",
			venue: "VENUE_1",
			registrationUrl: "REGISTRATION_URL_1",
		},
		{
			imageUrl: "https://gdscjgec.github.io/assets/img/events/sample.png",
			eventName: "TechUnleash",
			eventDescription:
				"With the programming running in our veins and codes beating in our hearts, We the team GDSC IET DAVV encouraged students to join our club and gain knowledge about programming through our idea 'TechUnleash'.",
			collabWith: [],
			date: "EVENT_DATE_2",
			time: "EVENT_TIME_2",
			venue: "VENUE_2",
			registrationUrl: "REGISTRATION_URL_2",
		},
		{
			imageUrl: "https://gdscjgec.github.io/assets/img/events/sample.png",
			eventName: "Google cloud facilitator program 2023",
			eventDescription:
				"We provided a program to help students boost their career in cloud computing and AI. GDSC IET DAVV also provided access to full-fledged courses provided by Google, with many surprises and goodies!",
			collabWith: [],
			date: "EVENT_DATE_3",
			time: "EVENT_TIME_3",
			venue: "VENUE_3",
			registrationUrl: "REGISTRATION_URL_3",
		},
		{
			imageUrl: "https://gdscjgec.github.io/assets/img/events/sample.png",
			eventName: "CodeQuest 2023",
			eventDescription:
				"To let our students flex those coding muscles, we brought a coding contest. And guess what? It turned out to be an epic saga of coding events which gave us memories to remember and learning to never forget!",
			collabWith: [],
			date: "EVENT_DATE_4",
			time: "EVENT_TIME_4",
			venue: "VENUE_4",
			registrationUrl: "REGISTRATION_URL_4",
		},
		{
			imageUrl: "https://gdscjgec.github.io/assets/img/events/sample.png",
			eventName: "GDSC Volunteer meet-up",
			eventDescription:
				"We believe that if there's a name it's because of the family. We couldn't be more grateful to our volunteers for always being there with us. And We showed them our respect and thankfulness by organizing a meet up with them. We had fun, made memories, and promised to stay and grow with GDSC IET DAVV.",
			collabWith: [],
			date: "EVENT_DATE_5",
			time: "EVENT_TIME_5",
			venue: "VENUE_5",
			registrationUrl: "REGISTRATION_URL_5",
		},
		{
			imageUrl: "https://gdscjgec.github.io/assets/img/events/sample.png",
			eventName: "Hacktoberfest",
			eventDescription:
				"In collaboration with GDSC IIPS and GDSC SDSF We GDSC IET DAVV successfully organized an event which sent for learners to contribute to open source projects and enhance their coding skills!",
			collabWith: [
				{
					name: "GDSC IIPS",
					url: "URL_TO_GDSC_IIPS",
				},
				{
					name: "GDSC SDSF",
					url: "URL_TO_GDSC_SDSF",
				},
			],
			date: "EVENT_DATE_6",
			time: "EVENT_TIME_6",
			venue: "VENUE_6",
			registrationUrl: "REGISTRATION_URL_6",
		},
		{
			imageUrl: "https://gdscjgec.github.io/assets/img/events/sample.png",
			eventName: "CODE SERIES",
			eventDescription:
				"30 Day's coding session which made all of us say code like a pro, compile like a dope. Our students believed in their own selves and stood their grounds to achieve this challenge given by us. It was definitely a Proud moment for us to see our students believe in their coding ability!!",
			collabWith: [],
			date: "EVENT_DATE_7",
			time: "EVENT_TIME_7",
			venue: "VENUE_7",
			registrationUrl: "REGISTRATION_URL_7",
		},
	];
	return (
		<>
			<h2 className="text-3xl font-bold text-gray-900 mt-4 px-20">Events</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{events.map((event, index) => (
					<EventCard key={index} {...event} />
				))}
			</div>
		</>
	);
};

export default Events;
