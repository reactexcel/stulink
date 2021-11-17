import React from "react";
import Head from "next/head";
import BestColleges from "./BestColleges";
import AllNews from "./AllNews";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import NewsTabs from "./NewsTabs";

const NewsPageContainer = () => {
  return (
    <div>
      <Head>
        <title>Stulinks | News</title>
      </Head>
      <Navbar />
      <div className="grid grid-cols-10 gap-6 my-16 mx-12">
        <div className="col-span-7 ">
          <NewsTabs />
        </div>
        <div className="col-span-3  ">
          <BestColleges />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPageContainer;
