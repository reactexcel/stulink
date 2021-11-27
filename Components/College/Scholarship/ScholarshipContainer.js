import React from "react";  
import InformationScholarship from "./InformationScholarship";
import AvailableScholarship from "./AvailableScholarship";
import Faqs from "../Faqs";
import StarRating from "../StarRating";
import StudentReview from "../StudentReview";
 const ScholarshipContainer = () => {
     return (
      <div>
        <InformationScholarship/>
        <AvailableScholarship/>
        <Faqs/>
        <StarRating/>
      </div>
     )
 }
 export default ScholarshipContainer;