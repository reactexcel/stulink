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
                <img src={profile} alt="profilePic" class="h-8 w-8" />
            </div>
            <div className="col-span-6">
            <p class="text-xs">
           <span class="text-black font-semibold"> Mathilda Brinker </span> Like on your new <span class="text-blue-550"> Photo </span>
                 </p> 
                 <div class="flex pt-0.5">
             <img src={unsavedProfile} alt="commentIcon" class=" w-2.5 h-2 mt-0.5" /> <span class="text-xs ml-1">4 hours ago</span>
                    </div> 
                </div>
                <div className="col-span-2">
                <img src={menuIcon} alt="menuIcon" class=" mt-2.5"/>
                </div>

            </div>
    )
}

const NotificationPopup = () => {
    return (
        <div class=" rounded-lg w-80 h-auto absolute bg-white shadow">
        <div className="h-1 w-1 z-50 bg-white p-2 relative mx-auto -mt-1.5 transform rotate-45" />
        <div class="flex justify-between p-2.5">
            <span class="text-xs">Notifications</span>
            <span class="text-xs">Settings</span>
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