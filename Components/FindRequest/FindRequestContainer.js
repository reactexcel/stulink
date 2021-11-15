import React from "react";
import RecommendedProfile from "../Profile/RecommendedProfile";
import FindRequests from "./FindRequests";
import ProifleDescription from "./ProfileDescription";

const FindRequestContainer = () => {
  return (
    <div className="my-24 grid grid-cols-6">
      <div className="col-span-4">
        <FindRequests />
      </div>
      <div className="col-span-2">
        <div className="mx-12">
          <ProifleDescription />
          <RecommendedProfile />
        </div>
      </div>
    </div>
  );
};

export default FindRequestContainer;
