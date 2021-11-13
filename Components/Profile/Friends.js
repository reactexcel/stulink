import React from "react";
import { profileImg } from "../Common/Images";

const friends = ["James Spiegel", "Mark Johnny", "David Sahnals"];

const Friends = () => {
  const ListItem = ({ friend }) => {
    return (
      <div className="flex">
        <img src={profileImg} alt="Profile" height="45px" width="65px" />
        <p className="my-auto text-xl font-black ml-4">{friend}</p>
      </div>
    );
  };
  return (
    <div className="shadow-2xl my-12 p-8 mx-8">
      <p className="text-2xl font-semibold text-center">
        <span className="text-blue-550">Friends</span>
      </p>
      <hr className="my-4" />
      {friends.map((friend, index) => {
        return (
          <div key={index}>
            <ListItem friend={friend} />
          </div>
        );
      })}
    </div>
  );
};

export default Friends;
