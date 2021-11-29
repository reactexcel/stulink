import React from "react";

const RatingBar = ({rating = 5 }) => {
  return (
    <div className="">
        <div className={`h-1 w-1 p-2 rounded-full border-green-550 border-2 bg-white bg-opacity-80 relative top-6 left-${rating*5}`} />
      <div className="flex justify-between">
        <div>
        <span className="absolute -mt-4 ml-5 text-xs">1</span>
          <hr className="w-3 px-3 py-1 bg-green-120 mt-2 rounded-l-full" />
        </div>
        <div>
         <span className="absolute -mt-4 ml-5 text-xs">2</span>
          <hr className="w-3 px-3 py-1 bg-green-140 mt-2" />
        </div>
        <div>
         <span className="absolute -mt-4 ml-5 text-xs">3</span>
          <hr className="w-3 px-3 py-1 bg-green-160 mt-2" />
        </div>
        <div>
         <span className="absolute -mt-4 ml-5 text-xs">4</span>
          <hr className="w-3 px-3 py-1 bg-green-180 mt-2" />
        </div>
        <div>
         <span className="absolute -mt-4 ml-5 text-xs">5</span>
          <hr className="w-3 px-3 py-1 bg-green-220 mt-2" />
        </div>
        <div>
         {/* <span className="absolute -mt-2 ml-5 text-xs">6</span> */}
          <hr className="w-5 px-3 py-1 bg-green-550 mt-2 rounded-r-full" />
        </div>
        {/* <div>
          <hr className="w-3 px-3 py-1 bg-green-700 mt-2 rounded-r-full"/>
        </div> */}
        <p className="my-auto ml-3 text-black font-black">({rating})</p>
      </div>
    </div>
  );
};

export default RatingBar;