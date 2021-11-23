import React from "react";
import { college } from "../Common/Images";
import Image from "next/image";
const NewsContent = () => {
  return (
    <div className="mb-12 border shadow-xl px-10 ">
      <div className="flex flex-col w-full ">
        <Image alt="college" src={college} height={561} width={884} />
        <h1 className="text-xl my-4 max-w-4xl font-semibold">
          BITSAT Test Centre/ City Allotment 2021 (July 12) - Check Test City
          Allotment Here
        </h1>
        <p className="my-4">
          <span className="text-blue-500 font-bold py-2 pr-4">by ramadhir</span>
          <span className="">2 days ago</span>
        </p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes
          .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes
          <br />
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes
          .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes.
          <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes . Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
          <br />
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes .Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes
          .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes .
        </p>
      </div>

      <h1 className="text-xl my-4 font-bold">Related links</h1>
      <div className="my-4">
        <button className="bg-black p-4 text-white underline mx-2">
          <a>Aenean massa</a>
        </button>
        <button className="bg-black p-4 text-white underline mx-2">
          <a>Aenean massa</a>
        </button>
      </div>
    </div>
  );
};
export default NewsContent;
