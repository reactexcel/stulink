import React from "react";
import { useState } from "react";
import { GalleryIcon } from "../Common/Images"
import GalleryPhoto from "./GalleryPhoto"
const GalleryContainer = () => {
    const [tab, setTab] = useState("ALL");

    return (
        <div>

            <div className="shadow border p-8 rounded-lg mt-8">
                <div className="flex items-center">
                    <img src={GalleryIcon} alt="icon" height="20px" width="20px" />
                    <p className=" text-2xl text-blue-550 ml-2">Album</p>
                </div>
                <div className="flex justify-center">
                    <div className=" cursor-pointer">
                        <span className={`${tab === "ALL" ? " border-blue-550" : "border-gray-450"} p-3 text-base border-b-2 `} onClick={() => setTab("ALL")}>
                            ALL </span>
                        <span className={`${tab === "Campus" ? " border-blue-550" : "border-gray-450"} p-3 text-base border-b-2 `} onClick={() => setTab("Campus")}>
                            Campus </span>
                        <span className={`${tab === "Facility" ? " border-blue-550" : "border-gray-450"} p-3 text-base border-b-2 `} onClick={() => setTab("Facility")}>
                            Facility  </span>
                        <span className={`${tab === "Events" ? " border-blue-550" : "border-gray-450"} p-3 text-base border-b-2 `} onClick={() => setTab("Events")}>
                            Events </span>
                        <span className={`${tab === "Hostel" ? " border-blue-550" : "border-gray-450"} p-3 text-base border-b-2 `} onClick={() => setTab("Hostel")}>
                            Hostel</span>
                    </div>
                </div>
                <div className="mt-9">
                    {tab === "ALL" &&  <GalleryPhoto/>
                        // (
                        //     <p> all image will be shown here</p>
                        // )
                    }
                    {
                        tab === "Campus" &&
                        (
                            <p>campus image will be here</p>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
export default GalleryContainer;