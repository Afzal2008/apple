import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pho1 from '../../assets/carousel3.1.png'
import pho2 from '../../assets/carousel3.2.png'
import pho3 from '../../assets/carousel3.3.png'
import pho4 from '../../assets/carousel3.4.png'


import "./Carousel.css"
function Carousel3() {
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
          <img src={pho1} alt="" />
        </div>
        <div>
          <img src={pho2} alt="" />
        </div>
        <div>
          <img src={pho3} alt="" />
        </div>
        <div>
          <img src={pho4} alt="" />
        </div>
        <div>
          <img src={pho1} alt="" />
        </div>
        <div>
          <img src={pho2} alt="" />
        </div>
        <div>
          <img src={pho3} alt="" />
        </div>
        <div>
          <img src={pho4} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel3;