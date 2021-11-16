import React, {useState}  from "react";
import CollegeCardGrid from "./CollegeCardGrid";
import CollegeCard from "./CollegesCard";
import FilterDropdown from "./FitlerDropdown";
import ViewCardList from "./ViewCardList";

const CollegesList = () => {
  const [listView, setListView] = useState(false);

  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex flex-row mt-2  items-center ">
        <div className="w-2/5">
          <h1 className="">4 items listed</h1>
        </div>
        <div className=" flex flex-row w-3/5">
          <h1 className="text-lg text-gray-550 mr-2">SORT BY:</h1>
          <FilterDropdown />
        </div>
        <div className="bg-gray-200 ml-2 col-span-2">
          <ViewCardList  listView={listView} setListView={setListView} />
        </div>
      </div>
      {listView ? (
        <div className="flex flex-col ">
          {[1, 2, 3, 4, 5].map((value, index) => (
            <CollegeCard />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  mb-10  gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
            <CollegeCardGrid />
          ))}
        </div>
      )}
    </div>
  );
};
export default CollegesList;
