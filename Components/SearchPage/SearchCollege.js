import React from "react";
import CollegesList from "./CollegesList";
import FilterColleges from "./FillterColleges";

const SearchCollege = () => {
  return (
    <div className="mx-12">
      <div class="grid grid-cols-3 items-center gap-4   ">
        <div className="bg-white  w-10/12  shadow-xl rounded-lg border ">
          <FilterColleges />
        </div>
        <div className="col-span-2  w-full">
          <CollegesList />
        </div>
      </div>
    </div>
  );
};

export default SearchCollege;
