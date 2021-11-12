import React, { useState } from "react";
import { Step1, Step1Input } from "./Step1";

const SignupInputs = () => {
    const [step, setStep] = useState(1);
  return (
    <div className="md:w-2/3 mx-auto my-12">
      <div className="grid md:grid-cols-5 grid-cols-3">
        <div className="md:col-span-2 col-span-1">
          <Step1 step={step} />
        </div>
        <div className="md:col-span-3 col-span-2"><Step1Input  step={step} prev={()=>setStep(step-1)} next={()=>setStep(step+1)} /></div>
      </div>
    </div>
  );
};

export default SignupInputs;
