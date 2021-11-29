import React from "react";
import { applied, placement, totalOffer, getJobs } from "../../Common/Images";
const RenderTable = () => {
    return (
        <tr className="border-t text-center">
            <td className="text-green-550 text-base py-4">
                2020
            </td>
            <td className='text-lg py-4'>
                50
            </td>
            <td className='text-lg py-4'>
                50
            </td>
            <td className='text-lg py-4'>
                50
            </td>
        </tr>
    )
}

const PlacementHighlight = () => {
    return (
        <div className=" shadow-lgOuter11 p-8 rounded-lg mt-6">
            <div className="flex items-center">
                <img src={placement} alt="placeement" height="33px" width="33px" />
                <p className="text-2xl ml-2 text-blue-550 font-black"> Placement Highlight</p>
            </div>

            <div className=" text-lg leading-5 mt-4 ml-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis.
            </div>
            <div className="mt-9 ml-10">
                <table className="w-full text-left">
                    <thead className="border-b">
                        <tr className="text-center">
                            <td className="pb-5"><span className=" text-green-550 text-base font-black"> Batch </span> </td>
                            <td className="pb-5">
                                <div className="flex justify-center">
                                    <img src={totalOffer} alt="offerIcon" className="h-6 w-6" />
                                    <span className=" ml-1 text-lg text-blue-550 font-black">Total Offers </span>
                                </div>
                            </td>
                            <td className="pb-5">
                                <div className="flex justify-center">
                                    <img src={applied} alt="offerIcon" className="h-6 w-5" />
                                    <span className=" ml-1 text-lg text-blue-550 font-black">Applied </span>
                                </div>
                            </td>
                            <td className="pb-5">
                                <div className="flex justify-center">
                                    <img src={getJobs} alt="offerIcon" className="h-6 w-4" />
                                    <span className=" ml-1 text-lg text-blue-550 font-black">Get Jobs </span>
                                </div>
                            </td>
                        </tr>

                    </thead>
                    <tbody>
                        <RenderTable />
                        <RenderTable />
                        <RenderTable />
                        <RenderTable />

                    </tbody>

                </table>
            </div>

        </div>
    )
}
export default PlacementHighlight;