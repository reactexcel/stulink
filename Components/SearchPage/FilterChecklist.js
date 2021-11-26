import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilters, removeFilters } from "../../Redux/action";

const FilterChecklist = ({ data ,type}) => {

const map = data.map(val=>console.log("vallll",val.id))
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.filtersData);
  const colleges = useSelector((state) => state.colleges);
   
  const handleChange = (item) => {
    let selectedBooks = value || [];
    if (selectedBooks.includes(item)) {
      dispatch(removeFilters(item));
    } else {
      dispatch(addFilters(item));
    }
  };

  return (
    <div className="h-36 overflow-auto">
      {data?.map((item, index) => {
        return (
          <label key={item.id} className="custom-label flex mt-1 ml-3 py-1">
            <div className="bg-white border w-5 shadow-lg h-5 p-1 flex justify-center items-center mr-2">
              <input
                type="checkbox"
                className="hidden"
                name={item.name}
                value={item.name}
                onChange={() => handleChange(item.name,item.id)}
                checked={value.includes(item.name)}
              />
              <svg
                className="hidden w-8 h-8 text-green-600 pointer-events-none"
                viewBox="0 0 172 172"
                width="50px"
                height="50px"
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
            <span className="select-none -mt-1">{item.name}</span>
          </label>
        );
      })}
    </div>
  );
};

export default FilterChecklist;
