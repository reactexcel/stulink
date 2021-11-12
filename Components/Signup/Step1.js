import React from "react";
import { signupImage } from "../Common/Images";
import StepsFlow from "./StepsFlow";

export const Step1 = () => {
  return (
    <div className="">
      <div className="my-8 border-2 rounded-xl">
        <div className="p-8">
          <img
            src={signupImage}
            alt="Signup"
            height="auto"
            width="auto"
          />
          <div className="my-6">
          <p className="font-semibold text-2xl">Step 1</p>
          <p className="text-2xl my-4">Enter your personal number Details.</p>
          <StepsFlow />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Step1Input = () => {
  return (
    <div className="shadow-2xl rounded-2xl">
      <div className="bg-blue-550 bg-opacity-10 px-8 py-12 rounded-t-2xl">
        <p className="text-blue-550 text-2xl font-semibold">
          Enter your personal information
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="p-8">
        <form>
          <div className="my-8">
            <p className="text-xl font-semibold">Enter Mobile Number</p>
            <input
              type="number"
              className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
            />
          </div>
          <p className="text-center text-3xl font-bold">OR</p>
          <div className="my-8">
            <p className="text-xl font-semibold">Enter E-MAIL</p>
            <input
              type="text"
              className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
            />
          </div>
          <div className="my-8">
            <p className="text-xl font-semibold">Enter Password</p>
            <input
              type="password"
              className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
            />
          </div>
          <div className="my-8">
            <p className="text-xl font-semibold">Enter Confirm Password</p>
            <input
              type="password"
              className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
            />
          </div>
        </form>
        <div className="flex justify-between">
          <button className="p-4 bg-gray-500 text-white rounded-xl w-44 transition duration-300 cursor-not-allowed hover:-translaye-y-1 hover:scale-105">
            {"<<"} Previous
          </button>
          <button className="p-4 bg-blue-550 text-white rounded-xl w-44 transition duration-300 transform hover:-translaye-y-1 hover:scale-105">
            Next {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};
