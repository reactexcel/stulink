import React from "react";
import { college } from "../Common/Images";

const CollegeCard = () => {
  return (
    <div className="flex flex-row felx-wrap  w-full bg-white rounded-lg my-2  shadow-2xl">
      <div className="">
        <img className="rounded-lg w-10/12 h-full" src={college} />
      </div>
      <div className="flex flex-col max-w-xl">
        <h1 className="text-3xl text-gray-700  max-w-md font-semibold" >
          Madras Christian College - MCC, Chennai
        </h1>
        <p className="font-bold text-xl my-1 ">
          <span className="px-2">₹</span>24,000
        </p>
        <p className="text-gray-500 text-sm font-normal">
          1998 Wufma Point Minnessota, Atlanta, GA
        </p>
        <div className="flex flex-row justify-between my-2 max-w-md">
          <div className="flex flex-row text-gray-500  text-sm ">Courses</div>
          <div className="flex flex-row  text-gray-500 text-sm ">Cut Off</div>
          <div className="flex flex-row  text-gray-500 text-sm ">Admission</div>
          <div className="flex flex-row  text-gray-500 text-sm ">Picture</div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
