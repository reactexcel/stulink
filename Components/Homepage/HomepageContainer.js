import React from "react";
import Navbar from "../Common/Navbar";
import WelcomeStulinks from "./WelcomeStulinks";
import CollegesExams from "./CollegesExams";
import TrendingColleges from "./TrendingColleges";
import PopularCourses from "./PopularCourses";
import ExamUpdates from "./ExamUpdates";
import HelpCenter from "./HelpCenter";
import Jobs from "./Jobs";
import Features from "./Features";

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
      <Features/>
      <HelpCenter/>
    </div>
  );
};

export default HomepageContainer;
