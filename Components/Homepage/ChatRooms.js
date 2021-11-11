import React from "react";
import { arrowBlueDown, profile, rightLongArrowWhite, team } from "../Common/Images";

const ChatRooms = () => {
  return (
    <div className="flex flex-col w-full   bg-gray-100">
      <div className="flex flex-row items-center border-b border-gray-400 justify-center p-4">
        <p className="font-semibold text-xl font-Poppins text-blue-550 mr-5">
          CHAT
        </p>
        <p className="font-medium text-4xl font-Poppins text-black">Rooms</p>
      </div>
      <div className="mt-4">
        {[1, 2, 3, 4, 5, 6, 7].map((value, index) => (
          <div key={index} className=" h-32 mx-4 my-2 border-b-2 ">
            <div className="flex flex-row items-center ">
              <img className="px-2" src={team} />
              <div className="flex flex-col items-start mx-4 flex-1">
                <div className="flex-row flex justify-between w-full">
                  <p className="font-semibold text-lg font-Poppins text-black ">
                    Management
                  </p>
                  <p className="font-bold cursor-pointer">...</p>
                </div>

                <h1 className="text-md  uppercase text-gray-500 my-2">
                  68 Members
                </h1>
                <button
                  type="submit"
                  className="py-1 px-6 my-2  bg-blue-550 flex flex-row items-center justify-center rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="flex-row flex items-center">
                    <p className="text-white font-Poppins font-medium text-base mr-2">
                      Join Now
                    </p>
                    <img src={rightLongArrowWhite} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center text-center justify-center cursor-pointer mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <p className="font-medium  text-lg text-blue-550 mr-2">View More</p>
        <img src={arrowBlueDown} />
      </div>
    </div>
  );
};
export default ChatRooms;
