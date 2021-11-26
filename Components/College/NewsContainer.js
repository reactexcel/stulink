import React  from "react";
import { news } from "../Common/Images"

const NewsContainer = () => {
     return (
         <div className="shadow border p-8 rounded-lg mt-8">

               <div className="flex items-center">
                    <img src={news} alt="icon" height="33px" width="33px" />
                    <p className=" text-2xl text-blue-550 ml-2 font-black">Latest News</p>
                </div> 
                
                   
         </div>
     )
}

export default NewsContainer;