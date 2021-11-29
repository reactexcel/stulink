import React from "react";

const TabArray = [
  {
    title: "Information",
  },
  {
    title: "Courses",
  },
  {
    title: "Admissions",
  },
  {
    title: "Cut Off",
  },
  {
    title: "Gallery",
  },
  {
    title: "News",
  },
  {
    title: "Ranking",
  },
  {
    title: "Scholarship",
  },
  {
    title: "Placements",
  },
  {
    title: "Q&A",
  },
];

const Tab = ({ tab, isActive }) => {
  return (
    <div className={`${isActive ? "bg-white border-t-4 border-blue-550 p-5" : "p-5"} transition duration-300 hover:bg-white cursor-pointer`}>
      <p>{tab.title}</p>
    </div>
  );
};

const CollegeTabs = ({ setTab, tab }) => {
  return (
    <div>
      <div className="flex justify-around bg-gray-100 pl-31 pr-40 h-70">
        {TabArray.map((tabs, index) => {
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

export default CollegeTabs;
