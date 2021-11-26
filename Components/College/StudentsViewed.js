import React from "react";
import {graduated} from "../Common/Images"
const ListItem = () => {
  return (
    <div className="border-t">
      <div className="flex p-4">
        <img
          src="/img/trending-college.png"
          alt="Img"
          height="auto"
          
          width="75px"
          className="rounded-full w-12 h-12"
        />

        <div className="ml-4">
          <p className="font-black text-base">Chandigarh University</p>
          <p className="flex text-gray-400 text-sm">
            <img src="/img/location-icon.svg" alt="clg" className="mr-2" />
            Chandigarh
          </p>
        </div>
      </div>
    </div>
  );
};

const StudentsViewed = () => {
  return (
 
<div className="mt-8">
<div className="shadow rounded-2xl border">
  <p className="bg-green-550 text-white text-center text-base p-6 rounded-t-2xl">
    <img src={graduated} alt="icon" className="inline-block" />  <span className=" pl-2">STUDENTS ALSO VISITED </span>
  </p>
  <ListItem />
  <ListItem />
  <ListItem />
</div>
</div>
   

  );
};

export default StudentsViewed;
