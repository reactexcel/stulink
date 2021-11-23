import React, { useState } from "react";
import PopularCoursesTab from "./PopularCoursesTab";
import PopularCoursesTags from "./PopularCoursesTags";

const PopularCourses = ({ courses }) => {
  const [filterCategory, setFilterCategory] = useState("All");
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-6">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-sm font-Poppins text-blue-550 mr-5">
            POPULAR
          </p>
          <p className="font-medium text-xl font-Poppins text-black">
            Courses
          </p>
          <PopularCoursesTab setFilterCategory={setFilterCategory} filterCategory={filterCategory} />
          <PopularCoursesTags courses={courses} filterCategory={filterCategory} />
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
