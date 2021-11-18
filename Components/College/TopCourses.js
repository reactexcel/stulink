import React from "react";

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
    <div className="shadow-xl p-8 border my-12 rounded">
      <p className="text-blue-550 text-2xl font-black my-8">
        Top Courses {"&"} Fees
      </p>
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
