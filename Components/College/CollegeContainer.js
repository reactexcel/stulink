<<<<<<< HEAD
import React, { useState } from 'react'
import Head from 'next/head'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import CollegeTitle from './CollegeTitle'
import CollegeTabs from './CollegeTabs'
import InformationContainer from './InformationContainer'
import CoursesContainer from './CoursesContainer'
import TrendingAdmissions from './TrendingAdmissions'
import StudentsViewed from './StudentsViewed'
import AdmissionsContainer from './AdmissionsContainer'
import CuttoffContainer from './CuttoffContainer'
import GalleryContainer from './GalleryContainer'
import QandAContainer from './QandA/QandAContainer'
=======
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

>>>>>>> 156b39d7d2f1ef94b58a15150f1f37d44c6f7fb2
const CollegeContainer = () => {
  const [tab, setTab] = useState('Information')
  return (
    <div>
      <Head>
        <title>College | Stulinks</title>
      </Head>
      <Navbar />
      <CollegeTitle />
      <CollegeTabs setTab={setTab} tab={tab} />
<<<<<<< HEAD
      <div className='grid grid-cols-7 gap-5 mx-12'>
        <div className='col-span-5'>
          {tab === 'Information' && <InformationContainer />}
          {tab === 'Courses' && <CoursesContainer />}
          {tab === 'Admissions' && <AdmissionsContainer />}
          {tab === 'Cut Off' && <CuttoffContainer />}
          {tab === 'Gallery' && <GalleryContainer />}
          {tab === 'Q&A' && <QandAContainer />}
        </div>
        <div className='col-span-2'>
          <TrendingAdmissions />
          <StudentsViewed />
=======
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

>>>>>>> 156b39d7d2f1ef94b58a15150f1f37d44c6f7fb2
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CollegeContainer
