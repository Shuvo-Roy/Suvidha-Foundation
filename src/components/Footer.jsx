import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiMail, CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const G_CER = "http://127.0.0.1:5173/files/80G_APROVAL.pdf";
const A_CER = "http://127.0.0.1:5173/files/12A_APPROVAL.pdf";
const CSR_CER = "http://127.0.0.1:5173/files/CSR.pdf";
const DARPAN_CER =
  "http://127.0.0.1:5173/files/suvidha_darpan_portal_registration.pdf";
const PAN_CER = "http://127.0.0.1:5173/files/suvidha_pan_card.pdf";

export default function Footer() {
  const downloadFile = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

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
            <p
              onClick={() => {
                downloadFile(G_CER);
              }}
             className="cursor-pointer hover:text-yellow">
              80G Certificate
            </p>
            <p
              onClick={() => {
                downloadFile(A_CER);
              }}
             className="cursor-pointer hover:text-yellow">
              12A Certificate
            </p>
            <p
              onClick={() => {
                downloadFile(CSR_CER);
              }}
             className="cursor-pointer hover:text-yellow">
              CSR Certificate
            </p>
            <p
              onClick={() => {
                downloadFile(DARPAN_CER);
              }}
             className="cursor-pointer hover:text-yellow">
              Suvidha Darpan Registration
            </p>
            <p
              onClick={() => {
                downloadFile(PAN_CER);
              }}
             className="cursor-pointer hover:text-yellow">
              Suvidha Pan Card
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-yellow text-xl">Useful Links</h1>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/verify">
              <p>Verify Your Certificate</p>
            </Link>
            <Link to="/privacy">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-5/6 m-auto">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-2"
          >
            <h1 className="text-yellow text-base">
              Suvidha Foundation (Suvidha Mahila Mandal)
            </h1>
            <p className="text-white">All Rights Reserved</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
