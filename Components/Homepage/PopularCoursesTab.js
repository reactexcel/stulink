import React, { useState } from "react";

const PopularCoursesTab = () => {
  const [tab, setTab] = useState(0);

  const tabsData = [
    { tabName: "ALL" },
    { tabName: "Diploma" },
    { tabName: "Under Graduate" },
    { tabName: "Post Graduate" },
    { tabName: "Phd" },
  ];
  return (
    <>
      <div className="flex flex-row mt-8">
        {tabsData.map((value, index) => (
          <div key={index} onClick={() => setTab(index)} className={tab===index ? "font-bold text-2xl text-blue-550 cursor-pointer px-5 py-4 border-b-4 border-blue-550":"font-medium text-lg text-black cursor-pointer px-5 py-4 border-b border-gray-300"}>
            {value.tabName}
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularCoursesTab;
