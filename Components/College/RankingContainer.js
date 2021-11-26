import React from "react";
import Faqs from "./Faqs";
import RankAnalysis from "./RankAnalysis";
import UnivercityRanking from "./UnivercityRanking"
import StarRating from "./StarRating";
import StudentReview from "./StudentReview";
import { reviewIcon } from "../Common/Images";
import { downIcon } from "../Common/Images";
const RankingContainer = () => {
    return (
        <>
            <RankAnalysis />
            <UnivercityRanking />
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


        </>
    );
}
export default RankingContainer;