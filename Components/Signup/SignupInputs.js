import React from "react";
import { Step1, Step1Input } from "./Step1";

const SignupInputs = () => {
  return (
    <div className="md:w-2/3 mx-auto my-12">
      <div className="grid md:grid-cols-5 grid-cols-3">
        <div className="md:col-span-2 col-span-1">
          <Step1 />
        </div>
        <div className="md:col-span-3 col-span-2"><Step1Input /></div>
      </div>
    </div>
  );
};

export default SignupInputs;
