import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  //load the data
  const galleryData = useLoaderData();
  //set the data
  useEffect(() => {
    setGallery(galleryData);
  }, [galleryData]);
  return (
    <div className="mt-8 mb-8">
      <div className="w-5/6 m-auto">
        <div className="flex flex-col items-center justify-center m-4 p-4">
          <h1 className="text-yellow text-4xl p-4">Events</h1>
          <p className="text-slate text-5xl">
          Our Charity Events: Celebrating Our Impact Together
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-around">
        {gallery.map((gallery,item)=>(
          <div className="flex flex-col items-center justify-center rounded-md overflow-hidden bg-sky bg-opacity-10" key={item}>
          <div className="">
            <img src={gallery.img} className="rounded-md p-1"/>
          </div>
          <div>
            <p className="text-3xl m-2 p-2">{gallery.name}</p>
          </div>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  );
}
