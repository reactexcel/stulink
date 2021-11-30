import React from "react";
import { compare } from "../Common/Images";
import { link } from "../Common/Images";
import { establishIcon } from "../Common/Images";
import { privateUniv } from "../Common/Images";
import { naacRating } from "../Common/Images";

const CollegeTitle = () => {
  return (
    <div className="collegeTitle">
      <div className="flex">
        <div className="w-1/6">
          <img
            src="/img/iit-madras.png"
            alt="IIT Madras"
            height="auto"
            width="auto"
            className=" h-45 w-45"
          />
        </div>
        <div className="w-3/6 iitSection">
          <div>
            <p className="text-27 font-black">
              Indian Institute of Technology (IIT Madras)
            </p>
          </div>
          <div className="flex mt-5">
            <div className="flex">
              <div>
                <p className="flex text-gray-400 mb-4.5">
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
            <button className="flex my-auto bg-yellow-450 rounded-xl py-2.5 px-6 mx-14.5">
              <img
                src="/img/write-review.png"
                alt="Write Review"
                height="auto"
                width="auto"
              />
              <span className="ml-1 font-black">Write Review</span>
            </button>
          </div>
          <div className="flex text-sm mt-9">
            <div className="flex items-center">
              <img src={establishIcon} alt="icon" />
              <p className="font-black ml-1">ESTD 2003</p>
            </div>
            <div className="flex items-center mx-12">
              <img src={privateUniv} alt="icon" />
              <p className="font-black ml-1">Private University</p>
            </div>
            <div className="flex items-center">
              <img src={naacRating} alt="naacIcon" />
              <p className="font-black ml-1">NAAC Rating - A</p>
            </div>
          </div>
        </div>
        <div className="w-2/6 linkSection">
          <div className="flex justify-evenly text-xl my-4 text-center topLinkSection">
            <div className="">
              <div className="flex bg-blue-550 rounded-3xl h-12.1 w-35 justify-center items-center">
                <img src={link} alt="link" />
                <span className="text-lg text-white ml-2">Link</span>
              </div>
            </div>

            <div className="text-blue-550 font-black h-12 w-36 flex items-center ml-11">
              <img
                src={compare}
                alt="compare"
                className=" mr-1"
                height="33px"
                width="33px"
              />
              <p className="text-xl"> Compare </p>
            </div>
          </div>
          <div className="flex justify-evenly bottomLinkSection">
            <button className="flex bg-yellow-500 text-white rounded-xl h-11 w-45 items-center justify-center ">
              <img
                src="/img/brochures.png"
                alt="brochures"
                height="auto"
                width="15px"
                className="pt-1"
              />
              <span className="mx-2 my-auto">Brochures</span>
            </button>
            <button className="flex bg-blue-550 text-white rounded-xl h-11 w-45 items-center justify-center ml-8.5">
              <img
                src="/img/apply-college-icon.png"
                alt="brochures"
                height="auto"
                width="15px"
                className="pt-1"
              />
              <span className="mx-2 my-auto">Apply Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeTitle;
