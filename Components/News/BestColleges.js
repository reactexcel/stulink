import React from "react";
import { college } from "../Common/Images";

const BestColleges = () => {
  
  const College = () => {
    return (
      <div className="py-4 px-4">
        <div className="flex flex-row">
          <img className="w-12 h-12 rounded-full " src={college} />
          <div className="mx-2">
            <h1>Chandigarh University</h1>
            <p className="text-xs text-blue-550 font-semibold py-1">
              Chandigarh
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full my-2">
          <p className="border-r-2 text-xs border-gray-400 pr-2">Adminssion</p>
          <p className="border-r-2 text-xs  border-gray-400 px-1 ">PlaceMent</p>
          <p className="border-r-2 text-xs  border-gray-400 px-1">Courses</p>
          <p className="border-r-2 text-xs  border-gray-400 px-1">CutOff</p>
          <p className="border-r-2 text-xs border-gray-400 px-1 ">Fees</p>
          <p className="  text-xs border-gray-400 px-2">Review</p>
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
        <College />
      ))}
    </div>
  );
};

export default BestColleges;
