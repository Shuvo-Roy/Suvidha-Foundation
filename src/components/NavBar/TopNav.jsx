import React from "react";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { HiMail } from "react-icons/hi";

const TopNav = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-4 items-center text-2xl">
        <div className="flex flex-row gap-4 items-center">
          <BsTelephone className="text-yellow" />
          <span className="text-white">+91 7020044091</span>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <HiMail className="text-yellow"/>
          <span className="text-white">info@suvidhafoundationedutech.org</span>
        </div>
      </div>
      <div className="flex flex-row gap-8 text-2xl items-center">
        <BiLogoFacebook className="text-yellow" />
        <BiLogoLinkedin className="text-yellow" />
        <BsInstagram className="text-yellow" />
      </div>
    </div>
  );
};

export default TopNav;
