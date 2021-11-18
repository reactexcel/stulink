import React from "react";
import AboutCollege from "./AboutCollege";
import Faqs from "./Faqs";
import ImageGallery from "./ImageGallery";
import Rating from "./Rating";
import TopCourses from "./TopCourses";

const InformationContainer = () => {
  return (
    <div>
      <Rating />
      <AboutCollege />
      <TopCourses />
      <ImageGallery />
      <Faqs />
    </div>
  );
};

export default InformationContainer;
