import React from "react";
import TrendingCollegeCarousel from "./TrendingCollegeCarousel";

const TrendingColleges = ({colleges}) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center mt-16 mb-8">
          <p className="font-semibold text-base font-Poppins text-blue-550 mr-5">
            TRENDING
          </p>
          <p className="text-2xl font-Poppins text-black">
            Colleges
          </p>
        </div>
        <TrendingCollegeCarousel colleges={colleges} />
      </div>
    </>
  );
};

export default TrendingColleges;
