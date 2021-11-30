import React, { useState } from "react";
import { logo, login, signup, home } from "./Images";
import { useRouter } from "next/router";
import FindRequestPopup from "./FindRequestPopup";
import NotificationPopup from "./NotificationPopup";
import ProfileMessagePopup from "./ProfileMessagePopup";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className="bg-black">
      <div className="navbarSection text-white text-base py-3">
        <div className="flex justify-between md:mx-30 mx-2">
          <div>
            <p className="text-xs">DATE: 20th August 2021</p>
          </div>
          <div className="flex md:flex-row flex-col justify-between">
            <p className="mx-4 text-xs ">Privacy Policy</p>
            <p className="mx-4 text-xs">Terms and conditions</p>
            <p className="mx-4 text-xs">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SecondSection = ({ isLoggedin }) => {
  const router = useRouter();
  const [popup, setPopup] = useState("");
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignup = () => {
    router.push("/signup");
  };
  return (
    <div className="bg-blue-950">
      <div className=" navbarSection">
        <div className="grid md:grid-cols-7 grid-cols-1 md:p-3 p-1 md:gap-4 gap-12">
          <div className="col-span-2 my-auto ml-12 flex justify-end place-self-center">
            <Link href="/">
              <img
                src={logo}
                alt="STULINK"
                height="40px"
                width="200px"
                className=" h-16"
              />
            </Link>
          </div>
          <div className="col-span-3 my-auto">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="SEARCH"
                className="focus:outline-none w-full text-lg p-3 rounded"
                value={search}
                onChange={handleSearch}
              />
            </form>
          </div>
          <div className="col-span-2 my-auto place-self-start">
            {!isLoggedin ? (
              <div className="flex justify-center">
                <button className="flex text-white border border-white rounded-full text-2xl mx-2 py-2 px-4 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <img
                    src={login}
                    alt="Login"
                    height="auto"
                    width="auto"
                    className="my-auto mr-2"
                  />{" "}
                  Login
                </button>
                <button
                  onClick={handleSignup}
                  className="flex bg-white rounded-full text-2xl mx-2 py-2 px-4 transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <img
                    src={signup}
                    alt="signup"
                    height="auto"
                    width="auto"
                    className="my-auto mr-2"
                  />{" "}
                  Signup
                </button>
              </div>
            ) : (
              <div className="flex justify-between">
                <div className="flex justify-between w-2/3 px-8 my-auto text-white">
                  <div>
                    <button onClick={() => setPopup("friends")}>
                      <img src="/img/friends-icon.png" alt="" />
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setPopup("notification")}>
                      <img src="/img/notification-icon-navbar.png" alt="" />
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setPopup("messages")}>
                      <img src="/img/message-icon-navbar.png" alt="" />
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <Link href="/settings">
                    <img
                      src="/img/profileImg.png"
                      alt="profile"
                      height="auto"
                      width="65px"
                      className="cursor-pointer h-11"
                    />
                  </Link>
                  <p className="text-white my-auto mx-4 font-black text-base">
                    James
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {popup === "friends" && (
          <div
            className=" rounded-lg w-80 h-auto absolute bg-white shadow right-72 z-50"
            onMouseLeave={() => setPopup("")}
          >
            <FindRequestPopup />
          </div>
        )}
        {popup === "notification" && (
          <div
            className=" rounded-lg w-80 h-auto absolute bg-white shadow right-40 z-50"
            onMouseLeave={() => setPopup("")}
          >
            <NotificationPopup />
          </div>
        )}
        {popup === "messages" && (
          <div
            className=" rounded-lg w-80 h-auto absolute bg-white shadow right-12 z-50"
            onMouseLeave={() => setPopup("")}
          >
            <ProfileMessagePopup />
          </div>
        )}
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className=' bg-blue-850'>
    <div className="navbarSection">
      <div className="py-3.5 md:px-54.25 px-4 flex md:flex-row flex-col justify-between text-base text-white">
        <Link href="/">
          <img
            className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform h-4.5 w-4.5"
            src={home}
            alt="Home"
            width="15px"
            height="4px"
          />
        </Link>
        <Link href="/college">
          <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
            Colleges
          </p>
        </Link>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
          Exam
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
          Courses
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
          Jobs
        </p>
        <Link href="/news">
          <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
            News
          </p>
        </Link>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
          Chat Room
        </p>
        <Link href="/members">
          <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
            Member
          </p>
        </Link>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform text-base">
          Help Center
        </p>
      </div>
    </div>
  </div>
  );
};

const Navbar = ({ isLoggedin = true }) => {
  return (
    <div>
      <FirstSection />
      <SecondSection isLoggedin={isLoggedin} />
      <ThirdSection />
    </div>
  );
};

export default Navbar;
