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
          <p className="flex text-yellow-300">
            <img src="/img/location-icon.svg" alt="clg" className="mr-2" />
            Chandigarh
          </p>
          <p className="text-gray-400">Admission | Placement</p>
        </div>
      </div>
        <div className="text-center mb-4">
          <p className="text-blue-550">Bachelor of technology , Master of technology </p>
          <p className="text-sm">Total fees: 5.5lakh | 4 Years | On Campus | Fulltime</p>
        </div>
    </div>
  );
};

const TrendingAdmissions = () => {
  return (
    <div className="p-8">
      <div className="shadow rounded-2xl border">
        <p className="bg-green-550 text-white text-center text-2xl p-6 rounded-t-2xl">
          Trending Admissions
        </p>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};

export default TrendingAdmissions;
