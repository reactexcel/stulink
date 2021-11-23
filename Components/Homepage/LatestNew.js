import React from "react";
import LatestNewsCarousel from "./LatestNewsCarousel";

const LatestNews = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-24">
        <div className="flex flex-row items-center mt-20 mb-8">
          <p className="font-semibold text-vs font-Poppins text-blue-550 mr-5">
            LATEST
          </p>
          <p className="font-medium text-xl font-Poppins text-black">
            News
          </p>
        </div>
        <LatestNewsCarousel />
      </div>
    </>
  );
};

export default LatestNews;
