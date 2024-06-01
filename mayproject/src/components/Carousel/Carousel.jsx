import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import asad from "../../assets/slick.png";
import asad2 from "../../assets/slick2.png";
import asad3 from "../../assets/slick3.png";
import asad4 from "../../assets/slick4.png";
import "./Carousel.css"
function Carousel() {
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
        breakpoint: 400,
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
          <img src={asad2} alt=""/>
        </div>
        <div>
          <img src={asad3} alt="" />
        </div>
        <div>
          <img src={asad} alt="" />
        </div>
        <div>
          <img src={asad4} alt="" />
        </div>
        <div>
          <img src={asad2} alt="" />
        </div>
        <div>
          <img src={asad3} alt="" />
        </div>
        <div>
          <img src={asad} alt="" />
        </div>
        <div>
          <img src={asad4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
