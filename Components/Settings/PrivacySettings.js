import React, { useState } from "react";
import ToggleCheck from "../Common/ToggleCheck";

const PrivacySettings = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="shadow p-12">
      <p className="font-black text-3xl">Privacy</p>

      <div className="mt-10">
        <p className="font-Poppins font-black text-xl">Privacy & data</p>
        <p className="mt-6 font-Poppins text-xl text-gray-400">Deceide whether your profile will be hidden from search engine and what kind of data you want to use to imporve the recommendation and ads you see Learn more</p>

        <div className="grid grid-cols-2 mt-6">
          <div>
            <p className="font-black text-xl">Search Privacy</p>
            <p className="text-gray-400 font-Poppins text-xl mt-4">Hide your profile from search engine (Ex.google) <span className="text-blue-550">Learn more </span></p>
          </div>
          <div className="flex justify-end">
              <ToggleCheck
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
        </div>
      </div>

       <p className=" text-2xl font-black font-Poppins mt-14">
       Personalization
       </p>

       <div className="grid grid-cols-4 mt-6">
          <div className="col-span-3">
            <p className="font-black text-xl">Search Privacy</p>
            <p className="text-gray-400 font-Poppins text-xl mt-4">use sites you visit to improve which recommendation and ads you see.<span className="text-blue-550"> Learn more </span></p>
          </div>
          <div className="flex justify-end">
              <ToggleCheck
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
        </div>
      </div>

      <div className="grid grid-cols-4 mt-6">
          <div className="col-span-3">
            <p className="font-black text-xl">Search Privacy</p>
            <p className="text-gray-400 font-Poppins text-xl mt-4">use information from our partners to improve which ads you see.<span className="text-blue-550"> Learn more </span></p>
          </div>
          <div className="flex justify-end">
              <ToggleCheck
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
        </div>
      </div>



    </div>
    </div>
  );
};

export default PrivacySettings;
