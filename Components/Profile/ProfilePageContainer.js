import React from "react";
import Head from "next/head";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import ProfileBar from "./ProfileBar";
import RecommendedProfile from "./RecommendedProfile";
import TrendingTopics from "./TrendingTopics";
import AboutProfile from "./AboutProfile";
import Friends from "./Friends";
import TopicFollowed from "./TopicFollowed";
import ProfileTabs from "./ProfileTabs";

const ProfilePageContainer = () => {
  return (
    <div>
      <Head>
        <title>Stulinks | Profile</title>
      </Head>
      <Navbar />
      <div className="grid grid-cols-12 gap-4 mx-12">
        <div className="col-span-9">
          <ProfileBar />
          <div className="grid grid-cols-6">
            <div className="col-span-2">
              <AboutProfile />
              <Friends />
              <TopicFollowed />
            </div>
            <div className="col-span-4">
                <ProfileTabs />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <RecommendedProfile />
          <TrendingTopics />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePageContainer;
