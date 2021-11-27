import React from "react";
import { scholarship } from "../../Common/Images";
  const ScholarshipList = () => {
      return (
          <div className="grid grid-cols-2 border-b mt-6">
             <div className="py-17.5 text-base mx-11 place-self-center bord">
                   B.P. PODDAR SCHOLARSHIP
             </div>

             <div className="text-sm py-17.5 mx-11 place-self-center">
             One scholarship of Rs.1,000.00 per month (payable for 10 months in a session) is awarded to the best student of the 
             final year class of B.Tech.(Hons.)/ Dual Degree/ B.Arch.(Hons.)
             courses are taken together securing the highest CGPA at the end of the VI or VIII semester, as the case may be.
             </div>
          </div>
      )
  }

const AvailableScholarship = () => {
    return(
        <div className="shadow border p-9 rounded-lg mt-6">
        <div className="flex items-center">
            <img src={scholarship} alt="scholarship" height="33px" width="33px" />
            <p className="text-2xl ml-3 text-blue-550 font-black"> Available Scholarship</p>
        </div>
        <div className="grid grid-cols-2 border-b border-dotted px-5 py-4 mt-7.5">
            <div className="">
              <span className="text-blue-550"> Name of the Scholarship Scheme </span>  
            </div>
            <div>
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