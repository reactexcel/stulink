import React from "react";
import { profileImg } from "../Common/Images";

const Post = () => {
    return(
<div className="my-12 shadow-2xl p-8 rounded-xl">
      <div className="grid grid-cols-2">
        <div className="flex">
          <img src={profileImg} alt="Profile" height="45px" width="65px" />
          <div className="text-center mx-8">
            <p className="text-xl font-black">James Spiegel</p>
            <p className="text-xl text-gray-500">@JamesSpiegel</p>
          </div>
        </div>
        <div className="text-right flex flex-col justify-center">
          <p className="my-auto">
            19 hours ago{" "}
            <span className="pb-2 text-gray-400 font-extrabold text-2xl ml-3">
              ...
            </span>
          </p>
          <p className="text-gray-400">Indian Institute, Madras</p>
        </div>
      </div>
      <p className="p-8 my-6 text-xl">
        Duis aute irure #dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat #cupidatat
        #nonproident, sunt in culpa qui officia #deserunt #mollit #anim id est
        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque.
      </p>
      <div className="flex justify-between border-t-2 border-gray-300 pt-6">
        <button className="flex transition duration-300 transform hover:-translate-y-1 hover:scale-105"><img src="/img/post-like-icon.png" alt="" height="auto" width="20px" className="mr-2" />Like</button>
        <button className="flex transition duration-300 transform hover:-translate-y-1 hover:scale-105"><img src="/img/post-comment-icon.png" alt="" height="auto" width="20px" className="mr-2" />Comment</button>
        <button className="flex transition duration-300 transform hover:-translate-y-1 hover:scale-105"><img src="/img/post-repost-icon.png" alt="" height="auto" width="20px" className="mr-2" />Repost</button>
        <button className="flex transition duration-300 transform hover:-translate-y-1 hover:scale-105"><img src="/img/post-share-icon.png" alt="" height="auto" width="20px" className="mr-2" />Share</button>
      </div>
    </div>
    )
}

const PostContainer = () => {
  return (
    <div>
        <Post />
        <Post />
        <Post />
    </div>
  );
};

export default PostContainer;
