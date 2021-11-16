import React, { useState } from "react";
import { profile } from "../Common/Images";


const Notification = () => {
    return (
        <div className="grid grid-cols-10 mt-4 mx-4 border-b py-2">
            <div className="col-span-2">
                <img src={profile} alt="profilePic" className="h-8 w-8" />
            </div>
            <div className="col-span-6">
                <p className="text-xs">
                    <span className="text-black font-black">Mathilda Brinker </span>
                    <p className="text-xs">Lorem ipsum dolor sit amet, consec adipiscing...</p>
                </p>
            </div>
            <div className="col-span-2">
                <p className="text-xs text-gray-500 text-right mx-1">10:30PM</p>
                <div className="flex justify-end">
                    <span className="bg-blue-550 px-1.5 mt-2 text-white text-xs font-extralight rounded-full">1</span>
                </div>
            </div>

        </div>
    )
}

const ProfileMessagePopup = () => {
    return (
        <div className=" rounded-lg w-80 h-auto absolute bg-white shadow">
            <div className="h-1 w-1 z-50 bg-white p-2 relative mx-auto -mt-1.5 transform rotate-45" />
            <div className="flex justify-between p-2.5">
                <span className="text-xs">Messages</span>
                <span className="text-xs">Settings</span>
            </div>
            <hr></hr>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <button className="bg-blue-550 text-white text-center w-full py-2 rounded-b-lg">View All</button>
        </div>
    )
}
export default ProfileMessagePopup;