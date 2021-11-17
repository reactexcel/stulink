import React from "react";

const AccountSettings = () => {
  return (
    <div className="shadow p-12">
      <p className="font-black text-3xl">Account Settings</p>

      <div className="my-14">
       <p className="text-xl font-black font-Poppins">
       Do you want to be your account private ?
       </p>

       <div className="flex flex-wrap flex-col mt-4">
       <label className="items-center">
       <input type="radio" name="personal email" value="personal email"/>
        <span className="ml-4 text-xl text-gray-400">EveryOne</span>
     </label>
    
    <label className="items-center mt-4">
      <input type="radio" name="service email" value="service announcements"/>
      <span className="ml-4 text-xl text-gray-400">Only Me</span>
     </label> 
     </div> 
     </div>

     <div className="my-14">
       <p className="text-xl font-black font-Poppins">
       Who Can Friends You?
       </p>

       <div className="flex flex-wrap flex-col mt-4">
       <label className="items-center">
       <input type="radio" name="personal email" value="personal email"/>
        <span className="ml-4 text-xl text-gray-400">EveryOne</span>
     </label>
    
    <label className="items-center mt-4">
      <input type="radio" name="service email" value="service announcements"/>
      <span className="ml-4 text-xl text-gray-400">Only Me</span>
     </label> 
     </div> 
     </div>

     <div className="my-14">
       <p className="text-xl font-black font-Poppins">
       Who Can View your Posts
       </p>

       <div className="flex flex-wrap flex-col mt-4">
       <label className="items-center">
       <input type="radio" name="personal email" value="personal email"/>
        <span className="ml-4 text-xl text-gray-400">EveryOne</span>
     </label>
    
    <label className="items-center mt-4">
      <input type="radio" name="service email" value="service announcements"/>
      <span className="ml-4 text-xl text-gray-400">Only Me</span>
     </label> 
     </div> 
     </div>
     <div className="grid grid-cols-2">
       <div>
         <p className="text-xl font-black">
         List of Contacts you have Blocked
         </p>
       </div>
       <div className=" flex justify-end">
         <button className="bg-blue-550 text-white font-Poppins p-2 w-36 rounded-xl">
          <p>Block List</p>
         </button>
       </div>
     </div>

     <div className="grid grid-cols-2 mt-12">
       <div>
         <p className="text-xl font-black">
         Recently Deleted Posts
         </p>
       </div>
       <div className=" flex justify-end">
         <button className="bg-blue-550 text-white font-Poppins p-2 w-36 rounded-xl">
          <p>Deleted Posts</p>
         </button>
       </div>

     </div>

     <div className="grid w-full bg-green-100 h-72 p-10 mt-12">
          <p className="text-2xl font-black">Account Changes</p>
       
          <div className="grid grid-cols-2">
            <p className="text-xl text-gray-400 font-Poppins">Hide Your Posts and profile</p>
            <div className=" flex justify-end"> 
              <button className=" bg-black text-white rounded-xl text-lg w-64 h-12 ">Deactivate Account</button>
             </div>

             <p className="text-xl text-gray-400 font-Poppins">Delete your account and data</p>
            <div className=" flex justify-end"> 
              <button className=" bg-black text-white rounded-xl text-lg w-64 h-12 ">Close Account</button>
             </div>
          </div>

     </div>
     
    </div>
  );
};

export default AccountSettings;
