import React from "react";

const SearchPageHeader = () => {
  return (
    <div className="max-w-screen-xl mx-auto  my-12">
      <div class="grid grid-cols-3 items-center gap-20  ">
        <div class="max-w-lg h-50 bg-white rounded-xl text-center shadow-xl border-gray-300 p-6  ">
          <h4 id="name" class="text-xl font-semibold my-4 h-12">
            Top MBA College In India 2021
          </h4>
          <p class="text-black text-sm">
            Find out scholership calender in india
          </p>
          <p class="text-gray-500 underline font-semibold text-lg uppercase my-4 cursur pointer">
            see more details
          </p>
        </div>

        <div class="max-w-lg h-50 bg-white rounded-xl text-center shadow-xl border-gray-300 p-6 ">
          <button
            id="name"
            class="text-xl font-semibold  mx-auto  cursor-pointer  mt-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-12"
              viewBox="0 0 20 20"
              fill="#29ABE2"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p class="text-black text-lg font-bold">ADD APPLICATION</p>
          <p class="text-black text-sm my-1">
            Will Supporting text below as a natural
          </p>
          <button
            type="submit"
            className="p-2 rounded-lg my-2 px-5  mx-auto bg-blue-550 flex flex-row items-center justify-center  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <p className="text-white font-Poppins font-medium text-base text-center">
              NEW APPLICATION
            </p>
          </button>
        </div>

        <div class="max-w-lg h-50 bg-white rounded-xl text-center shadow-xl border-gray-300 p-6 ">
          <h4 id="name" class="text-xl font-semibold h-12 my-4">
            Find out scholership calender in india 2021
          </h4>
          <p class="text-black text-sm">
            Find out scholership calender in india
          </p>
          <p class="text-gray-500 underline font-semibold text-lg uppercase my-4 cursor-pointer">
            see more details
          </p>
        </div>
      </div>
    </div>
  );
};
export default SearchPageHeader;
