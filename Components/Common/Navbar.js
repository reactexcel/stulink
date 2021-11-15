import React, { useState } from "react";
import { logo, login, signup, home } from "./Images";
import { useRouter } from "next/router";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className="bg-black text-white text-xl py-6">
      <div className="flex justify-between md:mx-12 mx-2">
        <div>
          <p>DATE: 20th August 2021</p>
        </div>
        <div className="flex md:flex-row flex-col justify-between">
          <p className="mx-4">Privacy Policy</p>
          <p className="mx-4">Terms and conditions</p>
          <p className="mx-4">Contact us</p>
        </div>
      </div>
    </div>
  );
};

const SecondSection = ({ isLoggedin }) => {
  const router = useRouter();
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
      <div className="grid md:grid-cols-8 grid-cols-1 md:p-4 p-1 md:gap-4 gap-12">
        <div className="col-span-2 my-auto mx-12">
          <Link href="/">
            <img src={logo} alt="STULINK" height="41px" width="248px" />
          </Link>
        </div>
        <div className="col-span-4 my-auto">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="SEARCH"
              className="focus:outline-none w-full text-lg p-4 rounded"
              value={search}
              onChange={handleSearch}
            />
          </form>
        </div>
        <div className="col-span-2 my-auto">
          {!isLoggedin ? <div className="flex justify-center">
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
          </div> :
          <div className="flex justify-between">
            <div className="flex justify-between w-2/3 px-8 my-auto text-white">
              <Link href="/profile/find-request">F</Link>
              <Link href="/profile/notifications">N</Link>
              <Link href="/members">M</Link>
            </div>
            <div className="flex">
            <Link href="/settings"><img src="/img/profileImg.png" alt="profile" height="auto" width="65px" className="cursor-pointer" /></Link>
            <p className="text-white my-auto mx-4 font-black text-xl">James</p>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="bg-blue-850">
      <div className="py-4 md:px-40 px-4 flex md:flex-row flex-col justify-between text-2xl text-white">
        <img
          className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform"
          src={home}
          alt="Home"
          width="28.4px"
          height="18.14px"
        />
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          Colleges
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          Exam
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          Courses
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          Jobs
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          News
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          Chat Room
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          Member
        </p>
        <p className="cursor-pointer transition duration-300 hover:-translate-y-1 hover:scale-105 transform">
          Help Center
        </p>
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
