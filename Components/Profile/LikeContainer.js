import React from "react";
import ProfileDetails, { PostActionContainer } from "../Common/ProfileDetails";

export const Likes = ({ image = false }) => {
  return (
    <div className="shadow-2xl p-8">
      <div className="flex">
        <div className="bg-red-500 rounded-full w-10 p-2">
          <img
            src="/img/post-like-icon.png"
            alt=""
            height="auto"
            width="50px"
            className="mr-2"
          />
        </div>
        <p className="my-auto text-gray-400 ml-4">
          Alex Sharm and 2 others <span className="text-red-400">Like</span> On
          This
        </p>
      </div>
      <div className="mt-12">
        <ProfileDetails />
      </div>
      <p className="m-6 text-xl text-gray-500">
        Duis aute irure <span className="text-blue-550">#dolor</span> in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat #cupidatat{" "}
        <span className="text-blue-550">#nonproident</span> .
      </p>
      <div className="flex justify-center my-4">
        {image && (
          <img
            src="/img/post-image.png"
            alt="Image"
            height="auto"
            width="100%"
          />
        )}
      </div>
      <PostActionContainer />
    </div>
  );
};

const LikeContainer = () => {
  return (
    <div>
      <Likes image={true} />
      <Likes image={false} />
      <Likes image={false} />
      <Likes image={false} />
    </div>
  );
};

export default LikeContainer;
