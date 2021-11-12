import React from "react";
import { state } from "../Common/Images";

const StateCard = ({ value }) => {
  return (
    <>
      <div className="flex flex-col rounded-xl shadow-md items-center pb-10 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <img className="py-14" src={state} />
        <p className="font-semibold text-base font-Poppins">
          {value.name}
        </p>
        <p className="font-light text-sm font-Poppins">{value.jobs}</p>
      </div>
    </>
  );
};

export default StateCard;
