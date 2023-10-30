import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate">
      <div className="grid grid-rows-1 sm:grid-rows-1 lg:grid-cols-3 xl:grid-cols-3 text-white items-start justify-around gap-4 w-5/6 m-auto p-4">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-yellow text-xl">
              Suvidha Foundation (Suvidha Mahila Mandal)
            </h1>
          </div>
          <div className="flex flex-col">
            <span className="flex flex-row items-center justify-start gap-2 text-lg">
              <IoHomeOutline className="text-sky" />
              Suvidha Mahila Mandal,
              <br />
              Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner
            </span>
            <span className="flex flex-row items-center justify-start gap-2 text-lg">
              <CiMobile1 className="text-yellow" />
              +91 7020044091
            </span>
            <span className="flex flex-row items-center justify-start gap-2 text-lg">
              <CiMail className="text-sky" />
              info@suvidhafoundationedutech.org
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-yellow text-xl">Certificates</h1>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">
              <p>80G Certificate</p>
            </a>
            <a href="#">
              <p>12A Certificate</p>
            </a>
            <a href="#">
              <p>CSR Certificate</p>
            </a>
            <a href="#">
              <p>Suvidha Darpan Registration</p>
            </a>
            <a href="#">
              <p>Suvidha Pan Card</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-yellow text-xl">Useful Links</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Link to='/verify'>
              <p>Verify Your Certificate</p>
            </Link>
            <Link to='/privacy'>
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-5/6 m-auto">
        <div className="flex items-center justify-center">
          <a href="#" className="flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-2">
            <h1 className="text-yellow text-base">Suvidha Foundation (Suvidha Mahila Mandal)</h1>
            <p className="text-white">All Rights Reserved</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
