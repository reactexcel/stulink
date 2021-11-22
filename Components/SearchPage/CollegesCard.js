import React from "react";
import { college } from "../Common/Images";

const CollegeCard = () => {
  return (
    <div className="flex flex-row flex-wrap  w-full bg-white rounded-lg my-2 shadow-2xl">
      <div className="">
        <p className=" absolute  font-semibold text-sm text-blue-550 p-2 font-Poppins">
          Featured college
        </p>
        <img className="rounded-lg w-11/12 h-full" src={college} alt="collegeIcon"/>
      </div>
      <div className="flex flex-col max-w-xl">
        <h1
          className="text-2xl text-gray-500 my-2  font-semibold"
          style={{ fontSize: "28px" }}
        >
          Madras Christian College - MCC, Chennai
        </h1>
        <p className="font-bold text-xl my-1 ">
          <span>₹</span>24,000
        </p>
        <p className="text-gray-500 text-sm font-normal">
          1998 Wufma Point Minnessota, Atlanta, GA
        </p>
        <div className="flex flex-row justify-between my-2 max-w-md">
          <div className="flex flex-row text-gray-500  text-sm ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Courses
          </div>
          <div className="flex flex-row  text-gray-500 text-sm ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            Cut Off
          </div>
          <div className="flex flex-row  text-gray-500 text-sm ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Admission
          </div>
          <div className="flex flex-row  text-gray-500 text-sm ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            Picture
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
