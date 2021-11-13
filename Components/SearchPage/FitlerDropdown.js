import React from "react";

const FilterDropdown = () => {
  return (
    <div className="group inline-block">
      <select className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32">
        <span className="pr-1 font-semibold flex-1">Default Value</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
        <option className="rounded-sm bg-grey-500 px-3 py-1 hover:bg-gray-100">Fees</option>
        <option className="rounded-sm px-3 py-1 hover:bg-gray-100">
          Newest
        </option>
        <option className="rounded-sm bg-grey-500  relative px-3 py-1 hover:bg-gray-100">
          Oldest
        </option>
        <option className="rounded-sm  bg-grey-500  relative px-3 py-1 hover:bg-gray-100">
          Top Rated
        </option>
      </select>
    </div>
  );
};

export default FilterDropdown;
