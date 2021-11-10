import React, { useState } from "react";

const PopularCoursesTags = () => {
  const tagsData = [
    {
      row: [
        { tagName: "MCA" },
        { tagName: "MBA" },
        { tagName: "LLB" },
        { tagName: "BA" },
        { tagName: "BBA" },
        { tagName: "BSC" },
      ],
    },
    {
      row: [
        { tagName: "MCA" },
        { tagName: "MBA" },
        { tagName: "LLB" },
        { tagName: "BA" },
        { tagName: "BBA" },
      ],
    },
    {
      row: [
        { tagName: "MCA" },
        { tagName: "MBA" },
        { tagName: "LLB" },
        { tagName: "BA" },
        { tagName: "BBA" },
        { tagName: "BSC" },
      ],
    },
  ];
  return (
    <>
      {tagsData.map((val, index) => (
        <div className={`grid grid-cols-${(index+1)%2===0 ? "5":"6"} gap-10 mt-10 ${(index+1)%2===0 ? "w-3/4":"w-full"}`}>
          {val?.row?.map((value, index) => (
            <div className="px-2 py-3 border border-blue-550 rounded-md cursor-pointer font-medium text-lg flex justify-center items-center hover:bg-blue-550 hover:text-white transition duration-500">
              {value.tagName}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default PopularCoursesTags;
