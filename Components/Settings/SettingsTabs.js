import React from "react";

const tabData = [
  {
    title: "Edit Profile",
    img: "/img/edit-icon-inactive.png",
    activeImg: "/img/edit-icon.png",
  },
  {
    title: "Notification",
    img: "/img/notification-icon.png",
    activeImg: "/img/notification-icon-active.png",
  },
  {
    title: "Messages",
    img: "/img/message-icon.png",
    activeImg: "/img/message-icon-active.png",
  },
  {
    title: "Password",
    img: "/img/password-icon.png",
    activeImg: "/img/password-icon-active.png",
  },
  {
    title: "Education",
    img: "/img/education-icon.png",
    activeImg: "/img/education-icon-active.png",
  },
  {
    title: "Account Settings",
    img: "/img/account-icon.png",
    activeImg: "/img/account-icon-active.png",
  },
  {
    title: "Privacy",
    img: "/img/privacy-icon.png",
    activeImg: "/img/privacy-icon-active.png",
  },
  {
    title: "Logout",
    img: "/img/logout-icon.png",
    activeImg: "/img/logout-icon.png",
  },
];

const ListItem = ({ tab, isActive }) => {
  return (
    <div>
      <div
        className={`flex justify-between rounded-lg py-4 px-2 cursor-pointer ${
          isActive ? "bg-blue-550 text-white" : ""
        }`}
      >
        <p>{tab.title}</p>
        <img
          src={isActive ? tab.activeImg : tab.img}
          alt="Edit"
          height="auto"
          width="20px"
        />
      </div>
      {/* <span className="h-0.5 w-1 my-auto z-10 transform rotate-45 bg-blue-550 p-1 relative left-64 -top-12"></span> */}
    </div>
  );
};

const SettingsTab = ({ isActive, setIsActive }) => {
  return (
    <div className="py-4">
      {tabData.map((tab, index) => {
        return (
          <div key={index} onClick={() => setIsActive(tab.title)}>
            <ListItem
              tab={tab}
              isActive={isActive === tab.title ? true : false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SettingsTab;
