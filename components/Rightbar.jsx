import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className="fixed mr-4 gap-4 flex flex-col">
      <div className="bg-bgSoft px-5 py-4 rounded-md relative">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image
            src="/astronaut.png"
            alt="astronaut on a rocket"
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3>How to use the new version of the admin dashboard</h3>
          <span className="text-textSoft text-xs">
            Takes 4 minutes to learn
          </span>
          <p className="text-textSoft text-sm">
            Discover the revamped features and streamlined navigation of our new
            admin dashboard.
          </p>
          <button className="p-2 flex items-center gap-2 w-max bg-button text-text border-none rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Watch Now
          </button>
        </div>
      </div>

      <div className="bg-bgSoft px-5 py-4 rounded-md relative">
        {/* <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image
            src="/astronaut.png"
            alt="astronaut on a rocket"
            fill
            className="object-contain opacity-20"
          />
        </div> */}
        <div className="flex flex-col gap-6">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3>
            New server actions are availabe, partial pre-rendering is coming up!
          </h3>
          <span className="text-textSoft text-xs">Boost your productivity</span>
          <p className="text-textSoft text-sm">
            Elevate your server capabilities with our upcoming server actions
            and get ready for partial pre-rendering!
          </p>
          <button className="p-2 flex items-center gap-2 w-max bg-button text-text border-none rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
