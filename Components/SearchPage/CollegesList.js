import React from "react";
import CollegeCard from "./CollegesCard";
import FilterDropdown from "./FitlerDropdown";
import ViewCardList from "./ViewCardList";

const CollegesList = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="flex flex-row  my-4 gap-4  border border-black">
        <div className="">
        <h1 className="">4 items listed</h1>
        </div>

           <div className="mx-4 border flex flex-row">
             <h1 className="text-lg text-gray-550">SORT BY:</h1>
              <FilterDropdown/>
             </div>

             <div className="bg-gray-300 col-span-2 ">
               <ViewCardList/>
               </div> 
        </div>
      <div className="flex flex-col ">
      {[1, 2, 3, 4,5].map((value, index) => ( <CollegeCard />))}
      </div>
    </div>
  );
};
export default CollegesList;
