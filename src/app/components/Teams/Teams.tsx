import Image from "next/image";
import TeamCards from "./TeamCards";

const mentors = [
	{
		name: "Emma Dorsey",
		role: "Senior Developer",
		imageUrl:
			"https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
		bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
		xUrl: "#",
		linkedinUrl: "#",
	},
	{
		name: "Emma Dorsey",
		role: "Senior Developer",
		imageUrl:
			"https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
		bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
		xUrl: "#",
		linkedinUrl: "#",
	},
	// More people...
];

export default function Teams() {
	return (
		<div className="bg-white py-16 md:py-24 lg:py-32">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Meet Our Team
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600 text-justify pr-4">
						Welcome to the heart of our GDSC community, Our team is a diverse
						group of passionate individuals, each bringing unique skills and
						perspectives to the table. From coding wizards to creative thinkers,
						our members are united by a shared enthusiasm for technology and a
						commitment to fostering a vibrant learning environment. Get to know
						the faces behind the code – the leaders, mentors, and enthusiasts
						who make GDSC a hub for growth, knowledge-sharing, and friendship.
						Together, we&apos;re on a mission to explore, innovate, and empower
						the next generation of tech leaders. Meet the minds shaping the
						future of our community!
					</p>
				</div>
				<TeamCards people={mentors} title="Mentors" />
			</div>
		</div>
	);
}
