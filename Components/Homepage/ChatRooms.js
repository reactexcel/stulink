import React from "react";
import { arrowBlueDown,  team } from "../Common/Images";

const ChatRooms = () => {
  return (
    <div className="flex flex-col w-full bg-gray-100">
     <p className="font-medium w-full font-Poppins text-black text-center py-4  border-b-2 border-gray-500">
      <span className="text-blue-550 uppercase text-md font-bold">  Add</span> 
      <span className="font-3xl"> Members</span>
      </p>
      <div className="mt-4">
        {[1, 2, 3, 4, 5, 6, 7].map((value, index) => (
          <div key={index} className=" h-32 mx-4 my-2 border-b-2 ">
            <div className="flex flex-row  ">
              <img className="h-16 w-16 bg-white rounded-full " src={team} />
              <div className="flex flex-col items-start mx-4">
                <p className="font-semibold text-xl font-Poppins text-blue-550 ">
                  Management
                </p>
                <h1 className="text-md  uppercase text-gray-500 my-2">
                  68 Members
                </h1>
                <button
                  type="submit"
                  className="py-1 px-6 my-2  bg-blue-550 flex flex-row items-center justify-center rounded-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
                >
                  <p className="text-white font-Poppins font-medium text-base ">
                    Join Now
                  </p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center text-center justify-center  mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <p className="font-medium  text-lg text-blue-550 mr-2">View More</p>
        <img src={arrowBlueDown} />
      </div>
    </div>
  );
};
export default ChatRooms;
