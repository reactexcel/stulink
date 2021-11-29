import React from "react";
import { imageGalleryIcon} from "../Common/Images"

const ImageGallery = () => {
  return (
    <div className="my-9 p-8 shadow-lgOuter11 border w-825">
      <div className="flex items-center mb-9">
        <img src={imageGalleryIcon} alt="icon"  className="w-8 h-8" />
        <p className=" text-2xl text-blue-550 text-25 ml-2 font-black">Image Gallery</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="p-2 border rounded-xl text-center"><img src="/img/course-image-1.png" alt="" width="100%" height="auto" /></div>
        <div className="p-2 border rounded-xl text-center"><img src="/img/course-image-2.png" alt="" width="100%" height="auto" /></div>
        <div className="p-2 border rounded-xl text-center"><img src="/img/course-image-3.png" alt="" width="100%" height="auto" /></div>
      </div>
        <p className="text-blue-550 text-right mt-5">View all Images {">"}</p>
    </div>
  );
};

export default ImageGallery;
