import React from "react";
import rightLongArrowBlack from "../Common/Images"
import yellowCard from  "../Common/Images"
import card from '../Common/Images'

const GalleryPhoto = () => {
    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="grid-cols-1">
                    {/* <div className=" h-36 w-24 bg-yellow-400"> */}
                    <div>
                         <img src={card} alt="yellowCard" className="relative" width="101px" height="146px"/> 
                        {/* <p className="text-base font-Poppins text-black font-black absolute"> College Campus</p>  
                         <p className=" text-xs font-Poppins text-black font-black absolute">Main Garden</p> 
                          <img src={rightLongArrowBlack} alt="arrowIcon" className=" absolute" width="27px"/> */}
                          </div>
                    </div>
                </div>
               
        </div>
    )
}
export default GalleryPhoto;