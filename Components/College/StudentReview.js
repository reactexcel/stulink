import React from 'react'
import { profileImg } from '../Common/Images';

const StudentReview  = () =>  
{
    return (
        <div className="mt-9">
        <div className="flex items-center">
          <img src={profileImg} alt="profileImage" className=" h-16 w-16"></img>
           <div>
            <p className=" text-gray-450 text-base"> <span className="font-black text-base text-black">Ramanakanth Reddy </span> | B.Tech. in Electrical Engineering (Power and Automation) - Batch of 2021</p>
            <p className="text-xs font-black">Reviewed on 27 Feb 2021</p>
           </div>
        </div>
        <div>
        <div className="h-1 w-1 z-50 bg-gray-100 p-2 relative mx-auto  transform rotate-45 top-2 right-96" />
        <div className=" bg-gray-100 rounded-full p-10 shadow">    
              <div className=" text-sm text-black mx-1.5">
              It is one of the best ranked engineering college in india. It has huge campus with clean green 
              environment and provides lot of opportunities to the students. I had given manpial University entrance
               exam to take admission here.This exam was tough but i cracked it (lot of determination need). You can 
               no doubt opt for this college as it is one of the best.
              </div>
        </div>
        </div>
        
     </div>   
    );
}
export default StudentReview;