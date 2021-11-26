import React, { useState, useEffect } from "react";
import CollegesList from "./CollegesList";
import FilterColleges from "./FillterColleges";
import { useDispatch, useSelector } from "react-redux";
import { getSearchCollegesRequest } from "../../Redux/action";

const SearchCollege = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.colleges);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getSearchCollegesRequest());
  }, []);

  // const filtered = getMyCommunities.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
  return (
    <div className="mx-12">
      {data && data.collegesData && data.collegesData.response ? (
        <div className="grid grid-cols-3  gap-4   ">
          <div className="bg-white  w-10/12  shadow-xl rounded-lg border ">
            <FilterColleges
              data={data?.collegesData?.response}
              search={search}
              setSearch={setSearch}
            />
          </div>
          <div className="col-span-2  w-full">
            <CollegesList
              data={data?.collegesData?.response?.data}
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
      ) : (
        <div className="text-center">loading......</div>
      )}
    </div>
  );
};

export default SearchCollege;
