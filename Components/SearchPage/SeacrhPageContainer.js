import Head from "next/head";
import React from "react";
import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import ListHeading from "./ListHeading";
import SearchCollege from "./SearchCollege";
import SearchPageHeader from "./SearchPageHeader";
import { useDispatch } from "react-redux";

const SearchPageContainer = () => {
  return (
    <div className="bg-gray-100  ">
      <Head>
        <title>Stunlink | Search </title>
      </Head>
      <Navbar/>
      <SearchPageHeader />
      <ListHeading/>
      <SearchCollege/>
      <Footer />
    </div>
  );
};
export default SearchPageContainer;
