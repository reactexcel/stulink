import React, { useEffect } from "react";
import FIlterBadge from "./FilterBadge";
import FilterChecklist from "./FilterChecklist";
import { useDispatch, useSelector } from "react-redux";
import MultiRangeSlider from "./FilterMultiRange";
import { getStatesRequest } from "../../Redux/action";

const degrees = ["Undergraduate", "Post Graduate", "PHD", "Masters"];

const FilterColleges = ({ data, search, setSearch }) => {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.states);
  const filters = useSelector((state) => state.filters.filtersData);

  useEffect(() => {
    dispatch(getStatesRequest());
  }, []);

  const allState = [];
  const cities = [];
  if (
    states &&
    states.states &&
    states.states.data &&
    states.states.data.length > 0
  ) {
    for (let i = 0; i <= states.states.data.length - 1; i++) {
      allState.push(states.states.data[i]);
      for (let j = 0; j <= states.states.data[i].cities.length - 1; j++)
        cities.push(states.states.data[i].cities[j]);
    }
  }

  console.log("dsffdsgdfgdf", cities);

  return (
    <div className="flex flex-col px-4 p-2 ">
      <div className="flex flex-row justify-start mt-2 ">
        <p className="font-semibold text-lg font-Poppins ">
          Find Your <q className="text-blue-550">Dream</q> College
        </p>
      </div>
      <hr className="bg-blue-550 font-bold w-2/4 text-blue-550 h-0.5 my-3" />
      <div className="my-4 flex flex-row flex-wrap max-w-lg">
        {filters.map((item, index) => (
          <div key={index}>
            <FIlterBadge data={item} />
          </div>
        ))}
      </div>
      <input
        className="appearance-none block bg-gray-200 text-gray-700  my-2 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Search Colleges"
        value={search}
        onChange={() => setSearch(e.target.value)}
      />
      <div className="border-b-2 pb-4">
        <h1 className="my-2 text-lg text-gray-700  uppercase font-bold ">
          States
        </h1>
        <FilterChecklist data={allState} type="state" />
        <p className="text-xs float-right underline text-gray-500">SEE MORE</p>
      </div>

      <div className="border-b-2 pb-4">
        <h1 className="my-2 text-lg text-gray-700 uppercase font-bold  ">
          Cities
        </h1>
        <FilterChecklist data={cities} type="city" />
        <p className="text-xs float-right underline text-gray-500">SEE MORE</p>
      </div>

      <div className="border-b-2 pb-4">
        <h1 className="my-2 text-lg text-gray-700  uppercase font-bold  ">
          Degree
        </h1>
        {/* <FilterChecklist data={degrees} type="degree" /> */}
        <p className="text-xs float-right underline text-gray-500">SEE MORE</p>
      </div>
      <MultiRangeSlider
        min={0}
        max={1000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
};

export default FilterColleges;
