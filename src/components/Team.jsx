import React from "react";
import team from "../assets/Team/Team";

import {FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter} from 'react-icons/fa6'


export default function Team() {
  return (
    <div className="w-5/6 m-auto">
      <div className="mb-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-yellow text-4xl">Testimonial</h1>
          <p className="text-slate text-5xl">
            What people are talking about our charity activities
          </p>
        </div>
        <div className="w-full bg-gray-100 px-10 pt-10">
          <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            
            {
              team.map((team,index)=>(
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5" key={index}>
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={team.img}
                        alt={team.name}
                        className="rounded-full object-cover h-full w-full border-4 border-sky shadow-sky"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1">
                    {team.name}
                    </h1>
                    <p className="text-gray-800 text-sm text-center">
                      {team.position}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="#" className="mx-5 text-2xl text-slate">
                        <FaXTwitter/>
                      </a>
                      <a href="#" className="mx-5 text-2xl text-sky">
                        <FaFacebookF/>
                      </a>
                      <a href="#" className="mx-5 text-2xl text-sky">
                        <FaLinkedinIn/>
                      </a>
                      <a href="#" className="mx-5 text-2xl text-red">
                        <FaInstagram/>
                      </a>
                    </div>
                  </div>
                </div></div>
              ))
            }
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
