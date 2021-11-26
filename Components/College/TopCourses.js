import React from "react";
import {topCourse } from "../Common/Images"

const courseData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    fee: 1.36,
    seats: 68,
  },
  {
    title: "Masters of Technology (B.Tech)",
    fee: 1.36,
    seats: 68,
  },
  {
    title: "Bachelor of Technology (B.Tech)",
    fee: 1.36,
    seats: 68,
  },
  {
    title: "Masters of Technology (B.Tech)",
    fee: 1.36,
    seats: 68,
  },
  {
    title: "Bachelor of Technology (B.Tech)",
    fee: 1.36,
    seats: 68,
  },
  {
    title: "Masters of Technology (B.Tech)",
    fee: 1.36,
    seats: 68,
  },
];

const TopCourses = () => {
  return (
    <div className="shadow-lgOuter11 p-8 border my-9 rounded">
  
      <div className="flex items-center mb-9">
        <img src={topCourse} alt="icon"  className="w-8 h-8" />
        <p className=" text-2xl text-blue-550 ml-2 font-black">Top Courses {"&"} Fees</p>
      </div>

      <div className="grid grid-cols-2 gap-8 mx-12">
        {courseData.map((course, index) => {
          return (
            <div className="shadow p-8 text-center rounded-xl border" key={index}>
              <p className="text-green-550 text-xl font-black my-4">{course.title}</p>
              <p>
                Annual Fee:{" "}
                <span className="text-blue-550">INR {course.fee} Lacs</span> |
                Total Seats: <span className="text-blue-550">{course.seats} Seats</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCourses;
