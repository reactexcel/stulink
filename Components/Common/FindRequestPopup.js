import React, { useState } from "react";
import { profile } from "../Common/Images";
import {Linked} from "../Common/Images";
import { unlinkedIcon } from "../Common/Images";
import { institutionBlue} from "../Common/Images";

const ProfileRow  = () =>
{
  return (
    <div className="grid grid-cols-10 mt-4 mx-4 border-b py-2">
        <div className="col-span-2">
                <img src={profile} alt="profilePic" className="h-8 w-8" />
           </div>
           <div className="col-span-6">
           <p className="font-bold text-sm">Alex Khotanras</p>
           <p className="text-xs text-gray-400">
            <span className="from-gray-400">stulink@AlexKhotanras</span>
            </p>
            <div className="flex">
            <img src={institutionBlue} alt="instituionIcon" className="w-2.5 h-2.5"/>
          <p className="text-xs semibold">Chandigarh University</p>
          </div>
             </div>
         <div className="col-span-2">
         <button
            type="submit"
            className="bg-blue-550 flex flex-row px-2 items-center py-1"
          >
          <img alt="linkedIcon" src={Linked} className=""/>
            <p className="text-white font-Poppins font-medium text-xs text-center pr-3.5">
            Linked
            </p>
          </button>
         </div>
      </div>

  )
}
const UnlinkedProfileRow  = () =>
{
  return (
    <div className="grid grid-cols-10 mt-4 mx-4 border-b py-2">
        <div className="col-span-2">
                <img src={profile} alt="profilePic" class="h-8 w-8" />
           </div>
           <div className="col-span-6">
           <p className="font-bold text-sm">Alex Khotanras</p>
           <p className="text-xs text-gray-400">
            <span className="from-gray-400">stulink@AlexKhotanras</span>
            </p>
            <div className="flex">
            <img src={institutionBlue} alt="instituionIcon" className="w-2.5 h-2.5"/>
          <p className="text-xs semibold">Chandigarh University</p>
          </div>
             </div>
         <div className="col-span-2">
         <button
            type="submit"
            className=" bg-gray-100 flex flex-row px-2 items-center py-1"
          >
         <img alt="linkedIcon" src={unlinkedIcon} className=""/>
            <p className="text-black font-Poppins font-medium text-xs text-center pr-3.5">
            Linked
            </p>
          </button>
         </div>
      </div>

  )
}

const FindRequestPopup = () =>
{
    return(
      <div class=" rounded-lg w-80 h-auto absolute bg-white shadow">
      <div className="h-1 w-1 z-50 bg-white p-2 relative mx-auto -mt-1.5 transform rotate-45" />
      <div class="flex justify-end p-2.5">
            <span class="text-xs">Settings</span>
        </div>
        <hr></hr>
        <ProfileRow/>
        <UnlinkedProfileRow/>
        <UnlinkedProfileRow/>
        <UnlinkedProfileRow/>
        
        <button className="bg-blue-550 text-white text-center w-full py-2 rounded-b-lg">View All</button>
      </div>

    );
}

export default FindRequestPopup;