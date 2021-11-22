import React, { useState } from "react";

const FilterChecklist = ({ data }) => {
  const [checked,setChecked]=useState(false)
  return (
    <div>
      {data.map((item, index) => {
        return (
          <label key={index} className="custom-label flex mt-1 ml-3 py-1">
            <div className="bg-white border w-5 shadow-lg h-5 p-1 flex justify-center items-center mr-2">
              <input type="checkbox" className="hidden" onChange={()=>setChecked(!checked)} />
              <svg
                className="hidden w-8 h-8 text-green-600 pointer-events-none"
                viewBox="0 0 172 172"
                width="50px" height="50px"
              >
                <g
                  fill="none"
                  strokeWidth="none"
                  strokeMiterlimit="10"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                  key={index}
                >
                  <path d="M0 172V0h172v172z" />
                  <path
                    d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                    fill="currentColor"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
            <span className="select-none -mt-1">{item}</span>
          </label>
        );
      })}
        <p className="text-xs float-right underline text-gray-500">SEE MORE</p>
    </div>
  );
};

export default FilterChecklist;
