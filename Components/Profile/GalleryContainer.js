import React from "react";
import { Likes } from "./LikeContainer";

const GalleryContainer = () => {
  return (
    <div>
      <Likes image={true} />
      <Likes image={true} />
    </div>
  );
};

export default GalleryContainer;
