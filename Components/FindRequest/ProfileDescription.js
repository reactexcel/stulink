import React from "react";
import { profileImg } from "../Common/Images";
import Link from "next/link";

const ProifleDescription = () => {
  return (
    <div className="shadow-2xl my-12 rounded-xl bg-white">
      <div className="flex justify-center">
        <img src={profileImg} alt="Profile" height="auto" width="300px" />
      </div>
      <div className="text-center">
        <p className="text-4xl font-semibold mx-2">James Spiegel</p>
        <p className="text-lg font-thin text-gray-400">stulink@JamesSpiegel</p>
        <div className="flex justify-around h-full mx-auto my-12">
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
        <div className="flex justify-center py-4">
          <Link href="/profile">
          <button className="text-xl text-white bg-blue-550 rounded py-4 px-12 my-auto mx-3 transition duration-300 hover:bg-blue-600">
            View Profile
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProifleDescription;
