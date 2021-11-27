import React from "react";
import {
  location,
  // college,
  greyStar,
  yellowStar,
  longArrow,
} from "../Common/Images";

const CollegeCarouselCards = ({college}) => {
  return (
    <>
      <div className=" flex flex-col rounded-xl mx-2 relative">
        <div className="absolute top-0 w-full h-16 flex justify-between items-center px-3">
          <div className="bg-white">
            <p className="font-semibold text-xs text-blue-550 p-2 font-Poppins">
              Featured college
            </p>
          </div>
          <span className="rounded-full h-8 w-8 bg-white"></span>
        </div>
        <img src={college?.image} className="rounded-t-xl" />
        <div className="flex flex-row items-center mt-1 ml-4">
          <p className="text-xs">(4.0)</p>
          <div className="ml-2 flex flex-row items-center">
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={yellowStar} />
            <img src={greyStar} />
          </div>
        </div>
        <p className="font-semibold text-black text-sm ml-4 mt-3 capitalize">
          {college?.name}
        </p>
        <div className="flex flex-row items-center ml-4 mt-4">
          <img src={location} />
          <p className="font-medium text-xs ml-2 capitalize">{college?.city} {college?.state}</p>
        </div>
        <div className="flex flex-row justify-center items-center h-6 rounded-sm w-1/2 cursor-pointer border transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-blue-550 ml-4 mt-5">
          <p className="text-blue-550 font-semibold	xs">APPLY NOW</p>
          <img src={longArrow} className="ml-2" />
        </div>
      </div>
    </>
  );
};

export default CollegeCarouselCards;
