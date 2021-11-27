import React from "react";
import { compare } from "../Common/Images"
import { link } from "../Common/Images";

const CollegeTitle = () => {
  return (
    <div className="grid grid-cols-10 gap-6 p-12 mx-11">
      <div className="col-span-2">
        <img
          src="/img/iit-madras.png"
          alt="IIT Madras"
          height="auto"
          width="auto"
          className="h-44 w-44"
        />
      </div>
      <div className="col-span-5">
        <div>
          <p className="text-2xl font-black">
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
            <div className="">
              {/* <button className="text-red-500 font-black">
                  Link
              </button> */}
               <div className="flex bg-blue-550 rounded-xl h-12 w-36 justify-center items-center">
                 <img src={link} alt="link" />
                    <span className="text-xl text-white ml-1">Link</span>
                 </div>
              </div>
              
              <div className="text-blue-550 font-black h-12 w-36 justify-center items-center">
                <img src={compare} alt="compare" className="inline-block mr-1"/>
                 <span className="text-xl"> Compare   </span>
               </div>
              
          </div>
          <div className="flex justify-evenly">
            
            <button className="flex bg-yellow-500 text-white rounded-xl h-11 w-44 items-center justify-center ">
                <img src="/img/brochures.png" alt="brochures" height="auto" width="15px" className="pt-1" />
                <span className="mx-2 my-auto">Brochures</span>
            </button>
            <button className="flex bg-blue-550 text-white rounded-xl h-11 w-44 items-center justify-center">
                <img src="/img/apply-college-icon.png" alt="brochures" height="auto" width="15px" className="pt-1" />
                <span className="mx-2 my-auto">Apply Now</span>
            </button>
          </div>
      </div>
    </div>
  );
};

export default CollegeTitle;
