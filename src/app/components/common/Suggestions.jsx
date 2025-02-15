import Image from "next/image";
import React from "react";
import { Suggestion } from "@/app/Data/Suggestions";

const Suggestions = () => {
  return (
    <section className="p-4 h-screen overflow-y-auto -space-y-3 lg:block hidden w-[25%]">
      {/* profile shortcut */}
      <div className="flex items-center justify-between w-full gap-3 p-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full  ">
            <Image src="/profile.jpg" height={100} width={100} className="h-full w-full rounded-full object-cover " alt="profile" />
          </div>
          <div>
            <h1 className="text-sm">_EmilyDavis</h1>
            <h2 className="text-gray-500 text-sm">EmilyDavis</h2>
          </div>
        </div>
        <p className="text-blue-400 font-semibold text-sm cursor-pointer hover:text-black">Switch</p>
      </div>
      {/* suggested for you */}
      <div className="flex items-center justify-between w-full p-4">
        <p className="text-gray-500 font-semibold">Suggested for you</p>
        <p className="text-black cursor-pointer text-sm">See All</p>
      </div>
      {/* suggestions */}
      <div className="flex flex-col items-center -space-y-3">
        {Suggestion.map((suggestion, key) => (
          <div key={suggestion.id} className="flex items-center justify-between w-full gap-3 p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full  ">
                <Image src={suggestion.image} height={100} width={100} className="h-full w-full rounded-full object-cover " alt="profile" />
              </div>
              <div>
                <h1 className="text-sm">{suggestion.name}</h1>
                <h2 className="text-gray-500 text-sm">EmilyDavis</h2>
              </div>
            </div>
            <p className="text-blue-400 font-semibold text-sm cursor-pointer hover:text-black">Follow</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Suggestions;
