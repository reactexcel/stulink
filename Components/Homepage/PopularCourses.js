import React from "react";
import PopularCoursesTab from "./PopularCoursesTab";
import PopularCoursesTags from "./PopularCoursesTags";

const PopularCourses = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-32">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-2xl font-Poppins text-blue-550 mr-5">
            POPULAR
          </p>
          <p className="font-medium text-6xl font-Poppins text-black">
            Courses
          </p>
          <PopularCoursesTab />
          <PopularCoursesTags />
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
