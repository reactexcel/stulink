import React from "react";
import { arrowBlueDown } from "../Common/Images";

const BestCourses = () => {
  const Course = () => {
    return (
      <div className="py-4 px-4">
        <div className="flex flex-row justify-between">
          <h1 className="text-blue-550 text-md">
            Master Of Computer Technology
          </h1>
          <img src={arrowBlueDown} />
        </div>
        <div className="flex flex-row w-full my-2">
          <p className="border-r-2 text-xs border-gray-400 pr-2">2 year</p>
          <p className="border-r-2 text-xs  border-gray-400 px-1 ">Bachelor</p>
          <p className="border-r-2 text-xs  border-gray-400 px-1 ">Full Time</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white border shadow-lg   rounded-lg flex flex-col  mx-2">
      <div className="bg-green-400 w-full h-12 rounded-t-lg  flex items-center justify-center text-white">
        Best COlleges
      </div>
      {[1, 2, 3, 4].map((item) => (
        <Course />
      ))}
    </div>
  );
};

export default BestCourses;
