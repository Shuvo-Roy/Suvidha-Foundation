import React from "react";
import qr from "../../assets/QR-Codes.jpg";
export default function Donations() {
  return (
    <div className="bg-whiteXtra">
      <div className="w-5/6 m-auto">
        <div className="mt-8 mb-8">
        <div className="flex flex-col items-center justify-center m-4 p-4">
          <h1 className="text-yellow text-5xl p-4">ACCOUNT DETAILS</h1>
        </div>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row gap-8 items-start justify-around">
            <div className="mt-4 mb-4 flex flex-col gap-2">
              <h1 className="text-yellow text-3xl mb-2">For Indian Donors</h1>
              <p className="text-xl">Bank Of Baroda</p>
              <p className="text-xl">City: Nagpur</p>
              <p className="text-xl">Contact No: +91 8010996763</p>
              <p className="text-xl">Account Name: Suvidha Mahila Mandal</p>
              <p className="text-xl">Suvidha Account No: 97840100027609</p>
              <p className="text-xl">IFSC Code: BARB0DBKPAR</p>
            </div>
            <div className="mt-4 mb-4 flex flex-col items-center justify-center">
              <h1 className="text-yellow text-3xl mb-2">Scan QR code</h1>
              <img src={qr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
