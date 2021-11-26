import React, { useState } from "react";

const tabs = [
  {
    title: "All",
    img: "/img/post-icon.svg",
    activeImg: "/img/post-icon-active.png",
  },
  {
    title: "College",
    img: "/img/reply-icon.png",
    activeImg: "/img/reply-icon-active.png",
  },
  {
    title: "Result",
    img: "/img/like-icon.png",
    activeImg: "/img/like-icon-active.png",
  },
  {
    title: "General",
    img: "/img/repost-icon.png",
    activeImg: "/img/repost-icon-active.png",
  },
  {
    title: "Education",
    img: "/img/gallery-icon.png",
    activeImg: "/img/gallery-icon-active.png",
  },
  {
    title: "Student life",
    img: "/img/topic-icon.png",
    activeImg: "/img/topic-icon.png",
  },
];


  const Tab = ({ tab, isActive }) => {
    return (
      <div className={`${isActive ? "text-white  font-smibold text-lg bg-blue-550 rounded-t-lg shadow-inner p-4" : "p-4"}   cursor-pointer`}>
        <p>{tab.title} News</p>
      </div>
    );
  };
  
  const NewsTabs = ({ setTab, tab }) => {
    return (
      <div>
        <div className="flex justify-between border-b-4 border-blue-550  ">
          {tabs.map((tabs, index) => {
            return (
              <div key={index} onClick={() => setTab(tabs.title)}>
                <Tab tab={tabs} isActive={tab === tabs.title ? true : false} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

export default NewsTabs;
