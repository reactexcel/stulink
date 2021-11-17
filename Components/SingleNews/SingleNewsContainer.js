import React from "react";
import Head from "next/head";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import BestCourses from "./BestCourses";
import NewsContent from "./NewsContent";

const SingleNewsPageContainer = () => {
  return (
    <div>
      <Head>
        <title>Stulinks | News</title>
      </Head>
      <Navbar />
      <div className="grid grid-cols-10 gap-6 my-16 mx-12">
        <div className="col-span-7 ">
          <NewsContent />
        </div>
        <div className="col-span-3  ">
          <BestCourses />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleNewsPageContainer;
