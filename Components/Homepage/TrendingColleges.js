import React from "react";
import TrendingCollegeCarousel from "./TrendingCollegeCarousel";

const TrendingColleges = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center mt-40 mb-10">
          <p className="font-semibold text-2xl font-Poppins text-blue-550 mr-5">
            TRENDING
          </p>
          <p className="font-medium text-6xl font-Poppins text-black">
            Colleges
          </p>
        </div>
        <TrendingCollegeCarousel />
      </div>
    </>
  );
};

export default TrendingColleges;
