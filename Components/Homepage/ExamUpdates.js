import React from "react";

const ExamUpdates = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-32">
        <div className="flex flex-col items-center">
          <p className="font-semibold text-2xl font-Poppins text-blue-550 mr-5">
          LATEST
          </p>
          <p className="font-medium text-6xl font-Poppins text-black">
            Exam Updates
          </p>
        </div>
        <div className="flex flex-row justify-between mt-9">
          <div className="flex flex-col w-1/3">
            <div className="w-80 h-20 mr-6 mb-4 border border-blue-550">
              <div className="flex flex-row">
                <div className="flex flex-col w-20 h-16 bg-blue-850 ml-4 my-2 text-white text-center text-sm"><div className="mt-1.5">05</div> <div className="mt-1.5 text-xs">JAN,2021</div></div>
                <div className="flex flex-col ml-3 mt-3.5 mb-2.5">
                  <p className="font-semibold text-sm font-Poppins text-blue-550">NET EXAMS 2021</p>
                  <p>Location: All India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-2/3 shadow-lg rounded-xl px-11 py-8">
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-2xl font-Poppins text-blue-550 mr-5">
                NET EXAMS 2021
              </p>
              <p className="font-medium text-base font-Poppins text-blue-550 mr-5">
                25/11/2021
              </p>
            </div>
            <p className="my-9">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit.
            </p>
            <p className="my-3"><b>Examination Mode</b> – Computer Based Test</p>
            <p className="my-3"><b>Number of Shits</b> - 2 (9 am to 12 pm & 2:30 pm to 5:30 pm)</p>
            <p className="my-3"><b>Duration of Exam</b> - 3 hours</p>
            <p className="my-6"><b>Mode of Language</b> – English and Hindi</p>
            <div className="flex flex-col"><button type="submit" className="py-6 w-56 bg-blue-500">Apply Now</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamUpdates;
