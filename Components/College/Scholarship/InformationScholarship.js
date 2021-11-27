import React from "react";
import { scholarship } from "../../Common/Images";
import { curveArrow } from "../../Common/Images";

const TextContainer = () => {
    return (
        <div className="flex my-4 border-b pb-4" >
            <img src={curveArrow} alt="arrow" className=" h-4 w-4" />
            <div>
                <p className="leading-6 text-base pl-1">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                </p>
            </div>

        </div>
    );
}

const InformationScholarship = () => {
    return (
        <div className="shadow border p-9 rounded-lg mt-6">
            <div className="flex items-center">
                <img src={scholarship} alt="scholarship" height="33px" width="33px" />
                <p className="text-2xl ml-3 text-blue-550 font-black"> Information Scholarship</p>
            </div>

            <div className="ml-10 text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
            </div>

             <div className="ml-10 mt-11">
                   <TextContainer/>
                   <TextContainer/>
                   <TextContainer/>
                   <TextContainer/>
             </div>
        </div>
    )
}
export default InformationScholarship