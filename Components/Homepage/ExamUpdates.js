import React from "react";
import {
  arrowBlueDown,
  rightLongArrowGrey,
  rightLongArrowWhite,
  calendar,
} from "../Common/Images";

const ExamUpdates = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-12">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-2xl font-Poppins text-blue-550 mr-5">
            LATEST
          </p>
          <p className="font-medium text-6xl font-Poppins text-black">
            Exam Updates
          </p>
        </div>
        <div className="flex flex-row justify-between items-start mt-9">
          <div className="flex flex-col w-1/3 mr-5 items-center cursor-pointer">
            {[1, 2, 3, 4, 5, 6, 7].map((value, index) => (
              <div
                key={index}
                className="w-full h-20 mr-6 mb-4 border rounded-md hover:border-blue-550 bg-gray-100"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col w-20 h-16 bg-blue-850 ml-4 my-2 text-white justify-center items-center text-sm">
                    <div className="mb-2 font-semibold text-base">05</div>
                    <div className="text-xs font-normal">JAN,2021</div>
                  </div>
                  <div className="flex flex-col justify-center ml-3 flex-1">
                    <p className="font-semibold text-sm font-Poppins text-blue-550 mb-2">
                      NET EXAMS 2021
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <p className="font-normal	text-xs">Location: All India</p>
                      <img src={rightLongArrowGrey} className="mr-3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-row items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <p className="font-medium	text-lg text-blue-550 mr-2">View More</p>
              <img src={arrowBlueDown} />
            </div>
          </div>

          <div className="flex flex-col w-2/3 shadow-lg rounded-xl px-11 py-8">
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-2xl font-Poppins text-blue-550 mr-5">
                NET EXAMS 2021
              </p>
              <div className="flex flex-row items-center justify-center">
                <img src={calendar} />
                <p className="font-medium text-base font-Poppins text-blue-550 mr-5 ml-2">
                  25/11/2021
                </p>
              </div>
            </div>
            <p className="my-9 font-normal text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit.
            </p>
            <p className="my-3">
              <b>Examination Mode</b> – Computer Based Test
            </p>
            <p className="my-3">
              <b>Number of Shits</b> - 2 (9 am to 12 pm & 2:30 pm to 5:30 pm)
            </p>
            <p className="my-3">
              <b>Duration of Exam</b> - 3 hours
            </p>
            <p className="my-3">
              <b>Mode of Language</b> – English and Hindi
            </p>
            <div className="flex flex-col mt-5">
              <button
                type="submit"
                className="py-3 w-56 bg-blue-550 flex flex-row items-center justify-center rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <p className="text-white font-Poppins font-medium text-base mr-3">
                  Apply Now
                </p>
                <img src={rightLongArrowWhite} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamUpdates;
