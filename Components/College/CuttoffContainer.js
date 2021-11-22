import React, { useState } from "react";
import { cutOff } from "../Common/Images"
import { curveArrow } from "../Common/Images";
import { collegeCutoff } from "../Common/Images";
import { downGreenArrow } from "../Common/Images";
import { upGreenArrow } from "../Common/Images";
import Faqs from "./Faqs";
import StarRating from "./StarRating";
import StudentReview from "./StudentReview";
import { borderedHome, reviewIcon,downIcon } from "../Common/Images"

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
    const [open, setOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(-1);
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
                    <TextContainer />
                    <TextContainer />
                    <TextContainer />
                    <TextContainer />
                    <TextContainer />
                </div>
            </div>

            <div className="shadow border p-8 rounded-lg mt-8">
                <div className="flex items-center">
                    <img src={collegeCutoff} alt="icon" height="33px" width="33px" />
                    <p className=" text-2xl text-blue-550 ml-2"> IIT Madras cut-off 2020</p>
                </div>


                <div className="grid grid-cols-3 justify-center items-center border-t-2 border-b-2 p-2 mt-8">
                    <div className="grid-cols-1 text-center">
                        <span className=" text-blue-550 text-center text-lg">Course</span>
                    </div>
                    <div className="grid-cols-1 text-center">
                        <span className="text-blue-550 text-center text-lg"> Opening All India Category</span>
                    </div>
                    <div className="grid-cols-1 text-center">
                        <span className="text-blue-550 text-center text-lg"> Closing All India Category </span>
                    </div>
                </div>

                <table className="w-full">
                    {
                        [1, 2, 3, 4, 5].map((value, index) => {
                            return (
                                <>
                                    <tr className="border-b" onClick={() => { setOpen(!open), setOpenIndex(index) }} key={index}>
                                        <td className="p-2 w-1/3">
                                            <div className="flex justify-center items-center">
                                                <span className=" text-blue-550"> B.tech</span>
                                                <img src={downGreenArrow} alt="arrowIcon" className=" pl-2" />
                                            </div>
                                        </td>

                                        <td className="p-2 w-1/3">
                                            <div className="flex justify-center items-center">
                                                <img src={downGreenArrow} alt="arrowIcon" className="" />
                                                <img src={upGreenArrow} alt="arrowIcon" className=" pl-2" />
                                            </div>

                                        </td>
                                        <td className="p-2 w-1/3">
                                            <div className="flex justify-center items-center">
                                                <img src={downGreenArrow} alt="arrowIcon" className="" />
                                                <img src={upGreenArrow} alt="arrowIcon" className=" pl-2" />
                                            </div>
                                        </td>
                                    </tr>
                                    {open && index === openIndex &&
                                        [1, 2, 3, 4, 5].map((value, index) => {
                                            return (
                                                <tr className=" border-b" key={index}>
                                                    <td className="p-2 w-1/3 items-center text-center"> B.Tech Aerospace Engineering</td>
                                                    <td className="p-2 w-1/3 items-center text-center"> 20 </td>
                                                    <td className="p-2 w-1/3 items-center text-center"> 20 </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                    }

                </table>
            </div>

            <Faqs />
            <StarRating />
            <div className="mt-4 border-t-2 pt-16">

                <div className="flex justify-center items-center">
                    <img src={reviewIcon} alt="ratingIcon" height="33px" width="33px" className=" mr-2.5" />
                    <p className="text-blue-550 text-2xl font-black"> Student Reviews
                    </p>
                </div>
                <StudentReview />
                <StudentReview />
                <StudentReview />
                <p className="text-center text-blue-550 flex justify-center items-center p-3">View more
                    <img src={downIcon} alt="view more" className=" h-1.5 w-3 ml-1.5" /></p>
            </div>

        </div>
    )
}
export default CuttoffContainer;