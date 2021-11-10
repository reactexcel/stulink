import React from "react";
import Navbar from "../Common/Navbar";
import WelcomeStulinks from "./WelcomeStulinks";
import CollegesExams from "./CollegesExams";
import TrendingColleges from "./TrendingColleges";
import PopularCourses from "./PopularCourses";
import ExamUpdates from "./ExamUpdates";

const HomepageContainer = () => {
  return (
    <div>
      <Navbar />
      <WelcomeStulinks />
      <CollegesExams />
      <TrendingColleges />
      <PopularCourses />
      <ExamUpdates />
    </div>
  );
};

export default HomepageContainer;
