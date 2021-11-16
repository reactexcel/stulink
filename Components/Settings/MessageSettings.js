import React from "react";

const MessageSettings = () => {
  return (
    <div className="shadow p-12">
      <p className="font-black text-3xl">Message Settings</p>
      <p className="text-lg text-gray-400 mt-4">Set your login preference, help us personalize your experience and make big account change here.</p>
       
      <div className="mt-14">
       <p className="text-xl font-black font-Poppins">
       i would like to receive emails and updates from Stulink about
       </p>

       <div className="flex flex-wrap flex-col mt-4">
       <label className="items-center block">
       <input type="checkbox" name="personal email" value="personal email"/>
        <span className="ml-2 text-xl text-gray-400">Always General announcement, updates, posts, and videos.</span>
     </label>

    <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Personalise tips for my page.</span>
     </label>

     <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Announcements and recommendations</span>
     </label>
       </div>
         
     </div>

     <div className="mt-20">
       <p className="text-xl font-black font-Poppins">
         Other Messages
       </p>

       <div className="flex flex-wrap flex-col mt-4">
       <label className="items-center block">
       <input type="checkbox" name="personal email" value="personal email"/>
        <span className="ml-2 text-xl text-gray-400">From Recommended videos.</span>
     </label>

    <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Messages from activity on my page or channel</span>
     </label>

     <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Message me the replyer Activity on my comments</span>
     </label>
       

       <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Reply to comments</span>
     </label>
       
     <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Mentions.</span>
     </label>
  
         
     </div>
     </div>
      <p className=" text-xl font-black mt-14"> you will always get notifications you have turned on for individual Manage All Subscriptions
    </p>

    <div className="grid grid-cols-2 gap-6 my-14 w-2/4">
            <button className="py-4 text-xl bg-gray-300 rounded-xl transition duration-300 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="py-4 text-xl text-white bg-blue-550 rounded-xl transition duration-300 hover:bg-blue-600">
              Save Changes
            </button>
          </div>
    </div>
  );
};

export default MessageSettings;
