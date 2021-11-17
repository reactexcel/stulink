import React from "react";

const EducationSettings = () => {
  return (
    <div className="shadow p-12 ">
      <p className="font-black text-3xl">Education</p>
     <div className="w-3/4">   
     <div className="flex flex-wrap flex-col mt-12">
       <label className="items-center block">
       <input type="checkbox" name="personal email" value="personal email"/>
        <span className="ml-4 text-xl text-gray-400">Graduate</span>
     </label>

    <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-4 text-xl text-gray-400">Masters</span>
     </label>
       </div>

       <div className="my-12">
            <p className="font-black mb-2 text-lg font-Poppins">Select College </p>
            <span className="text-blue-550 relative bg-white ml-2 top-3 px-1 text-base">
             College
            </span>
            <input
              type="text"
              className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
              required
            />
      </div>

      <div className="my-12">
            <p className="font-black mb-2 text-lg font-Poppins">Select Stream </p>
            <span className="text-blue-550 relative bg-white ml-2 top-3 px-1 text-base">
            Stream
            </span>
            <input
              type="text"
              className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
              required
            />
      </div>
        
      <div className="grid grid-cols-2 gap-6">
            <button className="w-full py-4 text-xl bg-gray-300 rounded-xl transition duration-300 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="w-full py-4 text-xl text-white bg-blue-550 rounded-xl transition duration-300 hover:bg-blue-600">
              Save Changes
            </button>
          </div>
  </div>
     
    </div>
  );
};

export default EducationSettings;
