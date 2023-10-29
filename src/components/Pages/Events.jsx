import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Events() {
  const [gallery, setGallery] = useState([]);
  //load the data
  const galleryData = useLoaderData();
  //set the data
  useEffect(() => {
    setGallery(galleryData);
  }, [galleryData]);
  return (
    <div className="w-5/6 m-auto">
      <div className="mb-8">
        <div>
        <div className="flex flex-col items-center justify-center m-4 p-4">
          <h1 className="text-yellow text-4xl p-4">Our Gallery</h1>
          <p className="text-slate text-5xl">
            Moments of Impact: Capturing the Journey of Our NGO
          </p>
        </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-around">
          {gallery.map((gallery, item) => (
            <div
              className="flex flex-col rounded-md overflow-hidden bg-yellow bg-opacity-25"
              key={item}
            >
              <div className="">
                <img src={gallery.img} className="rounded-md" />
              </div>
              <div>
                <p className="text-3xl m-2 p-2 text-slate">{gallery.name}</p>
              </div>
              <div>
                <p className="text-xl m-2 p-2">{gallery.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
