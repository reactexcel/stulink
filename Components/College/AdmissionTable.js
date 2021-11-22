import React from "react";

const AdmissionTable = () => {

    return (
        <div>
            <div className="grid grid-cols-2 pl-12 mt-5">
                <div className=" border-r-2">
                     <p className = " text-blue-550 text-base text-center border-t-2 border-b-2 p-3">EVENT</p>
                      <p className=" text-gray-450 text-base py-3 border-b-2 px-3"> Accommodation Check In</p>
                      <p className=" text-gray-450 text-base py-3 border-b-2 px-3"> New Student Orientation	</p>
                      <p className=" text-gray-450 text-base py-3 border-b-2 px-3"> Term Start</p>     
                </div>
                <div>
                    <p className ="text-blue-550 text-base text-center p-3 border-t-2 border-b-2">DATE</p>
                         <p className="text-base text-black py-3 border-b-2 pl-2">Wednesday, 30 June</p>
                         <p className="text-base text-black py-3 border-b-2 pl-2">Thursday, 1 – Thursday 2 July</p>
                         <p className="text-base text-black py-3 border-b-2 pl-2">Monday, 5 July</p>
                </div>
            </div>
        </div>
    );
}

export default AdmissionTable;