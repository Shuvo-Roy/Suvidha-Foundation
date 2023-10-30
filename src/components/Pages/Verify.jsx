import React from "react";

export default function Verify() {
  return (
    <div className="w-5/6 m-auto">
      <div>
        <div className="flex flex-col items-center justify-center m-4 p-4">
          <h1 className="text-yellow text-4xl p-4">Verify Your Cerificate</h1>
        </div>
        <div className="m-1 flex items-center justify-center">
            <form className="flex flex-col gap-2 sm:flex-row md:flex-row lg:flex-row">
            <input className="w-full py-2 px-4 border border-yellow focus:outline-yellow" id="username" type="text" placeholder="Enter Ref No"/>
                <button className="text-xl bg-yellow  rounded-md py-2 px-4 hover:bg-opacity-90">Verify</button>
            </form>
        </div>
      </div>
    </div>
  );
}
