import React from "react";
import { profileImg } from "../Common/Images";

const Notification = () => {
  return (
    <div className="md:mx-8 my-12">
      <div className="p-8 border-b-2">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-4 flex">
            <div>
              <img src={profileImg} alt="Profile" height="auto" width="auto" />
            </div>
            <div className="my-auto">
              <div className="mx-auto text-left ml-4">
                <p>
                  <span className="font-black">Mathilda Brinker </span>
                   commented on your new 
                   <span className="text-blue-550"> profile status</span>.
                </p>
              </div>
              <div className="text-sm flex justify-between ml-4">
                <p className="my-4 flex">
                  <img
                    src="/img/post-comment-icon.png"
                    alt="icon"
                    height="20px"
                    width="20px"
                    className="mr-2 ml-1"
                  />
                  <span className="my-auto">4 hours ago</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex">
            <button className="text-xl text-white bg-blue-550 rounded py-2 px-12 my-auto mx-3">
              Linked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationList = () => {
  return (
    <div className="mx-20">
      <p className="font-black text-2xl">FIND REQUESTS</p>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </div>
  );
};

export default NotificationList;
