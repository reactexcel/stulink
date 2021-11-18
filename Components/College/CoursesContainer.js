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
 

const Programmes = () =>{
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
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                     <Programmes/>
                </div>
                <div className="col-span-3">
                    <div className="flex">
                        <img src={coursesIcon} alt="coursesIcon" className=" h-8 w-8" />
                        <span className=" text-blue-500 text-2xl font-Poppins ml-2"> Courses </span>
                    </div>    
                    <CoursesList/>
                    <CoursesList/>
                    <CoursesList/>
                </div>
            </div>

            <div className="shadow-md border p-2">
                <p className=" text-blue-550 text-2xl text-center flex justify-center items-center"> <img  src={faqIcon} alt="faq icon" className=" h-5 w-5 mr-3"/>FAQs About IIT MADRAS</p>
                 
                </div> 
        </div>
    );
}
export default CoursesContainer;