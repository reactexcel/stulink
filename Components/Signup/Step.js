import React, { useState } from "react";
import { signupImage } from "../Common/Images";
import StepsFlow from "./StepsFlow";
import { useDispatch , useSelector } from "react-redux";
import { getSingUpRequest } from "../../Redux/action";

const stepData = {
  step_1: {
    title: "Enter your personal number Details.",
  },
  step_2: {
    title: "Select Username",
  },
  step_3: {
    title: "Select Username",
  },
  step_4: {
    title: "Find your Friends",
  },
  step_5: {
    title: "Link hashtag",
  },
};

export const Step = ({ step = 1 }) => {
  return (
    <div className="">
      <div className="my-8 border-2 rounded-xl">
        <div className="p-8">
          <img src={signupImage} alt="Signup" height="auto" width="auto" />
          <div className="my-6">
            <p className="font-semibold text-2xl">Step {step}</p>
            <p className="text-2xl my-4">{stepData[`step_${step}`]?.title}</p>
            <StepsFlow steps={step} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Step1Input = ({ step, prev, next }) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    number: "",
    email: "",
    password: "",
    con_password: "",
    username: "",
    college: "",
    stream: "",
    hashtags: "",
    friendsName:""
  });
  const [error, setError] = useState("");
  const Tabs = ({ text }) => {
    const handleClick = () => {
      if (formData.hashtags.includes(text)) {
        setFormData({
          ...formData,
          hashtags: formData.hashtags.filter((hashtag) => hashtag !== text),
        });
      } else {
        // setFormData({ ...formData, hashtags: ...formData.hashtags, });
      }
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`border border-black rounded p-2 m-4 transform duration-300 hover:translate:-y-1 hover:scale-105 ${
          formData.hashtags.includes(text) &&
          "bg-blue-550 bg-opacity-60 border-opacity-20 text-white border-blue-550"
        }`}
      >
        {text}
      </button>
    );
  };

  const handleFormData = (key, e) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    if (formData.password !== formData.con_password) {
      setError("Passwords don't match");
    } else if (
      !(formData.email || formData.number) ||
      (formData.number && formData.number.length !== 10)
    ) {
      setError("Email or mobile number required");
    } else {
      next();
    }
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className="my-8">
              <p className="text-xl font-semibold">Enter Mobile Number</p>
              <input
                value={formData.number}
                onChange={(e) => handleFormData("number", e)}
                type="number"
                className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
                autoFocus
              />
            </div>
            <p className="text-center text-3xl font-bold">OR</p>
            <div className="my-8">
              <p className="text-xl font-semibold">Enter E-MAIL</p>
              <input
                value={formData.email}
                onChange={(e) => handleFormData("email", e)}
                type="email"
                className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
              />
            </div>
            <div className="my-8">
              <p className="text-xl font-semibold">Enter Password</p>
              <input
                value={formData.password}
                onChange={(e) => handleFormData("password", e)}
                type="password"
                className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
                required
              />
            </div>
            <div className="my-8">
              <p className="text-xl font-semibold">Enter Confirm Password</p>
              <input
                value={formData.con_password}
                onChange={(e) => handleFormData("con_password", e)}
                type="password"
                className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
                required
              />
              {<p className="text-red-500">{error.length ? error : ""} </p>}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="my-8 p-8">
            <p className="text-xl font-semibold">Select Username</p>
            <input
              value={formData.username}
              onChange={(e) => handleFormData("username", e)}
              type="text"
              className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
              required
              autoFocus
            />
          </div>
        );
      case 3:
        return (
          <div>
            <div className="my-8 p-8">
              <p className="text-xl font-semibold">Select College</p>
              <input
                value={formData.college}
                onChange={(e) => handleFormData("college", e)}
                type="text"
                className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
                required
                autoFocus
              />
            </div>
            <div className="my-8 p-8">
              <p className="text-xl font-semibold">Select Stream</p>
              <input
                value={formData.stream}
                onChange={(e) => handleFormData("stream", e)}
                type="text"
                className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
                required
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="my-8 p-8">
            <p className="text-xl font-semibold">Find Your Friends</p>
            <input
              type="text"
              className="focus:outline-none border border-blue-550 rounded-xl w-full p-4 my-2"
              autoFocus
            />
          </div>
        );
      case 5:
        return (
          <div className="grid grid-cols-4 my-8 p-8 text-center items-center">
            {[
              "#M.B.A.",
              "#B.TECH",
              "#B.C.A.",
              "#College",
              "#M.C.A.",
              "#university",
              "#collegelife",
              "#student",
            ].map((tag, index) => {
              return (
                <div key={index}>
                  <Tabs text={tag} />
                </div>
              );
            })}
          </div>
        );
    }
  };
  return (
    <div className="shadow-2xl rounded-2xl">
      <div className="bg-blue-550 bg-opacity-10 px-8 py-12 rounded-t-2xl">
        <p className="text-blue-550 text-2xl font-semibold">
          {stepData[`step_${step}`]?.title}
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="p-8 min-h-99">
        <form onSubmit={(e) => handleSubmit(e)}>
          {renderForm()}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prev}
              disabled={step === 1}
              className="p-4 bg-black disabled:bg-gray-500 disabled:opacity-50 text-white rounded-xl w-44 transition duration-300 disabled:cursor-not-allowed hover:-translaye-y-1 hover:scale-105"
            >
              {"<<"}
            </button>
            <button
              type="submit"
              // onClick={next}
              disabled={step === 5}
              className="p-4 bg-blue-550 disabled:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl w-44 transition duration-300 transform hover:-translaye-y-1 hover:scale-105"
            >
              Next {">>"}
            </button>
          </div>
        </form>
        {step === 5 && (
          <div>
            <div className="flex justify-center mt-24">
              <button className="text-4xl text-white bg-blue-550 py-4 m-4 w-3/4 rounded-full transition duration-300 transform hover:-translaye-y-1 hover:scale-105 hover:bg-opacity-90" onClick={()=>{
              console.log("dsfdsgdsggd",formData)
              dispatch(getSingUpRequest(formData))}}>
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
