import React from "react";
import { stepLine } from "../Common/Images";

const StepsFlow = ({ steps = 1 }) => {
  const Step = ({ step = 1, text, last=false }) => {
    return (
      <div>
        <div
          className={`${
            steps === step ? "text-blue-550" : "text-gray-500"
          } text-opacity-80 flex my-auto`}
        >
          <p className={`${
            steps === step ? "text-blue-550 border-blue-550" : "text-gray-500 border-gray-500"
          } text-opacity-80 border-opacity-60 border-4 rounded-full mr-2 px-3 pb-1 my-auto`}>
            {step}
          </p>
          <p>{text}</p>
        </div>
        {!last && <img
          src={stepLine}
          alt=""
          height="52px"
          width="1px"
          className="ml-5 my-2"
        />}
      </div>
    );
  };

  return (
    <div className="text-2xl">
      <Step step={1} text="Basic Details" />
      <Step step={2} text="Select Username" />
      <Step step={3} text="Select College" />
      <Step step={4} text="Find Friends" />
      <Step step={5} text="Link Hashtags" last={true} />
    </div>
  );
};

export default StepsFlow;
