import React from "react";
import { profileImg } from "../Common/Images";

const TrendingTopics = () => {
  const ListItem = () => {
    return (
      <div className="flex justify-between mt-12">
        <div className="flex jsutify-start">
          <p className="text-4xl font-bold text-blue-550">#</p>
          <div className="text-left mx-4">
            <p>Online Education</p>
            <p className="text-xs font-thin text-gray-400">
              Lorem ipsum dolor sit amet, consectetuer.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="shadow-2xl my-12 p-8">
      <p className="text-2xl font-semibold text-center">
        Trending <span className="text-blue-550">Topics</span>
      </p>
      <hr className="my-4" />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
};

export default TrendingTopics;
