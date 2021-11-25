import React from "react";
import { rankAnalysisIcon } from "../Common/Images"
import Table from "./Table"
const RankAnalysis = () => {
    return (
        <div className="shadow rounded-lg p-8 mt-8 border">
            <div className="flex items-center">
                <img src={rankAnalysisIcon} alt="icon" height="33px" width="33px" />
                <p className=" text-2xl text-blue-550 ml-2 font-black">Rank Analysis</p>
            </div>
            <div className="text-lg ml-10 mt-2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
            </div>

            <div className=" ml-10 mt-7 text-blue-550 font-black">
                <p className="text-xl">IIT Madras Ranking and Rating</p>
                <Table/>
            </div>
             

        </div>
    )
}

export default RankAnalysis;