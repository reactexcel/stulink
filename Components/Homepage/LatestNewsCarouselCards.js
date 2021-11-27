import React from "react";
import {
  location,
  person,
  longArrow,
  LatestNews,
  calendar,
} from "../Common/Images";

const LatestNewsCarouselCards = () => {
  return (
    <>
      <div className=" flex flex-col rounded-lg mx-5 relative cursor-pointer">
        <img src={LatestNews} className="rounded-lg" />
        <div className="flex flex-row items-center mt-5 justify-between">
          <div className="flex flex-row w-full">
            <img src={person} />
            <p className="font-light text-sm ml-3">By Ramdas Sharma</p>
          </div>
          <div className="flex flex-row w-full">
            <img src={calendar} />
            <p className="font-light text-sm ml-3">2 days ago</p>
          </div>
        </div>
        <p className="font-semibold text-black text-base mt-5">
          BITSAT Test Centre/ City Allotment 2021 (July 12) - Check Test City
          Allotment Here
        </p>
        <p className="font-normal text-gray-600 text-sm mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi
          dicta ex labore. Ipsum nobis amet nisi voluptate corporis ......
        </p>
        <div className="flex flex-row justify-center items-center h-8 rounded-sm w-1/2 cursor-pointer border transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-blue-550 my-5">
          <p className="text-blue-550 font-semibold	sm">APPLY NOW</p>
          <img src={longArrow} className="ml-2" />
        </div>
      </div>
    </>
  );
};

export default LatestNewsCarouselCards;
