import React from "react";
import { rightLongArrowBlack } from "../Common/Images"
import { card } from '../Common/Images'
import { campus } from "../Common/Images"
import { greenCard } from "../Common/Images"
import { mainEntrace } from "../Common/Images"
import { album1 } from '../Common/Images'
import { album2 } from '../Common/Images'
import { album3 } from '../Common/Images'
import { album4 } from '../Common/Images'

const GalleryPhoto = () => {
    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="grid-cols-1">
                  
                    <div className=" flex">
                        <div className=" h-36 w-28 bg-yellow-400 p-4">
                            <p className="text-base font-Poppins text-black font-black"> College <br />Campus</p>
                            <p className=" text-xs font-Poppins text-black font-black mt-2.5">Main Garden</p>
                            <img src={rightLongArrowBlack} alt="arrowIcon" className="mt-2.5" width="27px" />
                        </div>
                        <div className=" h-auto">
                            <img src={campus} alt="img" width="117px" height="146px" />
                        </div>

                    </div>

                    <div className="flex mt-5">    
                    <div className=" h-36 w-28 bg-blue-200 p-4">
                            <p className="text-base font-Poppins text-black font-black"> College <br />Campus</p>
                            <p className=" text-xs font-Poppins text-black font-black mt-2.5">Main Entrance </p>
                            <img src={rightLongArrowBlack} alt="arrowIcon" className="mt-2.5" width="27px" />
                        </div>
                        <div className=" h-auto">
                            <img src={mainEntrace} alt="img" width="117px" height="146px" />
                        </div>

                    </div>
                </div>
                  <div className="col-span-1">
                       <div>
                            <img src={album1} alt="image"  width="382px" height="313px"/>
                       </div>
                  </div>

                  <div className="col-span-1">
                       <div>
                            <img src={album2} alt="image" width="219px" height="313px"/>
                       </div>
                  </div>
            </div>

             <div className="grid grid-cols-3">
                 <div>
                     <div>
                         <img src={album1} alt="img" height="210px" width="223px"/>
                     </div>
                 </div>
                 <div>
                     <div>
                         <img src={album3} alt="img" height="210px" width="223px"/>
                     </div>
                 </div>
                 <div>
                     <div>
                         <img src={album4} alt="img" height="210px" width="378px"/>
                     </div>
                 </div>
              </div>  

        </div>
    )
}
export default GalleryPhoto;