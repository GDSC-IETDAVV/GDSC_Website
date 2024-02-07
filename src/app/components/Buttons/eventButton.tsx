import Image from "next/image";
import React from "react";
import Link from "next/link";
const EventsButton = () => {
  return (
    <button className="bg-[#4285F4] text-white rounded-3xl px-4 py-2 ">
      <Link href="https://chat.whatsapp.com/CcTjDYXNfQMEoLUHzB3hwa">
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="uppercase p-0.5 font-medium text-sm sm:text-base">
            Join us for our upcoming events
          </div>
          <div>
            <Image
              src={"/arrow-right-white.svg"}
              width={18}
              height={18}
              alt="arrow"
            />
          </div>
        </div>
      </Link>
    </button>
  );
};

export default EventsButton;
