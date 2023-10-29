import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";
export default function Contact() {
  return (
    <div className="w-5/6 m-auto mb-8">
      <div>
        <div className="flex flex-col items-center justify-center m-4 p-4">
          <h1 className="text-yellow text-4xl p-4">Contact Us</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-yellow text-4xl">
            Suvidha Foundation
          </h1>
          <h1 className="text-yellow text-4xl">
          (Suvidha Mahila Mandal)
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex flex-row items-center justify-start gap-2 text-xl">
            <IoHomeOutline className="text-sky text-3xl" />
            Suvidha Mahila Mandal,
            <br />
            Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner
          </span>
          <span className="flex flex-row items-center justify-start gap-2 text-lg">
            <CiMobile1 className="text-yellow text-3xl" />
            +91 7020044091
          </span>
          <span className="flex flex-row items-center justify-start gap-2 text-lg">
            <CiMail className="text-sky text-3xl" />
            info@suvidhafoundationedutech.org
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <button className="flex flex-row items-center justify-center gap-2 text-3xl border border-yellow border-opacity-25 rounded-md px-4 py-2 hover:bg-yellow hover:bg-opacity-25 w-max"><GoPaperAirplane className="text-sky"/>Send Message</button>
      </div>
    </div>
  );
}
