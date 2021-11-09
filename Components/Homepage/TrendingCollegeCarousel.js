import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollegeCarouselCards from "./CollegeCarouselCards";

const TrendingCollegeCarousel = () => {
  return (
    <>
    <div>
      <Carousel
      swipeable={true}
      arrows={false}
      draggable={true}
      showDots={false}
      infinite={true}
      keyBoardControl={false}
      transitionDuration={500}
      renderButtonGroupOutside
      autoPlay
      // customButtonGroup={}
      >
        {[1,2,3,4,5,6,7,8,9,10].map(value=>(
          <CollegeCarouselCards />
        ))}
      </Carousel>
    </div>
    </>
  );
}

export default TrendingCollegeCarousel;