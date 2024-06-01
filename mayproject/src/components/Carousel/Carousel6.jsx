import React from "react";
import Slider from "react-slick";
import crs1 from '../../assets/Carousel6.1.png'
import crs2 from '../../assets/Carousel6.2.png'
import crs3 from '../../assets/Carousel6.3.png'
import crs4 from '../../assets/Carousel6.4.png'
import crs5 from '../../assets/Carousel6.5.png'
import crs6 from '../../assets/Carousel6.6.png'
import './Carousel6.css';




function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container3">
      <Slider {...settings}>
        <div>
          <img src={crs1} alt="" className="asde" />
        </div>
        <div>
        <img src={crs2} alt=""  className="asde" />
        </div>
        <div>
        <img src={crs3} alt=""  className="asde" />
        </div>
        <div>
        <img src={crs4} alt=""  className="asde" />
        </div>
        <div>
        <img src={crs5} alt=""  className="asde" />
        </div>
        <div>
        <img src={crs6} alt=""  className="asde" />
        </div>

      </Slider>
    </div>
  );
}

export default Responsive;
