import React, { useState } from "react";
import Head from "next/head";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import EditProfile from "./EditProfile";
import SettingsTab from "./SettingsTabs";
import NotificationSettings from "./NotificationSettings";
import MessageSettings from "./MessageSettings";
import PasswordSettings from "./PasswordSettings";
import EducationSettings from "./EducationSettings";
import AccountSettings from "./AccountSettings";
import PrivacySettings from "./PrivacySettings";

const SettingsContainer = () => {
  const [isActive, setIsActive] = useState("Edit Profile");
  return (
    <div>
      <Head>
        <title>Settings | Stulinks</title>
      </Head>
      <Navbar />
      <div className="grid grid-cols-6 m-12 gap-12">
        <div className="col-span-1">
            <SettingsTab isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className="col-span-5">
            {isActive === "Edit Profile" && <EditProfile />}
            {isActive === "Notification" && <NotificationSettings />}
            {isActive === "Messages" && <MessageSettings />}
            {isActive === "Password" && <PasswordSettings />}
            {isActive === "Education" && <EducationSettings />}
            {isActive === "Account Settings" && <AccountSettings />}
            {isActive === "Privacy" && <PrivacySettings />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsContainer;
