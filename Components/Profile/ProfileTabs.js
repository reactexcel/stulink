import React, { useState } from "react";
import PostContainer from "./PostContainer";

const tabs = [
  { title: "Post", img: "/img/post-icon.svg", activeImg: "/img/post-icon-active.png" },
  { title: "Reply", img: "/img/reply-icon.png", activeImg: "/img/reply-icon-active.png" },
  { title: "Like", img: "/img/like-icon.png", activeImg: "/img/like-icon-active.png" },
  { title: "Repost", img: "/img/repost-icon.png", activeImg: "/img/repost-icon-active.png" },
  { title: "Gallery", img: "/img/gallery-icon.png", activeImg: "/img/gallery-icon-active.png" },
  { title: "Topic", img: "/img/topic-icon.png", activeImg: "/img/topic-icon.png" },
];

const ProfileTabs = () => {
  const [active, setActive] = useState("Post");
  const handleActive = (tab) => {
    setActive(tab);
  };
  
  const Tabs = ({ tab }) => {
    return (
      <button
        onClick={() => handleActive(tab.title)}
        className={`flex text-xl font-black transition duration-500 transform ${
          active === tab.title ? "border-b-4 border-blue-550 text-blue-550" : ""
        } pb-4`}
      >
          <img src={active === tab.title ? tab.activeImg : tab.img} alt="" height="auto" width="20px" className="my-auto mr-3" />
        {tab.title}
      </button>
    );
  };
  return (
    <div>
      <div className="shadow-2xl flex justify-between mx-4 pt-4 px-6">
        {tabs.map((tab, index) => {
          return (
            <div key={index}>
              <Tabs tab={tab} />
            </div>
          );
        })}
      </div>
      {active === "Post" && <PostContainer />}
    </div>
  );
};

export default ProfileTabs;
