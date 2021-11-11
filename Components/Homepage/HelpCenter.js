import React from "react";

const HelpData = [
  {
    title: "Ask a Question",
    description:
      "Lorem impsum dolor sit dolor sit amet consectetuer adipscing...",
  },
  {
    title: "Get a Answer",
    description:
      "Lorem impsum dolor sit dolor sit amet consectetuer adipscing...",
  },
  {
    title: "Rate your answer",
    description:
      "Lorem impsum dolor sit dolor sit amet consectetuer adipscing...",
  },
];

const HelpCenter = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 ">
      <p className="font-medium text-5xl font-Poppins text-black text-center">
        Help Center
      </p>
      <div className="flex flex-row my-8 mx-12">
        <div className="w-4/12 flex flex-col my-2 ">
          {HelpData.map((item, index) => {
            return (
              <div key={index} className="w-full h-28 mr-6 mb-2 ">
                <div className="flex flex-row">
                  <div className="flex flex-col w-20 h-16 ml-4 my-2 text-white justify-center items-center text-sm">
                    <img />
                  </div>
                  <div className="flex flex-col justify-center ml-3 flex-1">
                    <p className="font-semibold text-lg font-Poppins text-black mb-2">
                      {item.title}
                    </p>
                    <div className="flex flex-row justify-between items-center ">
                      <p className="font-normal text-gray-500 text-sm">
                        {item.description}
                      </p>
                      <img className="mr-3" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="ml-24 ">
            <button
              type="submit"
              className="py-3 w-56  bg-blue-550 flex flex-row items-center justify-center rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
            >
              <p className="text-white font-Poppins font-medium text-base mr-3">
                Ask Questions
              </p>
            </button>
          </div>
        </div>
        <div className="w-7/12 mx-10 flex flex-col    ">
          {HelpData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-32 mr-6 mb-4  shadow-lg rounded-lg border hover:border-blue-500"
              >
                <div className="flex flex-row">
                  <div className="flex flex-col w-24 h-24  bg-blue-850 ml-4  my-5  text-white justify-center items-center text-sm">
                    <div className="mb-2 font-semibold text-base">05</div>
                    <div className="text-xs font-normal">JAN,2021</div>
                  </div>
                  <div className="flex flex-col justify-center ml-3 flex-1">
                    <p className="font-semibold text-lg font-Poppins">
                      {item.title}
                    </p>
                    <p className="font-normal	my-1 text-sm">
                      {item.description}
                    </p>
                    <p className="font-semibold	text-sm my-1 text-blue-550">
                      View All questions
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
