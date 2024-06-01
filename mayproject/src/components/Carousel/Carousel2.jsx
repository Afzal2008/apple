import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import asad5 from "../../assets/slick5.png";
import asad6 from "../../assets/slick6.png";
import asad7 from "../../assets/slick7.png";
import asad8 from "../../assets/slick8.png";
import "./Carousel.css"
function Carousel2() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={asad5} alt="" />
        </div>
        <div>
          <img src={asad6} alt="" />
        </div>
        <div>
          <img src={asad7} alt="" />
        </div>
        <div>
          <img src={asad8} alt="" />
        </div>
        <div>
          <img src={asad5} alt="" />
        </div>
        <div>
          <img src={asad6} alt="" />
        </div>
        <div>
          <img src={asad7} alt="" />
        </div>
        <div>
          <img src={asad8} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel2;
