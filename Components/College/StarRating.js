import React from 'react'
import { ratingIcon } from "../Common/Images";
import { ratedStar } from '../Common/Images';
import { blankStar } from '../Common/Images';

const StarRating = () => {
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
            name: "Faculty & Course ",
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

    return(
       
        <div className="mt-8 w-full">
        <div className="flex justify-center items-center">
            <img src={ratingIcon} alt="ratingIcon" height="33px" width="33px" className=" mr-2.5" />
            <p className="text-blue-550 text-2xl font-black"> COLLEGE RATING
            </p>
        </div>
        <div className="grid grid-cols-7 mt-16">

            <div className="col-span-2">
                <p className=" text-blue-550">Overall Rating <span className="text-gray-450"> (Out of 5) </span>
                </p>

                <div className="flex mt-11 ml-3.5">
                    {
                        [1, 2, 3, 4, 5].map((value, index) => {

                            return (
                                <img src={selectedStar >= value ? ratedStar : blankStar} alt="ratedStar" key={index} />
                            )
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
                                    <div className="mb-6" key={index}>
                                        <p className="text-base text-gray-450">{value.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-span-2">
                        {
                            ratingData.map((value, index) => {
                                return (
                                    <div key={index} className="flex mb-4 items-center">
                                        {[1, 2, 3, 4, 5].map((notRated, i) => {
                                            return (
                                                <div key={i}>
                                                    <img src={value.rating >= notRated ? ratedStar : blankStar} alt="rated star" className="" />

                                                </div>
                                            )
                                        })}
                                        <span className="text-xs">({value.rating})</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-span-2 text-gray-450 text-sm">
                        The Verified badge indicates that the reviewers details have been verified by Stulink,
                        and reviewers are bona fide students of this college. These reviews and ratings have been
                        given by students. Stulink does not endorsed the same. Out of 276 published reviews, 253 reviews
                        are verified.
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}
export default StarRating;