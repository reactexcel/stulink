import React from "react";
import { profileImg } from "../Common/Images";

const RecommendedProfile = () => {
  const ListItem = () => {
    return (
      <div className="flex justify-between mt-12">
        <div className="flex jsutify-start">
          <img src={profileImg} alt="Profile" height="45px" width="65px" />
          <div className="text-left mx-4">
            <p className="font-semibold">Alex Khotanras</p>
            <p className="text-xs font-thin text-gray-400">
              stulink@Alex Khotanras
            </p>
            <p className="text-blue-550">Chandigarh University</p>
          </div>
        </div>
        <button className="rounded-full text-xs text-white bg-blue-550 my-auto py-0.5 px-2">
          Link
        </button>
      </div>
    );
  };
  return (
    <div className="shadow-2xl my-12 p-8">
      <p className="text-2xl font-semibold text-center">
        Recommended <span className="text-blue-550">Profiles</span>
      </p>
      <hr className="my-4" />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default RecommendedProfile;
