import React from "react";

const ListItem = () => {
  return (
    <div className="border-t">
      <div className="flex p-4">
        <img
          src="/img/trending-college.png"
          alt="Img"
          height="auto"
          
          width="75px"
          className="rounded-full w-20 h-20"
        />

        <div className="ml-4">
          <p className="font-black text-xl">Chandigarh University</p>
          <p className="flex text-gray-400">
            <img src="/img/location-icon.svg" alt="clg" className="mr-2" />
            Chandigarh
          </p>
        </div>
      </div>
    </div>
  );
};

const StudentsViewed = () => {
  return (
    <div className="p-8">
      <div className="shadow rounded-2xl border">
        <p className="bg-green-550 text-white text-center text-2xl p-6 rounded-t-2xl">
          STUDENTS ALSO VISITED
        </p>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default StudentsViewed;
