import React from "react";

const AllNews = () => {
  return (
    <div>
      {[1,2,3,4,5].map((item,index)=>(
      <div className="bg-white mx-2 flex  my-4 border  shadow-lg rounded-lg" key={index}>
        <div className="m-3">
          <img
            className="h-40 rounded-lg"
            alt="colleges"
            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          />
        </div>
        <div className="py-1 px-2 max-w-xl my-3 ">

          <h2 className="text-lg text-gray-800 font-bold">
            BITSAT Test Centre/ City Allotment 2021 (July 12) - Check Test City
            Allotment Here
          </h2>
        
          <p className="mt-1">
            <span className="text-blue-500 font-bold py-2 pr-4">By Ramdas Sharma</span>2
            days ago
          </p>
          <p className=" text-xs my-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes .
          </p>
          <h1 className="mx-4 text-sm text-gray-500 ">Share</h1>
        </div>
      </div>
       ))}
      </div>
  );
};

export default AllNews;
