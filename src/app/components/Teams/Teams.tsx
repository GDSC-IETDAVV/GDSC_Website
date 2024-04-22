import TeamCards from "./TeamCards";
import Image from "next/image";
import { faculty_advisor, mentors, leads } from "./data";

export default function Teams() {
  return (
    <>
      <div className="bg-white py-16 md:py-24 lg:py-32 pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8">
          <div className="space-y-10">
            <TeamCards people={faculty_advisor} title="Faculty Advisor" />
            <TeamCards people={mentors} title="Mentors" />
            <TeamCards people={leads} title="Leads" />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col flex-col items-center justify-center gap-2 lg:gap-6">
        <h2 className="text-xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3 w-max lg:w-max">
          Thanks Everyone
        </h2>
        <Image
          src={"/groupPhoto2.jpg"}
          alt="group-photo"
          sizes="(min-width: 768px) 50vw,
            (max-width: 768px) 100vw,
            100vw"
          width={1000}
          height={1000}
          className="rounded-lg"
        />
      </div>
    </>
  );
}
