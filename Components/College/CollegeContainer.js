import React, { useState } from "react";
import Head from "next/head";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import CollegeTitle from "./CollegeTitle";
import CollegeTabs from "./CollegeTabs";
import InformationContainer from "./InformationContainer";
import CoursesContainer from "./CoursesContainer";
import TrendingAdmissions from "./TrendingAdmissions";
import StudentsViewed from "./StudentsViewed";
import AdmissionsContainer from "./AdmissionsContainer";
import CuttoffContainer from "./CuttoffContainer";
import GalleryContainer from "./GalleryContainer";
import NewsContainer from "./NewsContainer";
import TrandingTopic from "./TrandingTopic";
import TopicToFollow from "./TopicToFollow";
import RankingContainer from "./RankingContainer";
import TopRankedCollege from "./TopRankedCollege";
import ScholarshipContainer from "./Scholarship/ScholarshipContainer";
import QandAContainer from "../College/QandA/QandAContainer";


const CollegeContainer = () => {
  const [tab, setTab] = useState("Information");
  return (
    <div>
      <Head>
        <title>College | Stulinks</title>
      </Head>
      <Navbar />
      <CollegeTitle />
      <CollegeTabs setTab={setTab} tab={tab} />
      <div className="grid grid-cols-7 gap-8 mx-24">
        <div className="col-span-5">
          {tab === "Information" && <InformationContainer />}
          {tab  ==="Courses" && <CoursesContainer/>}
          {tab  === "Admissions" && <AdmissionsContainer/>}
          {tab === "Cut Off" && <CuttoffContainer/>}
          {tab === "Gallery" && <GalleryContainer/>}
          {tab === "News" && <NewsContainer/>}
          {tab === "Ranking" && <RankingContainer/>}
          {tab === "Scholarship" && <ScholarshipContainer/>}
          {tab === "Q&A" && <QandAContainer/>}
           
        </div>
        <div className="col-span-2">
          { tab === "Information"  && 
             <>
             <TrendingAdmissions />
              <StudentsViewed />
             </>
          }
           { tab ==="Courses"  && 
             <>
             <TrendingAdmissions />
              <StudentsViewed />
             </>
          }

          { tab ==="Admissions"  && 
             <>
             <TrendingAdmissions />
              <StudentsViewed />
             </>
          }

          { tab ==="Cut Off"  && 
             <>
             <TrendingAdmissions />
              <StudentsViewed />
             </>
          }
          { tab ==="Gallery"  && 
             <>
             <TrendingAdmissions />
              <StudentsViewed />
             </>
          }

          { tab === "News" &&
              <>
              <TrandingTopic/>
              <TopicToFollow/>
              </>
              }
              {
                tab === "Ranking" &&
                <>
                <TopRankedCollege/>
                <TrendingAdmissions/>
                </>
              }
              {
                tab === "Scholarship" && 
                <>
                  <TrendingAdmissions />
                    <StudentsViewed />
                </>
              }
              {
                tab == "Q&A" &&
                <>
                <TrendingAdmissions />
                 <StudentsViewed />
                </>
              }

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollegeContainer;
