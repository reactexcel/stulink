import React from "react";
import { profileImg } from "../Common/Images";

const Request = () => {
  return (
    <div className="md:mx-8 my-12">
      <div className="p-8 border-b-2">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 flex">
            <div>
              <img src={profileImg} alt="Profile" height="auto" width="auto" />
            </div>
            <div>
              <div className="mx-auto text-left ml-4">
                <p className="text-2xl font-semibold">Alex Khotanras</p>
                <p className="text-lg font-thin text-gray-400">
                  stulink@AlexKhotanras
                </p>
              </div>
              <div className="text-sm py-8 flex justify-between">
                <p className="my-4 flex">
                  <img
                    src="/img/location-icon.svg"
                    alt="icon"
                    height="20px"
                    width="15px"
                    className="mr-2 ml-1"
                  />
                  <span className="my-auto">Chandigarh</span>
                </p>
                <p className="my-4 flex ml-4">
                  <img
                    src="/img/college-icon.png"
                    alt="icon"
                    height="30px"
                    width="30px"
                    className="mr-1"
                  />
                  <span className="my-auto">Indian Institute , Madras</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex">
            <button className="text-xl text-white bg-blue-550 rounded py-2 px-12 my-auto mx-3">
              Link
            </button>
            <button className="text-xl text-white bg-gray-400 rounded py-2 px-12 my-auto mx-3">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RequestsList = () => {
  return (
    <div>
      <Request />
      <Request />
      <Request />
      <Request />
    </div>
  );
};

const FindRequests = () => {
  return (
    <div className="mx-20">
      <p className="font-black text-2xl">FIND REQUESTS</p>
      <RequestsList />
    </div>
  );
};

export default FindRequests;
