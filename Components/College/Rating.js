import React from "react";
import RatingBar from "../Common/RatingBar";

const Rating = () => {
  return (
    <div className="shadow-xl p-8 rounded-xl">
      <p className="text-blue-550 text-xl font-black">Rating</p>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 font-black text-center">
          <p className="m-12">
            <span className="border-b-8 border-l-8 border-t-8 transform rotate-45 border-green-550 rounded-full px-8 py-7">
              4.0
            </span>
          </p>
          <p>Overall Rating</p>
        </div>
        <div className="col-span-3 mx-4">
          <div className="my-4 flex justify-between">
            <p className="pt-4">Academics</p>{" "}
            <RatingBar rating={5} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4">Diversity</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4">Atheletics</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4">Value</p> <RatingBar rating={4} />
          </div>
        </div>
        <div className="col-span-3 mx-4">
          <div className="my-4 flex justify-between">
            <p className="pt-4">Professor</p> <RatingBar rating={5} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4">Campus</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4">Location</p> <RatingBar rating={4} />
          </div>
          <div className="my-4 flex justify-between">
            <p className="pt-4">Dorms</p> <RatingBar rating={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
