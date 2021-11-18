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
import { ratingIcon } from "../Common/Images";
import { ratedStar } from '../Common/Images';
import { blankStar } from '../Common/Images';

const Programmes = () => {
    return (
        <div className="rounded-lg border-2 border-gray-300 border-r-8 text-black p-3 text-center my-3 hover:bg-gray-300">
            <span className="text-xl text-center">B.sc</span>
        </div>
    );
}
const CoursesContainer = () => {
    let totalStar = [1, 2, 3, 4, 5];
    let ratingData = [
        {
            name: "Placements",
            rating: 3
        },
        {
            name: "Infrastructure",
            rating: 2
        },
        {
            name: "Faculty & Course Curriculum",
            rating: 5
        },
        {
            name: "Crowd & Campus Life",
            rating: 1
        },
        {
            name: "Value for Money",
            rating: 2
        },
    ];
    let selectedStar = 4;
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
            <div className="mt-8">
                <div className="flex justify-center items-center">
                    <img src={ratingIcon} alt="ratingIcon" height="24px" width="24px" className="p-0.5 mr-2.5 border border-blue-550 rounded-full" />
                    <p className="text-blue-550 text-2xl"> COLLEGE RATING
                    </p>
                </div>
                <div className="grid grid-cols-7 mt-16">



                    <div className="col-span-2">
                        <p className=" text-blue-550">Overall Rating <span className="text-gray-450"> (Out of 5) </span>
                        </p>

                        <div className="flex mt-11 ml-3.5">
                            {
                                [1, 2, 3, 4, 5].map((value, index) => {
                                    if (selectedStar >= value) {
                                        return (
                                            <img src={ratedStar} alt="ratedStar" />
                                        )
                                    }
                                    else {
                                        return (
                                            <img src={blankStar} alt="not rated star"/>
                                        )
                                    }
                                })
                            }
                        </div>
                        <p className=" mt-4 ml-11"> ({selectedStar}) Review</p>
                    </div>

                    <div className="col-span-5">
                        <p className="text-blue-550 ml-5">Component Ratings <span className="text-gray-450"> (Out of 5) </span></p>
                        <div className="grid grid-cols-6 mt-7">
                            <div className="col-span-2">
                                {
                                    ratingData.map((value, index) => {
                                        return (
                                            <p className="my-6 text-base text-gray-450">{value.name}</p>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-span-2">
                                {
                                    ratingData.map((value, index) => {
                                        return (
                                            <div key={index} className="flex">
                                                {[1, 2, 3, 4, 5].map((notRated, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <img src={value.rating >= notRated ? ratedStar : blankStar} alt="rated star" className="my-3" />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="col-span-2 text-gray-450 text-sm">
                                The Verified badge indicates that the reviewer's details have been verified by Stulink,
                                and reviewers are bona fide students of this college. These reviews and ratings have been
                                given by students. Stulink does not endorsed the same. Out of 276 published reviews, 253 reviews
                                are verified.
                            </div>
                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
}
export default CoursesContainer;