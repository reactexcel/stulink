import React from "react";
import Navbar from "../Common/Navbar";
import WelcomeStulinks from "./WelcomeStulinks";
import CollegesExams from "./CollegesExams";
import TrendingColleges from "./TrendingColleges";

const HomepageContainer = () => {
  return (
    <div>
      <Navbar />
      <WelcomeStulinks />
      <CollegesExams />
      <TrendingColleges />
    </div>
  );
};

export default HomepageContainer;
