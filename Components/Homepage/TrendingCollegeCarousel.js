import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollegeCarouselCards from "./CollegeCarouselCards";
import { arrowLeft, arrowRight } from "../Common/Images";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 90,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 90,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
};

const CarouselButton = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <div className="flex justify-between">
        <button
          className={`relative bottom-56 -ml-16`}
          onClick={() => previous()}
        >
          <img src={arrowLeft} />
        </button>
        <button className={`relative bottom-56 -mr-16`} onClick={() => next()}>
          <img src={arrowRight} />
        </button>
      </div>
    </div>
  );
};

const TrendingCollegeCarousel = ({ colleges, next, previous, goToSlide, ...rest }) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        {colleges?.data &&<Carousel
          responsive={responsive}
          swipeable={true}
          arrows={false}
          draggable={true}
          showDots={false}
          infinite={true}
          keyBoardControl={false}
          transitionDuration={500}
          renderButtonGroupOutside
          autoPlay
          customButtonGroup={<CarouselButton />}
        >
          {colleges && colleges?.data && colleges?.data?.map((college, index) => {
            return (
              <div key={index}>
                <CollegeCarouselCards college={college} />
              </div>
            );
          })}
        </Carousel>}
      </div>
    </>
  );
};

export default TrendingCollegeCarousel;
