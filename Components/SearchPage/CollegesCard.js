import React from "react";
import { college } from "../Common/Images";

const CollegeCard = () => {
  return (
    <div className="flex flex-row flex-wrap  w-full bg-white rounded-lg my-2 shadow-2xl">
      <div className="">
        <p className=" absolute  font-semibold text-sm text-blue-550 p-2 font-Poppins">
          Featured college
        </p>
        <img className="rounded-lg w-11/12 h-full" src={college} />
      </div>
      <div className="flex flex-col max-w-xl">
        <h1
          className="text-2xl text-gray-500 my-2  font-semibold"
          style={{ fontSize: "28px" }}
        >
          Madras Christian College - MCC, Chennai
        </h1>
        <p className="font-bold text-xl my-1 ">
          <span>₹</span>24,000
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
