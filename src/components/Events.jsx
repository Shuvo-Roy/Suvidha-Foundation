import React from "react";
import suvidha from "../assets/about.jpg";
import events from "../assets/Events/Events";
export default function Events() {
  return (
    <div className="">
      <div className="w-5/6 m-auto h-3/6">
        <div className="pt-4">
          <h1 className="flex flex-col items-center justify-center text-yellow text-5xl">
            Featured Campaigns
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-8">

        {
          events.map((event,id)=><div className="flex flex-col gap-2 border border-yellow border-opacity-50 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300" key={id}>
            <div className="">
              <img
                src={event.img}
                className="text-yellow h-full  w-full rounded-lg"
              />
            </div>
            <div className="text-base flex flex-col items-center p-2">
              <h1 className="text-2xl">{event.name}</h1>
              <p className="leading-7 text-sm">{event.text}</p>
            </div>
          </div> )
        }
        </div>

      </div>
      <div className="flex items-center justify-center m-4 py-8">
        <button className="border border-yellow py-2 px-4 text-lg  cursor-pointer hover:bg-yellow">
          Show More
        </button>
      </div>
    </div>
  );
}
