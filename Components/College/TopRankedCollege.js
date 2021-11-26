import React from "react";
import { barChart } from "../Common/Images"
import  { hatchIcon } from "../Common/Images"

const ListItem = () => {
    return (
        <div className="flex px-9 py-3 border-t items-center justify-between">
            <div className="flex items-center">
                <img src={hatchIcon} alt="hatchIcon" className="w-4 h-6"/>
                <span className="text-blue-550 text-lg ml-2"> 1</span>
            </div>
            <div>
                <img
                    src="/img/trending-college.png"
                    alt="Img"
                    height="auto"
                    width="75px"
                    className="rounded-full w-12 h-12"
                />
            </div>
            <div>
                <span> Chandigarh University</span>
            </div>

        </div>
    )
}



const TopRankedCollege = () => {
    return (
        <div className=" mt-8">
            <div className="shadow rounded-2xl border">
                <p className="bg-green-550 text-white text-center text-base p-6 rounded-t-2xl">
                    <img src={barChart} alt="barIcon" className="inline-block" />  <span className=" pl-2">Top Ranked Colleges</span>
                </p>
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>
    );
}
export default TopRankedCollege;