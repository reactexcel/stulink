import React from "react";
import { profileImg } from "../Common/Images";

const memberData = [{}];

const Member = () => {
  return (
    <div className="flex m-4 shadow-sm border border-gray-300 rounded-xl p-6">
      <img src="/img/member.png" alt="Profile" height="20px" width="75px" className="h-20" />
      <div className="mx-4">
        <p className="font-black">Sand Rama</p>
        <p className="text-xs text-gray-400">@Sandrama</p>
        <p className="text-lg text-blue-550 font-black flex mt-2">
          <img
            src="/img/college-icon.png"
            alt="icon"
            height="20px"
            width="20px"
          />
          Chandigarh University
        </p>
        <p className="text-xs text-gray-400">+4 Mututal friends</p>
        <div className="flex justify-center">
          <button className="border border-blue-550 text-blue-550 px-8 m-4 transition duration-300 hover:bg-blue-550 hover:text-white rounded text-xl">
            Link
          </button>
        </div>
      </div>
    </div>
  );
};

const MembersContainer = () => {
  return (
    <div>
      <div className="mx-12 p-8">
        <p className="font-black text-2xl">Members</p>
        <div className="grid md:grid-cols-4 grid-cols-1 my-12">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((member, index) => {
            return (
              <div key={index}>
                <Member />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MembersContainer;
