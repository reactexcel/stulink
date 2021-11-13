import React from "react";
import { profileImg } from "../Common/Images";

const ProfileBar = () => {
  return (
    <div className="md:mx-8 my-12">
      <div className="p-12 shadow-2xl border-t-8 border-blue-550 rounded-2xl">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 flex">
            <div>
              <img src={profileImg} alt="Profile" height="auto" width="auto" />
            </div>
            <div>
              <div className="flex justify-around">
                <p className="text-2xl font-semibold mx-2">James Spiegel</p>
                <p className="text-lg font-thin text-gray-400">
                  stulink@JamesSpiegel
                </p>
              </div>
              <div className="flex h-full">
                <div className="my-auto text-center text-2xl mx-6">
                  <p className="text-gray-600">456</p>
                  <p>Linked</p>
                </div>
                <div className="my-auto text-center text-2xl mx-6">
                  <p className="text-gray-600">12</p>
                  <p>Linking</p>
                </div>
                <div className="my-auto text-center text-2xl mx-6">
                  <p className="text-gray-600">22</p>
                  <p>Mututal Links</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex">
            <button className="text-xl text-white bg-blue-550 rounded-xl py-2 px-12 my-auto mx-3">
              Linked
            </button>
            <button className="text-xl text-white bg-gray-500 rounded-xl py-2 px-12 my-auto mx-3">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBar;
