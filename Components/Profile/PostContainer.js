import React from "react";
import ProfileDetails, { PostActionContainer } from "../Common/ProfileDetails";

const Post = () => {
    return(
<div className="my-12 shadow-2xl p-8 rounded-xl">
      <ProfileDetails />
      <p className="p-8 my-6 text-xl">
        Duis aute irure #dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat #cupidatat
        #nonproident, sunt in culpa qui officia #deserunt #mollit #anim id est
        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque.
      </p>
      <PostActionContainer />
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
