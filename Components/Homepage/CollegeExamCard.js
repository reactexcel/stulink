import React, { useState } from "react";
import { informationTechnology } from "../Common/Images";

const CollegeExamCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="hover:bg-blue-550 bg-white shadow-md cursor-pointer flex flex-col items-center px-4 py-6 rounded-lg"
    >
      <div className="rounded-full h-24 w-24 bg-white flex items-center justify-center">
        <img src={informationTechnology} />
      </div>
      <p
        className={`text-${
          hover ? `white` : `blue-550`
        } font-semibold text-base font-Poppins mt-5`}
      >
        Information Technology
      </p>
      <p
        className={`text-${
          hover ? `white` : `blue-550`
        } font-light text-sm font-Poppins mt-2`}
      >
        +250 Colleges
      </p>
    </div>
  );
};

export default CollegeExamCard;
