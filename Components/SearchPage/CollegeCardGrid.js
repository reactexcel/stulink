import React from "react";
import { college } from "../Common/Images";

const CollegeCardGrid = ({ data }) => {
  return (
    <div className="overflow-hidden w-11/12 my-2 mx-auto">
      <div className="">
        <p className="absolute  font-semibold text-sm text-blue-550 p-2 font-Poppins">
          Featured college
        </p>
        <img className="rounded-lg h-full" src={college} />
      </div>
      <div className="flex flex-col max-w-lg mx-2">
        <h1 className="text-md font-normal text-gray-500 mt-2">
          {data.name} Madras Christian College - MCC, Chennai
        </h1>
        <p className="font-bold text-xl my-1">
          <span>₹</span>24,000
        </p>
        <p className="text-gray-500 text-sm font-normal">
          1998 Wufma Point Minnessota, Atlanta, GA
        </p>
      </div>
    </div>
  );
};

export default CollegeCardGrid;
