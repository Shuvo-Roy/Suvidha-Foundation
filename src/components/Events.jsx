import React from "react";
import suvidha from "../assets/about.jpg";

export default function Events() {
  return (
    <div className="bg-slate bg-opacity-5">
      <div className="mt-8 w-10/12 m-auto h-3/6">
        <h1 className="flex flex-col items-center justify-center text-yellow text-5xl">
          Featured Campaigns
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col gap-2 box-border m-auto border border-yellow border-opacity-10 rounded-lg overflow-hidden bg-slate bg-opacity-10">
            <div className="">
              <img
                src={suvidha}
                className="text-yellow h-80 w-full rounded-lg border"
              />
            </div>
            <div className="text-base flex flex-col items-center p-2">
              <h1 className="text-2xl">Healthy Food</h1>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 box-border m-auto border border-yellow border-opacity-10 rounded-lg overflow-hidden bg-slate bg-opacity-10">
            <div className="">
              <img
                src={suvidha}
                className="text-yellow h-80 w-full rounded-lg border"
              />
            </div>
            <div className="text-base flex flex-col items-center p-2">
              <h1 className="text-2xl">Healthy Food</h1>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 box-border m-auto border border-yellow border-opacity-10 rounded-lg overflow-hidden bg-slate bg-opacity-10">
            <div className="">
              <img
                src={suvidha}
                className="text-yellow h-80 w-full rounded-lg border"
              />
            </div>
            <div className="text-base flex flex-col items-center p-2">
              <h1 className="text-2xl">Healthy Food</h1>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 box-border m-auto border border-yellow border-opacity-10 rounded-lg overflow-hidden bg-slate bg-opacity-10">
            <div className="">
              <img
                src={suvidha}
                className="text-yellow h-80 w-full rounded-lg border"
              />
            </div>
            <div className="text-base flex flex-col items-center p-2">
              <h1 className="text-2xl">Healthy Food</h1>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 box-border m-auto border border-yellow border-opacity-10 rounded-lg overflow-hidden bg-slate bg-opacity-10">
            <div className="">
              <img
                src={suvidha}
                className="text-yellow h-80 w-full rounded-lg border"
              />
            </div>
            <div className="text-base flex flex-col items-center p-2">
              <h1 className="text-2xl">Healthy Food</h1>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 box-border m-auto border border-yellow border-opacity-10 rounded-lg overflow-hidden bg-slate bg-opacity-10">
            <div className="">
              <img
                src={suvidha}
                className="text-yellow h-80 w-full rounded-lg border"
              />
            </div>
            <div className="text-base flex flex-col items-center p-2">
              <h1 className="text-2xl">Healthy Food</h1>
              <p>
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-4">
        <button className="border border-yellow py-2 px-4 text-lg  cursor-pointer hover:bg-yellow">Show More</button>
      </div>
    </div>
  );
}
