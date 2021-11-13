import React from "react";

const PopularCoursesTags = ({ courses, filterCategory }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-10 my-12">
        {courses?.data?.map((value, index) => {
          return (
            <div
              key={index}
              className="capitalize px-2 py-3 border border-blue-550 rounded-md cursor-pointer font-medium text-lg flex justify-center items-center hover:bg-blue-550 hover:text-white transition duration-500"
            >
              {value.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularCoursesTags;
