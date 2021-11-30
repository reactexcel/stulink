import React, { useState } from "react";
import { faqIcon } from "../Common/Images"
import { downIcon} from "../Common/Images"


const ListItem = ({ show, setShow, index }) => {
  return (
    <div className=" shadow-lgOuter11 border rounded-xl my-6">
      <div className="flex justify-between p-4 bg-gray-220 rounded-xl text-base">
        <p>1. Does IIT have management quota?</p>
        <button
          onClick={() => setShow(show === index ? false : index)}
          className={`text-2xl font-black transition duration-300 ${
            show===index ? "transform rotate-45" : "rotate-0"
          }`}
        >
          +
        </button>
      </div>
      <div>
        {show === index && (
          <p className="p-4 text-sm">
            No, there is no management quota at IIT. Students are selected
            either on the basis of their performance in entrance exams or
            through direct admission based on their qualifying marks.
          </p>
        )}
      </div>
    </div>
  );
};

const Faqs = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="my-9 rounded-xl shadow-lgOuter11 border w-full">
      <p className="text-blue-550 text-25 font-black mt-8 text-center flex justify-center items-center">
      <img  src={faqIcon} alt="faq icon" className=" h-5 w-5 mr-3"/>FAQs About IIT MADRAS
      </p>
      <div className="pl-8 pr-8 pt-6 pb-6">
        {[1, 2, 3, 4, 5].map((faq, index) => {
          return (
            <div key={index}>
              <ListItem index={index} show={show} setShow={setShow} />
            </div>
          );
        })}
      </div>
      <p className="text-center text-blue-550 flex justify-center items-center pb-6">View more
       <img src={downIcon} alt="view more" className=" h-1.5 w-3 ml-1.5"/></p>
    </div>
  );
};

export default Faqs;
