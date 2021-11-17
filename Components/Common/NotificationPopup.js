import React, { useState } from "react";
import { profile } from "../Common/Images";
import { menuIcon } from "../Common/Images";
import { commentIcon } from "../Common/Images";
import { unsavedProfile } from "../Common/Images";

 
const NotificationRow = () =>
{
    return (
        <div className="grid grid-cols-10 mt-4 mx-4 border-b py-2">
            <div className="col-span-2">
                <img src={profile} alt="profilePic" className="h-8 w-8" />
            </div>
            <div className="col-span-6">
            <p className="text-xs">
           <span className="text-black font-semibold"> Mathilda Brinker </span> Like on your new <span className="text-blue-550"> Photo </span>
                 </p> 
                 <div className="flex pt-0.5">
             <img src={unsavedProfile} alt="commentIcon" className=" w-2.5 h-2 mt-0.5" /> <span className="text-xs ml-1">4 hours ago</span>
                    </div> 
                </div>
                <div className="col-span-2">
                <img src={menuIcon} alt="menuIcon" className=" mt-2.5"/>
                </div>

            </div>
    )
}

const NotificationPopup = () => {
    return (
        <div className=" rounded-lg w-80 h-auto absolute bg-white shadow">
        <div className="h-1 w-1 z-50 bg-white p-2 relative mx-auto -mt-1.5 transform rotate-45" />
        <div className="flex justify-between p-2.5">
            <span className="text-xs">Notifications</span>
            <span className="text-xs">Settings</span>
        </div>
        <hr></hr>
    
        <NotificationRow/>
        <NotificationRow/>
        <NotificationRow/>
        <NotificationRow/>
        <button className="bg-blue-550 text-white text-center w-full py-2 rounded-b-lg">View All</button>
      </div>
    )
}
export default NotificationPopup;