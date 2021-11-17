import React, { useState } from "react";
import FIlterBadge from "./FilterBadge";
import FilterChecklist from "./FilterChecklist";

const states = ["Punjab", "Mumbai", "Kolkata", "Kerla", "Tamil Nadu"];
const cities = ["AmritSar", "Chandigarh", "Ludihiyana", "Batala", "Patiala"];
const degrees = ["Undergraduate", "Post Graduate", "PHD", "Masters"];
const badges = ["Punjab", "Amritsar", "Underraduate"];

const FilterColleges = () => {
  return (
    <div className="flex flex-col px-4 p-2  ">
      <div className="flex flex-row justify-start mt-2 ">
        <p className="font-semibold text-lg font-Poppins ">
          Find Your <q className="text-blue-550">Dream</q> College
        </p>
      </div>
      <hr className="bg-blue-550 font-bold w-2/4 text-blue-550 h-0.5 my-3" />
      <div className="my-4 flex flex-row flex-wrap max-w-lg">
        {badges.map((item) => (
          <FIlterBadge data={item} />
        ))}
      </div>

      <input
        className="appearance-none block bg-gray-200 text-gray-700  my-2 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Search Colleges"
      />

      <div className="border-b-2 pb-4">
        <h1 className="my-2 text-lg text-gray-700  uppercase font-bold  ">
          States
        </h1>
        <FilterChecklist data={states} />
      </div>
      <div className="border-b-2 pb-4">
        <h1 className="my-2 text-lg text-gray-700   uppercase font-bold  ">
          Cities
        </h1>
        <FilterChecklist data={cities} />
      </div>
      <div className="border-b-2 pb-4">
        <h1 className="my-2 text-lg text-gray-700  uppercase font-bold  ">
          Degree
        </h1>
        <FilterChecklist data={degrees} />
      </div>

      <div className="my-2 py-1 flex flex-row justify-between ">
        <p className="text-sm text-gray-500">Price Range</p>
        <p className="text-gray-500 text-sm">0-20000000</p>
      </div>

      <input
        type="range"
        max="100"
        className="bg-blue-550  my-2 text-blue-550"
      />
    </div>
  );
};

export default FilterColleges;
