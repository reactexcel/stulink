import React from "react";
import { cutOff } from "../Common/Images"
import { curveArrow } from "../Common/Images";
import { collegeCutoff } from "../Common/Images";

const TextContainer = () => {
    return (
        <div className="flex my-3" >
            <img src={curveArrow} alt="arrow" className=" h-4 w-4" />
            <div>
                <p className="leading-6 text-base pl-1">
                    Candidates will be required to apply to UPSEE
                    in online mode only, as per the guidelines suggested by the government, on the official website of UPSEE.
                </p>
            </div>

        </div>
    );
}

const CuttoffContainer = () => {
    return (
        <div>
            <div className="shadow border p-8 rounded-lg mt-6">
                <div className="flex items-center">
                    <img src={cutOff} alt="cutoffIcon" height="33px" width="33px" />
                    <p className="text-2xl ml-2 text-blue-550"> Cut off Instructions</p>
                </div>

                <div className="ml-10 mt-4">
                    <span className="text-lg text-black">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
                    </span>
                </div>

                <div className="ml-10 mt-8">
                    <p className="text-xl text-blue-550 ">Cut off Points</p>
                      <TextContainer/>
                      <TextContainer/>
                      <TextContainer/>
                      <TextContainer/>
                      <TextContainer/>        
                </div>
            </div>

            <div className="shadow border p-8 rounded-lg mt-8">
               <div className="flex items-center">
                   <img src={collegeCutoff} alt="icon" height="33px" width="33px"/> 
                   <p className=" text-2xl text-blue-550 ml-2"> IIT Madras cut-off 2020</p>
               </div>
            </div>

        </div>
    )
}
export default CuttoffContainer;