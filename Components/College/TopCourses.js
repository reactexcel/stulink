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
    <div className="shadow-lgOuter11 p-8 border my-9 rounded w-full">
  
      <div className="flex items-center mb-9">
        <img src={topCourse} alt="icon"  className="w-8 h-8" />
        <p className=" text-2xl text-blue-550 text-25 ml-2 font-black">Top Courses {"&"} Fees</p>
      </div>

      <div className="grid grid-cols-2 gap-8 ">
        {courseData.map((course, index) => {
          return (
            <div className="shadow  rounded-xl border  p-4" key={index} style={{width:'365px'}}>
              <p className="text-green-550  font-black text-lg my-1">{course.title}</p>
              <p className="text-xs my-2">
                Annual Fee:{" "}
                <span className="text-blue-550 my-2 font-bold">INR {course.fee} Lacs</span>
                <span className="px-2"> | </span>
                Total Seats: <span className="text-blue-550 font-bold">{course.seats} Seats</span>
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-blue-550 text-right mt-5">View all Courses {">"}</p>
    </div>
  );
};

export default TopCourses;
