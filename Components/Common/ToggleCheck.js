import React from "react";

const ToggleCheck = ({ checked, onChange }) => {
    return (
        <div className="m-4 cursor-pointer" onClick={onChange}>
            <div className={`${checked ? "right-0" : "translate-x-16"} h-6 w-6 rounded-full bg-gray-200 relative z-10 top-7 ml-1 transition duration-300 transform`} />
            <div className={`${checked ? "bg-blue-550 text-white" : "bg-white text-gray-500"} h-8 w-24 rounded-full text-center border border-gray-300`} >
                <p className={`${checked ? "text-white" : "text-gray-500"} pt-1`}>{checked ? "ON" : "OFF"}</p>
            </div>
        </div>
    )
}

export default ToggleCheck;