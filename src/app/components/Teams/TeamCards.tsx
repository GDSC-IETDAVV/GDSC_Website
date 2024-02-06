import React from "react";
import Image from "next/image";
interface cardArray {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  xUrl?: string;
  linkedinUrl: string;
  githubUrl?: string;
}

interface CardProps {
  people: cardArray[];
  title: string;
}

const TeamCards: React.FC<CardProps> = ({ people, title }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
        {title}
      </h2>
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
      >
        {people.map((person) => (
          <li key={person.name}>
            <Image
              className="aspect-[1/1] w-full rounded-2xl object-cover object-center"
              src={person.imageUrl}
              alt={person.name}
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
              {person.name}
            </h3>
            <p className="text-base leading-7 text-gray-600">{person.role}</p>
            {/* <p className="mt-4 text-base leading-7 text-gray-600 text-justify">
							{person.bio}
						</p> */}
            <ul role="list" className="mt-6 flex gap-x-6 items-center">
              <li>
                <a
                  href={person.xUrl ? person.xUrl : person.githubUrl}
                  className="text-gray-400 hover:text-gray-500"
                >
                  {person.xUrl ? (
                    <>
                      <span className="sr-only">X</span>
                      <svg
                        className="h-6 w-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span className="sr-only">GitHub</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </>
                  )}
                </a>
              </li>
              <li>
                <a
                  href={person.linkedinUrl}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamCards;
