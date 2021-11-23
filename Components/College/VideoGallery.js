import React from "react";
import { videoIcon } from "../Common/Images"

const VideoGallery = () => {
    return (
              <div className="shadow mt-8 border p-8 rounded-lg">
                      <div className="flex items-center">
                    <img src={videoIcon} alt="icon" height="33px"  width="33px" />
                    <p className=" text-2xl text-blue-550 ml-2 font-black">Videos</p>
                </div>

                <div className="grid grid-cols-3">
                     <div className="box-border shadow">

                     </div>
                </div>
              </div>
    );
}
export default VideoGallery;