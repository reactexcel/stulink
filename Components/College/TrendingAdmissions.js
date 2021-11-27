import React from "react";
import {trandingUpIcon } from "../Common/Images"
const ListItem = () => {
  return (
    <div className="border-t">
      <div className="flex px-4 pt-4">
        <img
          src="/img/trending-college.png"
          alt="Img"
          height="auto"
          width="75px"
          className="rounded-full w-12 h-12"
        />
        <div className="ml-4">
          <p className="font-black text-base">Chandigarh University</p>
          <p className="flex text-yellow-300 text-vs">
            <img src="/img/location-icon.svg" alt="clg" className="mr-2" />
            Chandigarh
          </p>
          <p className="text-gray-400 text-xs">Admission | Placement</p>
        </div>
      </div>
      <div className="text-center mb-4 mt-0.5">
        <p className="text-blue-550 text-xs">Bachelor of technology , Master of technology </p>
        <p className="text-vs">Total fees: 5.5lakh | 4 Years | On Campus | Fulltime</p>
      </div>
    </div>
  );
};

const TrendingAdmissions = () => {
  return (
   <div className="mt-8">
      <div className="shadow rounded-2xl border">
        <p className="bg-green-550 text-white text-center text-base p-6 rounded-t-2xl">
          <img src={trandingUpIcon} alt="trandingUpIcon" className="inline-block" />  <span className=" pl-2">Trending Admissions </span>
        </p>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>

  );
};

export default TrendingAdmissions;
