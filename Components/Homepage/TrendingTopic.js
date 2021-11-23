import React from "react";
import { arrowBlueDown } from "../Common/Images";

const TrendingTopic = () => {
  return (
    <div className="flex flex-col w-full   bg-gray-100">
      <div className="flex flex-row items-center border-b border-gray-400 justify-center p-4">
        <p className="font-semibold text-sm font-Poppins text-blue-550 mr-5">
          LATEST
        </p>
        <p className="font-medium text-xl font-Poppins text-black">News</p>
      </div>
      <div className=" mt-4">
        {[1, 2, 3, 4, 5, 6, 7].map((value, index) => (
          <div key={index} className="h-32 mx-4 mb-2 border-b-2 ">
            <div className="flex flex-row  ">
              <p className="text-sm text-blue-550 font-bold">#</p>
              <div className="flex flex-col items-start mx-4">
                <p className="font-semibold text-base font-Poppins text-black my-1">
                  Online Course
                </p>
                <p className="font-normal text-gray-500 text-xs text-left">
                  Lorem impsum dolor sit dolor sit amet consectetuer
                  adipscing...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center text-center cursor-pointer justify-center  mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <p className="font-medium  text-lg text-blue-550 mr-2">View More</p>
        <img src={arrowBlueDown} />
      </div>
    </div>
  );
};

export default TrendingTopic;
