import React from "react";
import { arrowBlueDown, profile, institution } from "../Common/Images";

const AddMembers = () => {
  return (
    <div className="flex flex-col w-full   bg-gray-100">
      <div className="flex flex-row items-center border-b border-gray-400 justify-center p-4">
        <p className="font-semibold text-xl font-Poppins text-blue-550 mr-5">
          ADD
        </p>
        <p className="font-medium text-3xl font-Poppins text-black">Members</p>
      </div>
      <div className="mt-4">
        {[1, 2, 3, 4, 5, 6, 7].map((value, index) => (
          <div key={index} className=" h-32 mx-4 my-2 border-b-2 ">
            <div className="flex flex-row ">
              <img className="h-16 w-16" src={profile} />
              <div className="flex flex-col items-start mx-4">
                <p className="font-semibold text-lg font-Poppins text-blue-550">
                  Sandeep Singh Randhawa
                </p>
                <p className="text-xs text-gray-500 mb-1 ">
                  stunlink@sandeep singh randhawa
                </p>
                <div className="flex flex-row items-center">
                  <div className="rounded-full flex justify-center items-center bg-gray-300 h-6 w-6">
                    <img src={institution} />
                  </div>
                  <h1 className="text-base font-medium text-black ml-2">
                    CHANDIGARH UNIVERSITY
                  </h1>
                </div>
                <button
                  type="submit"
                  className="py-1 px-6 my-3  bg-blue-550 flex flex-row items-center justify-center rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  <p className="text-white font-Poppins font-medium text-base ">
                    Link
                  </p>
                </button>
              </div>
            </div>
            <p className="text-xl ">...</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center text-center justify-center cursor-pointer  mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <p className="font-medium  text-lg text-blue-550 mr-2">View More</p>
        <img src={arrowBlueDown} />
      </div>
    </div>
  );
};

export default AddMembers;
