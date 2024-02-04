import { useState } from 'react'

interface techstack {
    id: number,
    mentorName?: string,
    mentorImage?: string,
    title: string,
    tags?: string[],
    selected: boolean,
    setSelected: () => void,
    description?: string
}

const TechStack = () => {
    const [selected, setSelected] = useState(0);
    const techStack = [
        {
            id: 1,
            mentorName: 'Mohit & Kanishk',
            mentorImage: 'https://landingfoliocom.imgix.net/store/components/1652856861523-922e8394-0004-4975-bcba-c634f2ed271e.png?&q=75&auto=format',
            title: 'Full-Stack Development',
            tags: ['React', 'Node', 'Express'],
            selected: selected === 1,
            setSelected: () => setSelected(1),
            description: 'Full-stack development refers to the development of both client side & server side of web application. Full-stack web developers have the ability to design complete web application and websites.'
        },
        {
            id: 2,
            mentorName: 'Daksh Sahani',
            mentorImage: 'https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Competitive Programming',
            tags: ['CP', 'DSA',, 'Data Structures'],
            selected: selected === 2,
            setSelected: () => setSelected(2),
            description: 'Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Contestants are referred to as sport programmers.'
        },
        {
            id: 3,
            mentorName: 'Mustafa Azad',
            mentorImage: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cloud Development',
            tags: ['AWS', 'GCP', 'Azure'],
            selected: selected === 3,
            setSelected: () => setSelected(3),
            description: 'Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.'
        },
        {
            id: 4,
            mentorName: 'Ibrahim Saify',
            mentorImage: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cyber Security',
            tags: ['Hacking', 'Bug Bounty', 'Security'],
            selected: selected === 4,
            setSelected: () => setSelected(4),
            description: 'Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It is also known as information technology security or electronic information security.'
        },
        {
            id: 5,
            title: 'Tech Stack',
            description: "We're built different, so we build different. Our mission is to empower future developers by bringing students passionate about technology together and helping them grow their skills in tech, regardless of background."
        },
        {
            id: 6,
            mentorName: 'Insiya Husain',
            mentorImage: 'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'App Development',
            tags: ['React Native', 'Android', 'iOS'],
            selected: selected === 6,
            setSelected: () => setSelected(6),
            description: 'App development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones.'
        },
        {
            id: 7,
            mentorName: 'Mohit & Mustafa',
            mentorImage: 'https://images.unsplash.com/photo-1639322537138-5e513100b36e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Blockchain Development',
            tags: ['Solidity', 'Web3.js', 'Ethereum'],
            selected: selected === 7,
            setSelected: () => setSelected(7),
            description: 'Blockchain development is the process of creating and designing blockchain networks or DApps, writing smart contracts and developing blockchain-based applications for businesses or individuals.'
        },
        {
            id: 8,
            mentorName: 'Anuj Malviya',
            mentorImage: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Machine Learning',
            tags: ['Python', 'Tensorflow', 'OpenCV'],
            selected: selected === 8,
            setSelected: () => setSelected(8),
            description: 'Machine learning is the study of computer algorithms that improve automatically through experience and by the use of data. It is seen as a subset of artificial intelligence.'
        },
        {
            id: 9,
            mentorName: 'Tanmay Bhadviya',
            mentorImage: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'UI/UX Design',
            tags: ['Figma', 'XD', 'Illustrator'],
            selected: selected === 9,
            setSelected: () => setSelected(9),
            description: 'User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable.'
        }
    ] as techstack[];
  return (
    <div className='mb-20'>
        <div className="grid grid-cols-3 gap-4 font-noto">
            {techStack.map((item) => {
                if (item.id === 5) {
                    const descriptionParts = selected === 0 ? item.description?.split('. ') : techStack[selected-1].description?.split('. ');
                    const firstSentence = descriptionParts?.[0] || '';
                    const restDescription = descriptionParts?.slice(1).join('. ') || '';
                    return (
                    <div key={item.id} className="flex flex-col justify-center border w-full h-[400px] border-brand-blue rounded-[10px] p-6">
                        <img src="/gdscLogoOnly.svg" alt={selected === 0 ? item.title : techStack[selected-1].title} className="w-14 h-10 mb-4"/>
                        <h1 className="text-5xl font-bold text-brand-grey mb-6">{selected === 0 ? item.title : techStack[selected-1].title}</h1>
                        <p className="leading-8 text-justify font-semibold text-brand-grey mb-6"> <span className="font-extrabold">{firstSentence}</span> {restDescription}</p>
                    </div>
                )}
                return (
                    <div key={item.id} className="w-80 h-72 shadowTechStackCard mx-auto cursor-pointer my-auto" onClick={item.setSelected}>
                    <img src={item.mentorImage} alt={item.title} className="w-full h-2/4 rounded-t-xl"/>
                    <div className="p-4 flex items-center space-x-2 border-b border-[#E4E4E7]">
                        {/* <img src="/mustafa.png" alt={item.mentorName} className="rounded-full h-9 w-9"/> */}
                        <div className="capitalize">
                            <h3 className="font-semibold text-gray-700">{item.title}</h3>
                            <p className="text-blue-600">{item.mentorName}</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-center space-x-6">
                        {item.tags?.map((tag, index) => (
                            <span key={index} className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-md">{tag}</span>
                        ))}
                    </div>
                </div>
                )
            }
            )}
        </div>
    </div>
  )
}

export default TechStack
