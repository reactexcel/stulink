import React from "react";
import { rankingIcon } from "../Common/Images";
import { univercityIcon } from "../Common/Images";
import { visitWebsite } from "../Common/Images";
import { link } from "../Common/Images";
const RenderTable = () => {
    return (
        <tr className="border-t">
            <td className=""> 1</td>
            <td className="p-3">
                <div className="flex">
                    <img src={univercityIcon} alt="univercityIcon" height="42px" width="42px" className=" h-10 w-10"/>
                    <div className="ml-2">
                        <p className="text-base text-black">IIT Madras</p>
                        <p className="flex text-blue-550 text-xs">
                            <img src="/img/location-icon.svg" alt="clg" className="mr-2" />
                            Madras
                        </p>
                    </div>
                </div>
            </td>
            <td className="p-3">
                <span className=" bg-blue-100 px-1.5">96</span>
            </td>
            <td className="p-3">
                <div className="flex border border-yellow-400 w-24 items-center">  
                     <p className="text-vs text-yellow-400 p-1">Visit Website</p>
                    <img src={visitWebsite} alt="visitIcon" width="10px" height="9px" className=" w-2.5 h-2 ml-1"/>
                </div>

            </td>
            <td className="p-3">
                <div className="flex bg-blue-550 rounded-xl px-6 py-1 items-center w-20">
                    <img src={link} alt="link" />
                    <span className="text-xs text-white">Link</span>
                </div>
            </td>
        </tr>
    )
}

const UnivercityRanking = () => {
    return (

        <div className="shadow rounded-lg p-8 mt-8 border">
            <div className="flex items-center">
                <img src={rankingIcon} alt="icon" height="33px" width="33px" />
                <p className=" text-2xl text-blue-550 ml-2 font-black">Universities Ranking</p>
            </div>

            <div className="ml-10 mt-5">
                <table className="w-full">
                    <tr className=" border-t">
                        <td className="p-2 text-blue-550 text-lg">Rank</td>
                        <td className="p-2 text-blue-550 text-lg"> College Name</td>
                        <td className="p-2 text-blue-550 text-lg"> NIRF Score</td>
                        <td className="p-2 text-blue-550 text-lg"></td>
                        <td className="p-2 text-blue-550 text-lg"></td>
                    </tr>
                    <RenderTable />
                    <RenderTable />
                    <RenderTable />

                </table>
            </div>

        </div>
    )
}
export default UnivercityRanking;