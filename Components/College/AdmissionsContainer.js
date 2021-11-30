import React from "react";
import { borderedHome, reviewIcon } from "../Common/Images"
import { rightLongArrowWhite } from "../Common/Images"
import { admissonDate } from "../Common/Images"
import { curveArrow } from "../Common/Images";
import { eligibilityIcon } from "../Common/Images";
import { selectionIcon } from "../Common/Images";
import { applyIcon } from "../Common/Images";
import { documentation } from "../Common/Images";
import { reservation} from '../Common/Images'
import Faqs from "./Faqs";
import StarRating from "./StarRating";
import StudentReview from "./StudentReview";
import { downIcon } from "../Common/Images";
import AdmissionTable from "./AdmissionTable";

const Programmes = () => {
    return (
        <div className="rounded-lg border-2 border-gray-300 border-r-8 text-black p-3 text-center my-3 hover:bg-gray-300">
            <span className="text-xl text-center">B.sc</span>
        </div>
    );
}

const TextContainer = () => {
    return (
        <div className="flex my-3" >
            <img src={curveArrow} alt="arrow" className=" h-4 w-4" />
            <div>
                <p className="leading-6 text-sm pl-1">
                    Candidates will be required to apply to UPSEE
                    in online mode only, as per the guidelines suggested by the government, on the official website of UPSEE.
                </p>
            </div>

        </div>
    );
}
const AdmissionsContainer = () => {
    return (
        <div>
            <div className="grid grid-cols-4 mt-5 gap-x-3">
                <div className="col-span-1">
                    <div className=" rounded-tl-md rounded-tr-md bg-blue-550 text-white p-3 text-center">
                        <span className=" text-xl text-center">Programmes</span>
                    </div>
                    <Programmes />
                    <Programmes />
                    <Programmes />
                    <Programmes />
                    <Programmes />
                    <Programmes />
                    <Programmes />
                    <Programmes />
                    <Programmes />
                    <Programmes />
                </div>
                <div className="col-span-3">
                    <div className="shadow p-6 border rounded-md">
                        <p className="flex text-blue-550 text-xl items-center font-black">
                            <img src={borderedHome} alt="homeIcon" className=" h-8 w-8 mr-6" />
                            WELCOME TO IIT MADRAS</p>

                        <div className="text-lg my-4 pl-12">
                            The Fall 2021 application to The Kempbelle University is now open! Start your application
                            today and get connected to a counselor so you can see if Kempbelle is the right place for you.
                        </div>
                        <div className="flex justify-end items-center">
                            <button className=" bg-blue-550 text-white w-52 h-11 flex items-center justify-center">How to Apply
                                <img src={rightLongArrowWhite} alt="arrowIcon" className="w-5" />
                            </button>
                        </div>
                    </div>


                    <div className="shadow p-6 border my-9 rounded-md">
                        <p className="flex text-blue-550 text-2xl items-center font-black">
                            <img src={admissonDate} alt="admissionIcon" className=" h-8 w-8 mr-6" />
                            Admission Date</p>
                            <AdmissionTable/>
                    </div>

                    <div className="shadow border p-6 my-9 rounded-md">
                        <p className="flex text-blue-550 text-2xl items-center font-black">
                            <img src={eligibilityIcon} alt="curvedArrow" className=" h-8 w-8 mr-6" />
                            Criteria & Eligibility</p>

                        <div className="my-8 pl-12">
                            <p className="text-xl font-black"> Criteria</p>
                            <TextContainer />
                            <TextContainer />
                        </div>
                        <div className="my-8 pl-12">
                            <p className="text-xl font-black"> Eligibility </p>
                            <TextContainer />
                            <TextContainer />

                        </div>
                    </div>

                    <div className="shadow border p-6 my-9 rounded-md">
                        <p className="flex text-blue-550 text-2xl items-center font-black">
                            <img src={selectionIcon} alt="curvedArrow" className=" h-8 w-8 mr-6" />
                            Selection</p>
                            <div className="pl-12">
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        </div>
                    </div>
                    
                    <div className="shadow border p-6 my-9 rounded-md">
                        <p className="flex text-blue-550 text-2xl items-center font-black">
                            <img src={applyIcon} alt="curvedArrow" className=" h-8 w-8 mr-6" />
                            How to Apply</p>
                            <div className="pl-12">
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        </div>
                    </div>
                    <div className="shadow border p-6 my-9 rounded-md">
                        <p className="flex text-blue-550 text-2xl items-center font-black">
                            <img src={documentation} alt="curvedArrow" className=" h-8 w-8 mr-6" />
                            Documentation</p>
                            <div className="pl-12">
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        </div>
                    </div>

                    <div className="shadow border p-6 mt-9 rounded-md">
                        <p className="flex text-blue-550 text-2xl items-center font-black">
                            <img src={reservation} alt="curvedArrow" className=" h-8 w-8 mr-6" />
                            Reservation Criteria</p>
                            <div className="pl-12">
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        <TextContainer />
                        </div>
                    </div>

                </div>
                 
            </div>
             <Faqs/>
             <StarRating/>

             <div className="mt-4 border-t-2 pt-16">

                <div className="flex justify-center items-center">
                    <img src={reviewIcon} alt="ratingIcon" height="33px" width="33px" className=" mr-2.5" />
                    <p className="text-blue-550 text-2xl font-black"> Student Reviews
                    </p>
                </div>
          <StudentReview/>
          <StudentReview/>
          <StudentReview/>
          <p className="text-center text-blue-550 flex justify-center items-center p-3">View more Reviews
         <img src={downIcon} alt="view more" className=" h-1.5 w-3 ml-1.5"/></p>
            </div>
        </div>

    )
}
export default AdmissionsContainer;