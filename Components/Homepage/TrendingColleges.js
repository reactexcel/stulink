import React from "react";
import TrendingCollegeCarousel from "./TrendingCollegeCarousel";

const TrendingColleges = ({colleges}) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-row items-center mt-40 mb-10">
          <p className="font-semibold text-2xl font-Poppins text-blue-550 mr-5">
            TRENDING
          </p>
          <p className="font-medium text-2xl font-Poppins text-black">
            Colleges
          </p>
        </div>
        <TrendingCollegeCarousel colleges={colleges} />
      </div>
    </>
  );
};

export default TrendingColleges;
