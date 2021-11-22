import React, { useEffect, useState } from "react";
import Head from "next/head";
import BestColleges from "./BestColleges";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import NewsTabs from "./NewsTabs";
import AllNews from "./AllNews";
import { useDispatch, useSelector } from "react-redux";
import { getNewsRequest } from "../../Redux/action";

const NewsPageContainer = () => {
  const [tab, setTab] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsRequest());
  }, [tab]);

  const data = useSelector((state) => state.news);
  return (
    <>
      <Head>
        <title>Stulinks | News</title>
      </Head>
      <Navbar />
      <div className="grid grid-cols-7 gap-5 my-16 mx-12">
        <div className="col-span-5 ">
          <NewsTabs tab={tab} setTab={setTab} />
          <div className="my-12 border shadow-xl  ">
            <div className="mx-8 max-w-11/12">
              <h1 className="text-blue-550 text-2xl font-semibold my-4">
                {tab} News
              </h1>
              {tab === "All"
                ? data?.newsData?.data?.map((item) => (
                    <AllNews key={item._id} news={item} />
                  ))
                : data?.newsData?.data
                    ?.filter((val) => val.category === tab)
                    .map((item) => <AllNews key={item._id} news={item} />)}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <BestColleges />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsPageContainer;
