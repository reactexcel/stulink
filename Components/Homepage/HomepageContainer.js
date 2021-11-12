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
  const state = useSelector(state=>state);
  console.log(state,'_____________')
  useEffect(()=>{
    dispatch(getHomepageDataRequest());
  },[])
  return (
    <div>
      <Head>
        <title>Stulink</title>
      </Head>
      <Navbar />
      <WelcomeStulinks />
      <CollegesExams />
      <TrendingColleges />
      <PopularCourses />
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
