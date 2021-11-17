import React from "react";

const CollegeTitle = () => {
  return (
    <div className="grid grid-cols-10 gap-6 p-12">
      <div className="col-span-2">
        <img
          src="/img/iit-madras.png"
          alt="IIT Madras"
          height="auto"
          width="auto"
        />
      </div>
      <div className="col-span-5">
        <div>
          <p className="text-3xl font-black">
            Indian Institute of Technology (IIT Madras)
          </p>
        </div>
        <div className="flex my-4">
          <div className="flex">
            <div>
              <p className="flex text-gray-400 my-4">
                <img
                  src="/img/location-icon.svg"
                  alt="Location"
                  height="auto"
                  width="auto"
                  className="mr-2"
                />
                Chennai, Tamil Nadu
              </p>
              <div className="flex">
                <img
                  src="/img/rating-4.png"
                  alt="Rating"
                  height="auto"
                  width="95px"
                />
                <p className="text-xs my-auto ml-4">(4.0) Review</p>
              </div>
            </div>
          </div>
          <button className="flex my-auto bg-yellow-400 rounded-xl p-2 mx-6">
            <img
              src="/img/write-review.png"
              alt="Write Review"
              height="auto"
              width="auto"
            />
            Write Review
          </button>
        </div>
        <div className="flex text-sm mt-6">
            <p className="font-black">ESTD 2003</p>
            <p className="font-black mx-12">Private University</p>
            <p className="font-black">NAAC Rating - A</p>
        </div>
      </div>
      <div className="col-span-3">
          <div className="flex justify-evenly text-xl my-4 text-center">
              <button className="text-red-500 font-black">
                  Link
              </button>
              <button className="text-blue-550 font-black">
                  Compare
              </button>
          </div>
          <div className="flex justify-evenly">
            <button className="flex bg-yellow-500 text-white p-3 rounded-xl">
                <img src="/img/brochures.png" alt="brochures" height="auto" width="15px" className="pt-1" />
                <span className="mx-2 my-auto">Brochures</span>
            </button>
            <button className="flex bg-blue-550 text-white p-3 rounded-xl">
                <img src="/img/apply-college-icon.png" alt="brochures" height="auto" width="15px" className="pt-1" />
                <span className="mx-2 my-auto">Apply Now</span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default CollegeTitle;
