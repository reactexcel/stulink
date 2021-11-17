import React from "react";
import TrendingTopics from "../Profile/TrendingTopics";
import NotificationList from "./NotificationList";

const NotificationContainer = () => {
  return (
    <div className="my-24 grid grid-cols-6">
      <div className="col-span-4">
        <NotificationList />
      </div>
      <div className="col-span-2">
        <div className="mx-12">
          <TrendingTopics />
        </div>
      </div>
    </div>
  );
};

export default NotificationContainer;
