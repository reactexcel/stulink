import React from "react";
import { profileImg } from "../Common/Images";

const EditProfile = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="shadow p-8">
      <p className="text-2xl font-black">EditProfile</p>
      <p className="text-lg text-gray-400">
        People on Stulink will get to know you with the info below
      </p>
      <div className="p-8 2xl:mx-80 lg:mx-24 mx-2">
        <div className="flex justify-center">
          <img src={profileImg} height="auto" width="225px" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-black mb-2">First Name</p>
              <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
                First Name
              </span>
              <input
                type="text"
                className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
                required
              />
            </div>
            <div>
              <p className="font-black mb-2">Last Name</p>
              <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
                Last Name
              </span>
              <input
                type="text"
                className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
                required
              />
            </div>
          </div>
          <div className="my-12">
            <p className="font-black mb-2">User Name</p>
            <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
              User Name
            </span>
            <input
              type="text"
              className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
              required
            />
          </div>
          <div className="my-12">
            <p className="font-black mb-2">About your Bio</p>
            <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
              Description
            </span>
            <textarea
              rows={5}
              type="text"
              className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-black mb-2">Birth Date</p>
              <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
                Your Birthday
              </span>
              <input
                type="date"
                className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl placeholder-transparent"
                required
                placeholder="Date"
              />
            </div>
            <div>
              <p className="font-black mb-2">Mobile Number</p>
              <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
                Phone Number
              </span>
              <input
                type="number"
                className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 my-12">
            <div>
              <p className="font-black mb-2">City</p>
              <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
                City
              </span>
              <input
                type="text"
                className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
                required
              />
            </div>
            <div>
              <p className="font-black mb-2">State</p>
              <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
                State
              </span>
              <input
                type="text"
                className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
                required
              />
            </div>
            <div>
              <p className="font-black mb-2">Country</p>
              <span className="text-blue-550 relative bg-white ml-2 top-3 px-1">
                Country
              </span>
              <input
                type="text"
                className="focus:outline-none border border-blue-550 py-2 px-2 w-full rounded-xl"
                required
              />
            </div>
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

export default EditProfile;
