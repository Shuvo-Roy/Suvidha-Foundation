import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const BottomNav = () => {
  let Links = [
    { name: "Events", link: "/events" },
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" },
    { name: "Apply For Internship", link: "/events" },
    { name: "Help Now", link: "/donations" },
  ];

  let [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <div>
        <Link to="/">
          <img src="/src/assets/SuvidhaLogo.png" className="h-5/6 w-9/12" />
        </Link>
      </div>
      <div className="cursor-pointer md:hidden border border-yellow rounded-md absolute right-14 top-9">
        {open ? (
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-yellow text-3xl m-2"
          />
        ) : (
          <AiOutlineMenu
            onClick={toggleMenu}
            className="text-yellow text-3xl m-2"
          />
        )}
      </div>
      <div
        className={`text-white md:flex md:items-center transition-transform ease-in-out duration-500 ${open ? ""  : "hidden" }`}
      >
        <ul className="flex md:items-center flex-col sm:flex-row gap-4 items-center justify-center ">
          {Links.map((link, index) => (
            <li
              className="border rounded border-yellow px-4 py-2 hover:text-yellow cursor-pointer"
              key={index}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
