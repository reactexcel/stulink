import React from 'react';

const FIlterBadge =({data})=>{
    return(
        <div className="flex max-w-sm justify-center items-center m-1 text-xs p-2 text-white  rounded-full bg-blue-550 ">
        <div className="text-xs font-normal leading-none max-w-full ">{data}</div>
        <div className="flex flex-auto flex-row-reverse">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x cursor-pointer hover:text-indigo-400 rounded-full w-4 h-4 ml-2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
        </div>
    </div>
    )
}
export default FIlterBadge;