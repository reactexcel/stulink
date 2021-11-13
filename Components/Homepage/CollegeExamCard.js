import React, { useState } from "react";

const CollegeExamCard = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="hover:bg-blue-550 bg-white shadow-md cursor-pointer flex flex-col items-center px-4 py-6 rounded-lg"
    >
      <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
        <img src={data?.image} alt="Image" height="auto" width="auto" />
      </div>
      <p
        className={`text-${
          hover ? `white` : `blue-550`
        } font-semibold text-base font-Poppins mt-5 capitalize`}
      >
        {data?.category}
      </p>
      <p
        className={`text-${
          hover ? `white` : `blue-550`
        } font-light text-sm font-Poppins mt-2`}
      >
        +{data?.collegeCount} Colleges
      </p>
    </div>
  );
};

export default CollegeExamCard;
