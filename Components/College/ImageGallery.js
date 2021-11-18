import React from "react";

const ImageGallery = () => {
  return (
    <div className="my-12 p-8 shadow-2xl border">
      <p className="text-blue-550 text-2xl font-black my-8">Image Gallery</p>
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
