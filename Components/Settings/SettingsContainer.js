import React, { useState } from "react";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import EditProfile from "./EditProfile";
import SettingsTab from "./SettingsTabs";

const SettingsContainer = () => {
  const [isActive, setIsActive] = useState("Edit Profile");
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-6 m-12 gap-12">
        <div className="col-span-1">
            <SettingsTab isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className="col-span-5">
            {isActive === "Edit Profile" && <EditProfile />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsContainer;
