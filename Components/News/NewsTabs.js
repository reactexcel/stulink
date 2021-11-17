import React, { useState } from "react";
import AllNews from "./AllNews";

const tabs = [
  {
    title: "All",
    img: "/img/post-icon.svg",
    activeImg: "/img/post-icon-active.png",
  },
  {
    title: "Colleges News",
    img: "/img/reply-icon.png",
    activeImg: "/img/reply-icon-active.png",
  },
  {
    title: "Result News",
    img: "/img/like-icon.png",
    activeImg: "/img/like-icon-active.png",
  },
  {
    title: "General News",
    img: "/img/repost-icon.png",
    activeImg: "/img/repost-icon-active.png",
  },
  {
    title: "Education News",
    img: "/img/gallery-icon.png",
    activeImg: "/img/gallery-icon-active.png",
  },
  {
    title: "Student life News",
    img: "/img/topic-icon.png",
    activeImg: "/img/topic-icon.png",
  },
];

const NewsTabs = () => {
  const [active, setActive] = useState("Result News");
  const handleActive = (tab) => {
    setActive(tab);
  };

  const Tabs = ({ tab }) => {
    return (
      <button
        onClick={() => handleActive(tab.title)}
        className={`flex text-xl font-black transition duration-500  items-center transform ${
          active === tab.title
            ? "bg-blue-550 border-b-4 text-white border-blue-550 "
            : ""
        } pb-4`}
      >
        {tab.title}
      </button>
    );
  };

  return (
    <div>
      <div className="shadow-xl flex justify-between ">
        {tabs.map((tab, index) => {
          return (
            <div key={index} className="max-w-xl 2xl ">
              <Tabs tab={tab} />
            </div>
          );
        })}
      </div>
      <div className="my-12 border shadow-xl  ">
          <div className="mx-8 max-w-11/12">
          <h1 className="text-blue-550 text-2xl font-semibold my-4">{active}</h1>
      {active && <AllNews/> }
      </div>
      </div>

    </div>
  );
};

export default NewsTabs;
