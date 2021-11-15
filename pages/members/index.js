import React from "react";
import Head from "next/head";
import Footer from "../../Components/Common/Footer";
import Navbar from "../../Components/Common/Navbar";
import MembersContainer from "../../Components/Members/MembersContainer";

const Members = () => {
  return (
    <div>
      <Head>
        <title>Members | Stulinks</title>
      </Head>
      <Navbar />
      <MembersContainer />
      <Footer />
    </div>
  );
};

export default Members;
