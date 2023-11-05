import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function Verify() {

  const [serial, setSerial] = useState('')
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState('')
const handleChange=(e)=>{
  setSerial(e.target.value)
}

const handleVerify= (e)=>{
  e.preventDefault();
  if (serial) {
    axios.get(`http://localhost:4000/user?serial=${serial}`)
      .then((response) => {
        setUserData(response.data);
        setError(null);
      })
      .catch((err) => {
        setError("User Not Found");
        setUserData(null);
      });
  }
}


  return (
    <div className="w-5/6 m-auto">
      <div className="mb-12">
        <div className="flex flex-col items-center justify-center m-4 p-4">
          <h1 className="text-yellow text-4xl p-4">Verify Your Cerificate</h1>
        </div>
        <div className="m-1 flex items-center justify-center">
            <form className="flex flex-col gap-2 sm:flex-row md:flex-row lg:flex-row">
            <input className="w-full py-2 px-4 border border-yellow focus:outline-yellow" id="username" type="text" placeholder="Enter Ref No" value={serial} onChange={handleChange}/>
                <button type="submit" className="text-xl bg-yellow  rounded-md py-2 px-4 hover:bg-opacity-90" onClick={handleVerify}>Verify</button>
            </form>
        </div>
        {userData && (
        <div className="flex flex-col items-center justify-center m-8">
        <h1 className="text-2xl m-4">Details</h1>
        <div className="m-4 h-full w-full">
          <table className="border border-yellow h-full w-full">
          <tr className="">
            <th className="border border-yellow px-4 py-2">Name</th>
            <th className="border border-yellow px-4 py-2">Designation</th>
            <th className="border border-yellow px-4 py-2">Start Date</th>
            <th className="border border-yellow px-4 py-2">End Date</th>
          </tr>
          <tr className="">
            <td className="border border-yellow px-4 py-2">{userData.name}</td>
            <td className="border border-yellow px-4 py-2">{userData.designation}</td>
            <td className="border border-yellow px-4 py-2">{userData.startDate}</td>
            <td className="border border-yellow px-4 py-2">{userData.endDate}</td>
          </tr>
        </table>
        </div>
        
        </div>
      )}
      {error && <p className="text-red flex items-center justify-center m-4">{error}</p>}
      </div>
    </div>
  );
}
