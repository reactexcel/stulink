import React from 'react';
import { sector } from '../../Common/Images';
import { yellowUpIcon } from '../../Common/Images';
 const Sector = () => {
     return(
        <div className=" shadow-lgOuter11 p-8 rounded-lg mt-6">
        <div className="flex items-center">
            <img src={sector} alt="sector Icon" height="33px" width="33px" />
            <p className="text-2xl ml-2 text-blue-550 font-black"> Sector | Placement</p>
        </div>

       <div className="shadow-lgOuter11 p-8 rounded-lg mt-6">
           <div className="grid grid-cols-3">
              <div className=" col-span-1">
                 <p className="text-green-550 text-xl leading-9"> Commerce & Banking</p>
              </div>

              <div className=" col-span-2 place-self-center">
                  <div className="flex">
                    <div className="flex mr-11 items-center">
                          <img src={yellowUpIcon} alt="upicon" className=" h-5 w-3"/>
                        <p className=" text-xs text-gray-450 ml-1">
                        No Of Placement
                        </p>
                    </div>
                    <div className="flex-col" style={{width:"180px"}}>
                     <p className=" bg-blue-550 h-1.5 absolute mt-1.5" style={{width:"11%"}}></p>
                     <p className=" bg-gray-450 w-full h-1.5 mt-1.5"> </p><span className="text-sm inline-block">100%</span>
                      </div>      
                 </div>
              </div>
           </div>
       </div>

     </div>
     )
 }
 export default Sector;
 