import React from "react";
import Image from "next/image";
import Link from "next/link";

const AllNews = ({ news }) => {
  return (
    <div className="bg-white mx-2 flex  my-4 border  shadow-lg rounded-lg">
      <div className="m-3">
        <Image
          src={news.image}
          alt="college"
          width={284}
          height={184}
        />
      </div>
      <Link href={`/news/${news.id}`}>
      <div className="py-1 px-2 max-w-xl my-3">
        <h2 className="h-12 text-xl text-gray-800 font-bold">BITSAT Test Centre/ City Allotment 2021 (July 12) - Check Test City Allotment Here</h2>
        <p className="my-4">
          <span className="text-blue-500 font-bold py-2 pr-4">
            by {news.name} 
          </span> 
         <span className="">2 days ago</span>
        </p>
        <p className="h-12 text-xs my-2 text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes .</p>
        <h1 className="mx-4 text-sm text-gray-500 ">Share</h1>
      </div>
      </Link>
    </div>
  
  );
};

export default AllNews;
