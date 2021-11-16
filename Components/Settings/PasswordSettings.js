import React from "react";

const PasswordSettings = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="shadow p-12">
      <p className="font-black text-3xl">Change Password</p>
      <div className="p-8 2xl:mx-80 lg:mx-24 mx-2">
      <form onSubmit={handleSubmit}>
         
      <div className="my-12">
            <p className="font-black mb-2 text-lg">Current Password</p>
            <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
            Current Password
            </span>
            <input
              type="text"
              className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
              required
            />
          </div>
       
          <div className="my-12">
            <p className="font-black mb-2 text-lg">New Password</p>
            <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
            New Password
            </span>
            <input
              type="text"
              className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
              required
            />
          </div>

          <div className="my-12">
            <p className="font-black mb-2 text-lg">Confirm Password</p>
            <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
            Confirm Password
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

        </form>
        </div>
    </div>
  );
};

export default PasswordSettings;
