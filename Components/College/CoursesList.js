import React from "react";
import { coursesIcon } from "../Common/Images";
import { bookOpen } from '../Common/Images';
import { examsAccept } from '../Common/Images';
import { eligibiltyAccept } from '../Common/Images';
import { lateralEntry } from '../Common/Images';
import { feesIcon } from '../Common/Images';
import { rightGreenArrow } from "../Common/Images";
import { availableCourse } from "../Common/Images";
import { rightYellowArrow } from "../Common/Images";
import { applyNow } from "../Common/Images";
import { downArrow } from "../Common/Images";
 

const CoursesList = () => {
    return(
        <div className="shadow-lg p-8 mt-5 rounded-lg border my-12">

        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <div className="grid grid-cols-12">
                    <img src={bookOpen} className=" col-span-1" />
                    <span className=" text-yellow-400 col-span-11"> B.Tech. (Bachelor of Technology)</span>
                </div>
            </div>
            <div className="flex justify-end">
                <span className=" text-xs text-green-550">4Years | Regular</span>
            </div>
        </div>

        <div className="grid grid-cols-2 mt-5">
            <div className="flex">
                <img src={examsAccept} alt="examsAcceptIcon" className="h-4 w-4" /><span className="ml-2">Exams Accepted | JEE Advanced </span>
            </div>
            <div className="flex">
                <img src={lateralEntry} alt="lateralEntryIcon" className="h-4 w-4" /><span className="ml-2"> Lateral Entry | Available </span>
            </div>
        </div>

        <div className="flex mt-5">
            <img src={eligibiltyAccept} alt="eligibilityAcceptIcon" className="h-4 w-4" /><span className="ml-2">Eligibility Criteria  | 10+2 with 75% + JEE Advanced</span>
        </div>

        <div className="flex mt-5 items-center">
            <img src={feesIcon} alt="feesIcon" className=" h-8 w-8" /><span className=" text-lg text-blue-550 ml-2 font-black">Fees</span>
        </div>

        <div className="mt-4">
            <div className="grid grid-cols-5 bg-gray-450 p-3 text-center">
                <p className="text-white col-span-1">Year Wise</p>
                <p className="text-white col-span-1">1</p>
                <p className="text-white col-span-1">2</p>
                <p className="text-white col-span-1">3</p>
                <p className="text-white col-span-1">4</p>
            </div>
            <div className="grid grid-cols-5 p-3 text-center shadow">
                <p className="text-black col-span-1">Total fees</p>
                <p className="text-black col-span-1">2,22,150</p>
                <p className="text-black col-span-1">2,17,600</p>
                <p className="text-black col-span-1">2,15,540</p>
                <p className="text-black col-span-1">2,17,600</p>
            </div>
            <div className="flex justify-end mt-3 text-center items-center">
                <span className=" text-green-550 pr-1.5">View Full Fee Details</span>
                <img src={rightGreenArrow} alt="rightArrow" />
            </div>
        </div>

        <div className="flex mt-5 items-center">
            <img src={availableCourse} alt="feesIcon" className=" h-8 w-8" /><span className=" text-lg text-blue-550 ml-2 font-black">Available Courses</span>
        </div>
        <div className="ml-10 grid grid-cols-3 gap-3 items-center mt-5">
            <p> <span>Computer Science and Engineering</span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>
            <p className="text-right"> <span>Artificial Intelligence </span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>
            <p className="text-right"> <span>Civil Engineering </span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>

            <p> <span>Automobile Engineering</span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>
            <p className="text-right"> <span>Biotechnology </span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>
            <p className="text-right"> <span>Aeronautical  </span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>

            <p> <span>Electronics & Communication</span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>
            <p className="text-right"> <span>Aeronautical </span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>
            <p className="text-right"> <span>Information Technology </span> <img src={rightYellowArrow} className=" inline-block" alt="arrowIcon" /></p>
        </div>

        <div className=" flex justify-center mt-6">
            <div><button className="bg-blue-550 text-white font-Poppins w-36 h-10 px-1.5 rounded"> <img src={applyNow} alt="applyICon" className=" h-5 w-5 inline-block" />Apply now</button> </div>
            <div> <button className="rounded text-black border w-36 h-10 ml-3 border-black px-1.5"> <img src={downArrow} alt="brochuresIcon" className=" h-4 w-2.5 inline-block" /> Brochures</button> </div>
        </div>

    </div>
    ); 

}

export default CoursesList;