import React from "react";
import { videoIcon } from "../Common/Images"

const VideoGallery = () => {
  return (
    <div className="shadow mt-8 border p-8 rounded-lg">
      <div className="flex items-center">
        <img src={videoIcon} alt="icon" height="33px" width="33px" />
        <p className=" text-2xl text-blue-550 ml-2 font-black">Videos</p>
      </div>

      <div className="grid grid-cols-3 mt-4 gap-9">

        <div className="col-span-1">
           
           <iframe width="560" height="315" src="https://www.youtube.com/embed/JA3t27eBL3M" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
           className="h-auto w-auto border-8 border-white shadow left-0 top-0"
           >

           </iframe>

        </div>
        <div className="col-span-1">
         
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JA3t27eBL3M" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
           className="h-auto w-auto border-8 border-white shadow left-0 top-0"
           ></iframe>
        </div>
        <div className="col-span-1">
        
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JA3t27eBL3M" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
           className="h-auto w-auto border-8 border-white shadow left-0 top-0"
           ></iframe>
        </div>

        <div className="col-span-1">
         
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JA3t27eBL3M" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
           className="h-auto w-auto border-8 border-white shadow left-0 top-0"
           ></iframe>
        </div>

        <div className="col-span-1">
         
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JA3t27eBL3M" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
           className="h-auto w-auto border-8 border-white shadow left-0 top-0"
           ></iframe>
        </div>

        <div className="col-span-1">
           
           <iframe width="560" height="315" src="https://www.youtube.com/embed/JA3t27eBL3M" title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
           className="h-auto w-auto border-8 border-white shadow left-0 top-0"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
export default VideoGallery;