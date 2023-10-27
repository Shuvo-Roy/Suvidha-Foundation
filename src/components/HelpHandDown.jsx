import React from "react";
import { FiUsers } from "react-icons/fi";
import { FaRegHandshake, FaTree } from "react-icons/fa";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

import suvidha from "../assets/about.jpg";
export default function HelpHandDown() {
  return (
    <div className="flex sm:flex-col lg:flex-row items-center justify-evenly gap-8">
      <div className="">
        <h1 className="text-yellow text-4xl">We are helping hands On</h1>
        <p className="text-slate text-lg">Suvidha Mahila Mandal is a non-profit organization.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 mt-4">
          <div className="flex flex-row items-center text-2xl gap-4">
            <div>
              <FiUsers className="h-20 w-20 text-yellow"/>
            </div>
            <div className="h-full w-1 bg-yellow"></div>
            <div>
              <p className="text-4xl text-yellow">
                3 L<sup>+</sup>
              </p>
              <h1>Volunteers</h1>
            </div>
          </div>

          <div className="flex flex-row items-center text-2xl gap-4">
            <div>
              <BsGlobeAsiaAustralia className="h-20 w-20 text-sky"/>
            </div>
            <div className="h-full w-1 bg-yellow"></div>
            <div>
              <p className="text-4xl text-sky">
                15 <sup>+</sup>
              </p>
              <h1>Countries</h1>
            </div>
          </div>
          <div className="flex flex-row items-center text-2xl gap-4">
            <div>
              <FaRegHandshake className="h-20 w-20 text-megenta"/>
            </div>
            <div className="h-full w-1 bg-yellow"></div>
            <div>
              <p className="text-4xl text-megenta">
                1 Cr<sup>+</sup>
              </p>
              <h1>Internship Goal</h1>
            </div>
          </div>
          <div className="flex flex-row items-center text-2xl gap-4">
            <div>
              <FaTree className="h-20 w-20 text-red"/>
            </div>
            <div className="h-full w-1 bg-yellow"></div>
            <div>
              <p className="text-4xl text-red">
                54 L<sup>+</sup>
              </p>
              <h1>Trees Planted</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={suvidha} alt="suvidha" className="h-96 w-96" />
      </div>
    </div>
  );
}
