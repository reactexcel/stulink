import React from "react";
import { scholarship } from "../../Common/Images";
  const ScholarshipList = () => {
      return (
          <div className="grid grid-cols-3 border-b divide-x">
             <div className="text-base  place-self-center col-span-1">
             {/* <div className="py-17.5 text-base mx-11 place-self-center bord"> */}
                   B.P. PODDAR SCHOLARSHIP
             </div>
    
             <div className="text-sm  place-self-center col-span-2 leading-7 p-5">
             One scholarship of Rs.1,000.00 per month (payable for 10 months in a session) is awarded to the best student of the 
             final year class of B.Tech.(Hons.)/ Dual Degree/ B.Arch.(Hons.)
             courses are taken together securing the highest CGPA at the end of the VI or VIII semester, as the case may be.
             </div>
          </div>
      )
  }

const AvailableScholarship = () => {
    return(
        <div className="shadow-lgOuter11 border p-9 rounded-lg mt-6">
        <div className="flex items-center">
            <img src={scholarship} alt="scholarship" height="33px" width="33px" />
            <p className="text-2xl ml-3 text-blue-550 font-black"> Available Scholarship</p>
        </div>
        <div className="grid grid-cols-3 border-b border-dotted border-t px-5 py-4 mt-7.5">
            <div className="col-span-1 place-self-center">
              <span className="text-blue-550"> Name of the Scholarship Scheme </span>  
            </div>
            <div className="col-span-2 place-self-center">
                <span className="text-blue-550"> Scholarship Benefits </span>
            </div>
        </div>
        <ScholarshipList/>
        <ScholarshipList/>
        <ScholarshipList/>
        </div>
    )
}
export default AvailableScholarship;