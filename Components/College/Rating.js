import React from "react";
import RatingBar from "../Common/RatingBar";
import {rating} from "../Common/Images";
import { star } from "../Common/Images";

const Rating = () => {
  return (
    <div className="shadow-lgOuter11 p-8 rounded-xl mt-7 w-825">     
      <div className="flex items-center">
        <img src={rating} alt="icon" className=" h-8 w-8"/>
        <p className=" text-2xl text-blue-550 ml-2 font-black">Rating</p>
      </div>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 font-black text-center">
          <p className="m-12">
            <span className="border-b-8 border-l-8 border-t-8 transform rotate-45 border-green-550 rounded-full px-8 py-7">
              4.0
            </span>
          </p>
          <div className="flex-row justify-center items-center text-center">
            <img src={star} alt="star" className=" ml-16"/>
          <p>Overall Rating</p>
          </div>
        </div>
        <div className="col-span-3 mx-4">
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Academics</p>{" "}
            <RatingBar rating={2} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Diversity</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Atheletics</p> <RatingBar rating={2} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Value</p> <RatingBar rating={4} />
          </div>
        </div>
        <div className="col-span-3 mx-4">
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Professor</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Campus</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Location</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4 text-black">Dorms</p> <RatingBar rating={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
