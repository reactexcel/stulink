import React from "react";
import {trandingUpIcon} from "../Common/Images"
 
const ListItem = () => {
    return(
      <div className="flex px-9 py-3 border-t">
      <div>
          <span className="text-blue-550 text-2xl">#</span>
      </div>
      <div className="ml-2">
          <span className="text-base font-black">Online Education</span>
          <div className="text-gray-450 text-vs">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
          </div>
      </div>
  </div>           
    );
}

const TrandingTopic = () => {
    return(
        <div className=" mt-8">
        <div className="shadow rounded-2xl border">
          <p className="bg-green-550 text-white text-center text-base p-6 rounded-t-2xl">
           <img src={trandingUpIcon} alt="trandingUpIcon" className="inline-block"/>  <span className=" pl-2">Trending Topic </span>
          </p>
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
    )
}
export default TrandingTopic;