import React from "react";

const NotificationSettings = () => {
  return (
    <div className="shadow p-12">
      <p className="font-black text-3xl">Notification Settings</p>
      <p className="text-xl text-gray-400 mt-3">Select push and email notifications you would like to receive.</p>
        {/* <div>
          <p className="text-2xl text-black">Notification Setting</p>
          <p className="text-lg text-gray-400">Select push and email notifications you'd like to receive.</p>
        </div> */}

      <div className="mt-20 flex flex-wrap flex-col ">
    <label className="items-center block">
       <input type="radio" className="form-radio" name="personal email" value="personal email"/>
        <span className="ml-2 text-xl text-gray-400">Send Me emails about my activity except emails i have unsubscribe from</span>
     </label>
    <label className="items-center block mt-3">
      <input type="radio" className="form-radio" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Only send me required services announcements.</span>
     </label>
     </div>

     <div className="my-20">
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
     <div className="mb-20">
    <p className ="text-xl font-black font-Poppins">
    Other Notifications
    </p>

    <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Always General announcement, updates, posts, and videos.</span>
     </label>

     <label className="items-center block mt-4">
      <input type="checkbox" name="service email" value="service announcements"/>
      <span className="ml-2 text-xl text-gray-400">Personalise tips for my page.</span>
     </label>
     <div>

       <div className="mt-20">
         <p className="text-base">
        <span className="text-blue-550"> Learn More </span>about emails from Stulink
         </p>
         <p className="text-base">
         you will always get notifications you have turned on for individual Manage<span className="text-blue-550"> All Subscriptions </span>
         </p>
       </div>
          
       <div className="grid grid-cols-2 gap-6 my-14 w-2/4">
            <button className="py-4 text-xl bg-gray-300 rounded-xl transition duration-300 hover:bg-gray-400">
              Cancel
            </button>
            <button type="submit" className="py-4 text-xl text-white bg-blue-550 rounded-xl transition duration-300 hover:bg-blue-600">
              Save Changes
            </button>
          </div>
              
     </div>

     </div>

    </div>
  );
};

export default NotificationSettings;
