import React from "react";
import Navbar from "../Common/Navbar";
import WelcomeStulinks from "./WelcomeStulinks";
import CollegesExams from "./CollegesExams";
import TrendingColleges from "./TrendingColleges";
import PopularCourses from "./PopularCourses";
import ExamUpdates from "./ExamUpdates";
import Jobs from "./Jobs";
import LatestNews from "./LatestNew";
import Footer from "../Common/Footer";

const HomepageContainer = () => {
  return (
    <div>
      <Navbar />
      <WelcomeStulinks />
      <CollegesExams />
      <TrendingColleges />
      <PopularCourses />
      <ExamUpdates />
      <Jobs />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default HomepageContainer;
