import React from "react";

const RatingBar = ({rating = 5 }) => {
  return (
    <div>
        <div className={`h-1 w-1 p-2 rounded-full border-green-550 border-2 bg-white bg-opacity-80 relative top-6 left-${rating*8}`} />
      <div className="flex justify-between">
        <div>
          <hr className="w-3 px-3 py-1 bg-green-100 mt-2 rounded-l-full" />
        </div>
        <div>
          <hr className="w-3 px-3 py-1 bg-green-200 mt-2" />
        </div>
        <div>
          <hr className="w-3 px-3 py-1 bg-green-300 mt-2" />
        </div>
        <div>
          <hr className="w-3 px-3 py-1 bg-green-400 mt-2" />
        </div>
        <div>
          <hr className="w-3 px-3 py-1 bg-green-500 mt-2" />
        </div>
        <div>
          <hr className="w-3 px-3 py-1 bg-green-600 mt-2" />
        </div>
        <div>
          <hr className="w-3 px-3 py-1 bg-green-700 mt-2 rounded-r-full" />
        </div>
        <p className="my-auto ml-3">({rating})</p>
      </div>
    </div>
  );
};

export default RatingBar;