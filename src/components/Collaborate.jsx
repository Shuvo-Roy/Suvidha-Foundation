import React from "react";
import collab1 from "../assets/collab-1.jpg";
import collab2 from "../assets/collab-2.jpg";
export default function Collaborate() {
  return (
    <div className="w-5/6 m-auto">
      <div className="flex flex-col items-center justify-center m-auto">
      <div>
        <h1 className="flex flex-col items-center justify-center mt-8 text-3xl text-yellow gap-2">
          Collaborate With<span className="h-1 w-36 bg-yellow"></span>
        </h1>
        <p className="flex flex-col items-center justify-center mt-4 text-2xl text-slate gap-2">
          Empowering Change Together: Our Collaborative Initiatives
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <img src={collab1} alt="collaboration"  className="w-72 h-auto"/>
        <img src={collab2} alt="collaboration"  className="w-72 h-auto"/>
      </div>
    </div>
    </div>
    
  );
}
