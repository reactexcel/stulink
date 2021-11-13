import React from "react";

const AboutProfile = () => {
  return (
    <div>
      <div className="shadow-2xl my-12 p-8 mx-8">
        <p className="text-3xl font-semibold text-center">
          About <span className="text-blue-550">Profile</span>
        </p>
        <hr className="my-4" />
        <div className="text-xl py-8 border-b-2 border-dotted">
          <p className="my-4 flex">
            <img
              src="/img/college-icon.png"
              alt="icon"
              height="30px"
              width="30px"
              className="mr-3"
            />
            Indian Institute , Madras{" "}
          </p>
          <p className="my-4 flex">
            <img
              src="/img/date-icon.svg"
              alt="icon"
              height="10px"
              width="25px"
              className="mr-3"
            />
            23 March
          </p>
          <p className="my-4 flex">
            <img
              src="/img/location-icon.svg"
              alt="icon"
              height="20px"
              width="15px"
              className="mr-4 ml-1"
            />
            Chandigarh
          </p>
        </div>
        <div className="my-6  border-b-2 border-dotted pb-4">
          <p className="text-xl text-blue-550 font-semibold my-4">Bio</p>
          <p>
            Hi, I’ve been drawing for years now ranging, from portraits,
            animals, flowers, manga characters, and so on. When I first started,
            it was very hard and confusing to understand the basics of drawing,
            but over time I learned it ALL BY MYSELF
          </p>
        </div>
        <div className="text-sm font-black">
          StulinkJames
          <a href="mailto:Spiegel@gmail.com">
            {" "}
            Spiegel@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutProfile;
