import React from 'react'
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
import CoursesList from './CoursesList';
import { faqIcon } from "../Common/Images"
import Faqs from "./Faqs";
import { ratingIcon } from "../Common/Images"


const Programmes = () => {
    return (
        <div className="rounded-lg border-2 border-gray-300 border-r-8 text-black p-3 text-center my-3 hover:bg-gray-300">
            <span className="text-xl text-center">B.sc</span>
        </div>
    );
}
const CoursesContainer = () => {
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
                    <div className="flex">
                        <img src={coursesIcon} alt="coursesIcon" className=" h-8 w-8" />
                        <span className=" text-blue-500 text-2xl font-Poppins ml-2"> Courses </span>
                    </div>
                    <CoursesList />
                    <CoursesList />
                    <CoursesList />
                </div>
            </div>
            <Faqs />
            <div className="border">
                <div className="flex justify-center items-center">
              <img src={ ratingIcon} alt="ratingIcon" height="24px" width="24px" className="p-0.5 mr-2.5 border border-blue-550 rounded-full"/>
            <p className="text-blue-550 text-2xl"> COLLEGE RATING
            </p>
                </div>
           <div className="grid grid-cols-7 mt-6">
                <div className="col-span-2">
                    <p>Overall Rating (Out of 5)
                       </p>
                </div>
                <div className="col-span-5">
                  <p>Component Ratings (Out of 5)</p>
                </div>
               
               </div> 
            </div>
        </div>
    );
}
export default CoursesContainer;