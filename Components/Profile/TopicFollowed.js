import React from "react";
import { checkIcon } from "../Common/Images";

const Topics = [
  "Educational Multimedia",
  "Tutoring & Mentoring",
  "Health & Sports Education",
  "Cognitive Strategies",
  "Economics in Education",
  "Parental Involvement",
];

const TopicFollowed = () => {
  const ListItem = ({ friend }) => {
    return (
      <div className="flex my-8">
        <img src={checkIcon} alt="Profile" height="5px" width="20px" />
        <p className="my-auto text-lg ml-4">{friend}</p>
      </div>
    );
  };
  return (
    <div className="shadow-2xl my-12 p-8 mx-8">
      <p className="text-2xl font-semibold text-center">
        <span className="text-blue-550">Topic Followed</span>
      </p>
      <hr className="my-4" />
      {Topics.map((friend, index) => {
        return (
          <div key={index}>
            <ListItem friend={friend} />
          </div>
        );
      })}
    </div>
  );
};

export default TopicFollowed;
