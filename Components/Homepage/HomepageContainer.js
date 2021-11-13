import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../Common/Navbar";
import WelcomeStulinks from "./WelcomeStulinks";
import CollegesExams from "./CollegesExams";
import TrendingColleges from "./TrendingColleges";
import PopularCourses from "./PopularCourses";
import ExamUpdates from "./ExamUpdates";
import HelpCenter from "./HelpCenter";
import Jobs from "./Jobs";
import Features from "./Features";
import LatestNews from "./LatestNew";
import Footer from "../Common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getHomepageDataRequest } from "../../Redux/action";

const HomepageContainer = () => {
  const dispatch = useDispatch();
  const { homepage } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getHomepageDataRequest());
  }, []);

  useEffect(() => {
    if (homepage.isSuccess) {
      console.log(homepage.homepageData, "_____________");
    }
  }, [homepage]);
  return (
    <div>
      <Head>
        <title>Stulink</title>
      </Head>
      <Navbar />
      <WelcomeStulinks />
      <CollegesExams collegeData={homepage?.homepageData?.collegeCountData} />
      <TrendingColleges colleges={homepage?.homepageData?.trendingCollege} />
      <PopularCourses courses={homepage?.homepageData?.courseDetailsData} />
      <ExamUpdates />
      <Jobs />
      <Features />
      <HelpCenter />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default HomepageContainer;
