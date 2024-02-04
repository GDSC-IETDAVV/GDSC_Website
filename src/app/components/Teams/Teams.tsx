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
const leads= [
	{
		name: "Mustafa Azad",
		role: "Cloud Lead",
		imageUrl:
			"https://res.cloudinary.com/dhwbs4kk2/image/upload/v1707062810/myimage_vs1n4w.png",
		bio: "My journey encompasses over three years of comprehensive development experience. Proficient in a diverse tech stack including React.js, Vue.js, Next.js, Express.js, and Nest.js, I specialize in crafting robust solutions for varied projects—from Code Snippets Sharing Web App to efficient learning system web apps. My prowess extends to languages such as TypeScript and Python, coupled with adept database management skills in MySQL and PostgreSQL.",
		xUrl: "https://twitter.com/mustafaazad03",
		linkedinUrl: "https://www.linkedin.com/in/mustafaazad03/",
	},
	{
name:"Mohit Aasirwal",
role:"Full Stack and Blockchain Lead",
imageUrl:"https://avatars.githubusercontent.com/u/98788439?v=4",
bio:"A seasonal Full Stack developer and blockchain enthusiast with passion for astronomy. Fosters All round development and being practical in things. Encompasses rationality and is fan of science. Always available for quality experiences.",
xUrl:"https://www.x.com/AasirwalMohit",
linkedinUrl:"https://www.linkedin.com/in/mohit-aasirwal-478466223/"
},
	{
name:"Tanmay Bhadviya",
role:"Co-Lead",
imageUrl:"https://media.licdn.com/dms/image/D4D03AQHnUYKm57LANw/profile-displayphoto-shrink_200_200/0/1701607424425?e=1712188800&v=beta&t=7aakWDu3zv1csWDjFvhUpAMv9xes5-k09CvjhJOrHN4",
bio:"I have a open minded sense of growth and support, I love to volunteer and contribute to field of my interest and would like to explore more! I have ample of experience in ML, Coding with Python and C++, Graphic Designing, flutter, UI/UX. I share interests in Problem solving, Designing solutions and much more.",
xUrl:"https://twitter.com/TanmayBhadviya",
linkedinUrl:"https://www.linkedin.com/in/tanmaybhadviya/"
},{
    name: "Anuj Malviya",
    role: "AI & ML Lead",
    imageUrl:
        "https://media.licdn.com/dms/image/D4D03AQFBGUeKq2D_vg/profile-displayphoto-shrink_800_800/0/1681651732217?e=1712188800&v=beta&t=Yv-KYfsiCRmpKvHd26J-3-WiZ_AHIeEIpwfkwr4qJRM",
    bio: "Hi it's Anuj, I'm also MLSA of IET DAVV, navigating the exciting realms of technology. My passion lies in crafting innovative solutions through Python Automations, Machine Learning .In my spare time I like to practice Oragami, play chess,I’m always down for hearing about new projects, so feel free to drop me a line.",
    githubUrl: "https://github.com/Anuj-malviya0",
    linkedinUrl: "https://www.linkedin.com/in/anuj-malviya-a531b4204/",
},
	{
    name: "Rishabh Patel",
    role: "DSA and CP Lead",
    imageUrl: "https://i.imgur.com/1c94VR0.jpeg", 
    bio: "I am a Competitive Programmer and MERN stack developer . My expertise lies in leveraging TypeScript, Next.js, and more to craft innovative solutions for web applications. I thrive on solving complex algorithmic challenges, and my dedication to efficiency drives me to create robust and scalable code for diverse projects.",
    xUrl: "https://twitter.com/RishabhPatel08", 
    linkedinUrl: "https://www.linkedin.com/in/rishabh-patel01/",
},
{
    name: "Atharva Sugandhi",
    role: "DSA & CP Lead",
    imageUrl:
        "https://media.licdn.com/dms/image/D4D03AQFBGUeKq2D_vg/profile-displayphoto-shrink_800_800/0/1681651732217?e=1712188800&v=beta&t=Yv-KYfsiCRmpKvHd26J-3-WiZ_AHIeEIpwfkwr4qJRM",
    bio: "I'm Atharva Sugandhi, a Software Developer specializing in mastering Data Structures and Algorithms. My passion lies in tackling complex coding puzzles with efficiency. Alongside, I excel in crafting engaging web experiences using React.",
    githubUrl: "https://github.com/Atom-Atharva",
    linkedinUrl: "https://www.linkedin.com/in/atharva-sugandhi-391a4b225/",
},
{
		name: "Tushar Gupta",
		role: " Management Lead",
		imageUrl:
			"https://drive.google.com/file/d/1MlU7g9qXA-noGvZD4eDpSHiXlkC_Jfa4/view?usp=drivesdk",
		bio: "I am a MERN developer and and ML enthusiast also have keen interest in management field ",
		xUrl: "https://twitter.com/TusharrrGupTA",
		linkedinUrl: "https://www.linkedin.com/in/tushar-gupta-39048a224",
	}, 
{
         name: "Dev Sahani",
         role: "DSA & CP Lead",
         imageUrl: "https://drive.google.com/file/d/1T7DWXmtwANn-yWuyg-95h3h76kg1ATXF/view?usp=drivesdk",
         bio: "As the competitive programming lead at GDSC IET DAVV, I'm skilled in DSA and competitive programming, and I absolutely enjoy tackling problems. With MERN development skills and Next.js knowledge, I offer versatile expertise.",
				 linkedinUrl: "https://www.linkedin.com/in/dev-sahani/" ,
       githubUrl: "https://github.com/Dev-Sahani",
}, 
{
      name: "Daksh Sahani",
      role: "DSA & CP Lead",
      imageUrl: "https://drive.google.com/file/d/1SjQ3p5X6GgI3ldBb74FRAkAdY8Ch-uA9/view?usp=drivesdk",
      bio: "I am Daksh Sahani, DSA & CP Lead at GDSC. I have a passion for problem-solving and CP, utilizing DSA to tackle coding challenges. . Also, I'm a MERN developer, with hands-on experience in socket io and WebRTC Technology. Let's connect for anything related to programming or beyond!",
      linkedinUrl: "https://www.linkedin.com/in/daksh-sahani-2b6ab71b2/",
			githubUrl: "https://github.com/DakshSahani"
},
{
		name: "Insiya Husain",
		role: "Flutter and Content Lead",
		imageUrl:
			"https://media.licdn.com/dms/image/D4D03AQGlhoYawUnj6A/profile-displayphoto-shrink_800_800/0/1697568770960?e=1712188800&v=beta&t=4Fzq-WG2-pvhA1odzovYvlVISMY8LxqBs9Nv51OLzIQ",
		bio: "I love connecting the dots whether it's blending ideas from different fields, bringing people from diverse teams together, or combining applications from various industries. I enjoy being a Flutter Developer, plus I'm always exploring the exciting world of AI for new insights. I also enjoy sharing my thoughts through blogs, diving into the latest trends in robotics and AI. Beyond my technical skills, I firmly believe in the transformative power of self-development.",
		githubUrl: "https://github.com/Insiyaya",
		linkedinUrl: "https://www.linkedin.com/in/insiya-husain-89b501259?",
	},
	{
			name: "Arunima Agrawal",
			role: "Management Lead and Social Media Lead",
			imageUrl: 
				"https://media.licdn.com/dms/image/D4D03AQEToBJ4qX_AYQ/profile-displayphoto-shrink_800_800/0/1706719705628?e=1712188800&v=beta&t=dA13G24XB0eJ-RN2474gLkSxsqr8oYGXstxJGW0SoAA",
			bio: "My journey is defined by a commitment to excellence, innovation, and knowledge in the sphere of tech. I'm a web developer who loves creating cool things online. Currently, I'm exploring data science to learn some new tricks. I'm also good at managing projects to keep everything running smoothly.",
			githubUrl: "https://github.com/ArunimaAgrawal",
			linkedinUrl: "https://www.linkedin.com/in/arunima-agrawal-881479226",
		}
];


export default function Teams() {
	return (
		<div className="bg-white py-16 md:py-24 lg:py-32 pt-40">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<div className="fixed w-[36rem]">
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
				</div>
				<div className="space-y-10">
				<TeamCards people={mentors} title="Mentors" />
				<TeamCards people={leads} title="Leads" />
				</div>
			</div>
		</div>
	);
}
