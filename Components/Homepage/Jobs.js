import React from "react";
import StateCard from "./StateCard";

const Jobs = () => {
  const data = [
    { name: "ARUNACHAL PRADESH", jobs: "+122" },
    { name: "UTTAR PRADESH", jobs: "+162" },
    { name: "BIHAR", jobs: "+182" },
    { name: "DELHI", jobs: "+99" },
    { name: "ARUNACHAL PRADESH", jobs: "+122" },
    { name: "UTTAR PRADESH", jobs: "+162" },
    { name: "BIHAR", jobs: "+182" },
    { name: "DELHI", jobs: "+99" },
    { name: "BIHAR", jobs: "+182" },
    { name: "DELHI", jobs: "+99" },
  ];
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-32">
        <div className="flex flex-col items-center">
          <p className="font-medium text-6xl font-Poppins text-black">Jobs</p>
          <div className="w-full grid grid-cols-5 gap-5 mt-10">
            {data.map((value, index) => {
              return <div key={index}><StateCard value={value} key={index} /></div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
