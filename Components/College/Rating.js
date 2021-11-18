import React from "react";

const Rating = () => {
  return (
    <div className="shadow-xl p-8 rounded-xl">
      <p className="text-blue-550 text-xl font-black">Rating</p>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2 font-black text-center">
          <p className="m-12">
            <span className="border-b-8 border-l-8 border-t-8 transform rotate-45 border-green-550 rounded-full px-8 py-7">
              4.0
            </span>
          </p>
          <p>Overall Rating</p>
        </div>
        <div className="col-span-3 mx-4">
          <div className="my-4 flex justify-between"><p>Academics</p> <p className="text-green-550 font-black">---------------- (5)</p></div>
          <div className="my-4 flex justify-between"><p>Diversity</p> <p> ---------------- (4)</p></div>
          <div className="my-4 flex justify-between"><p>Atheletics</p> <p>---------------- (4)</p></div>
          <div className="my-4 flex justify-between"><p>Value</p> <p>---------------- (5)</p></div>
        </div>
        <div className="col-span-3 mx-4">
          <div className="my-4 flex justify-between"><p>Professor</p> <p>---------------- (5)</p></div>
          <div className="my-4 flex justify-between"><p>Campus</p> <p>---------------- (4)</p></div>
          <div className="my-4 flex justify-between"><p>Location</p> <p>---------------- (4)</p></div>
          <div className="my-4 flex justify-between"><p>Dorms</p> <p>---------------- (5)</p></div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
