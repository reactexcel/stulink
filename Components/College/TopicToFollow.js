import React from "react";
import { follow} from "../Common/Images"
import { link } from "../Common/Images";

const ListItem = () => {
    return (
         <div> 
            <div className="flex border-t justify-between px-3 py-6">
                <span className="text-base"> Educational Multimedia </span>
                 <div className="flex bg-blue-550 rounded-xl px-6 py-1 items-center">
                 <img src={link} alt="link" />
                    <span className="text-xs text-white">Link</span>
                 </div>
                </div>   
         </div>
    )
}

const TopicToFollow = () => {
    return(
           <div className="mt-8">
               <div className="shadow rounded-2xl border">
                <p className=" bg-green-550 text-base text-white p-6 text-center rounded-2xl"> 
                  <img src={follow} alt="followIcon" className="inline-block"/> 
                         <span className="ml-2">Topic to follow </span> </p>
               
                <ListItem/>
                <ListItem/>
                <ListItem/>
                </div>
           </div>
    )
}

export default TopicToFollow;