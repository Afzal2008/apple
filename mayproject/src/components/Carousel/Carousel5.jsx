import React from "react";
import Slider from "react-slick";
import img from '../../assets/carousel5.1.png'
import img2 from '../../assets/carousel5.2.png'
import img3 from '../../assets/carousel5.3.png'
import img4 from '../../assets/carousel5.4.png'
import img5 from '../../assets/carousel5.5.png'
import img6 from '../../assets/carousel5.6.png'
import img7 from '../../assets/carousel5.7.png'
import img8 from '../../assets/carousel5.8.png'
import img9 from '../../assets/carousel5.9.png'
import img10 from '../../assets/carousel5.10.png'
import img11 from '../../assets/carousel5.11.png'
import img12 from '../../assets/carousel5.12.png'
import './Carousel5.css';

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    <div className="slider-container2">
      <Slider {...settings}>
        <div>
        <img src={img2} alt="" className="car5"/>        </div>
        <div>
        <img src={img3} alt=""  className="car5"/>        </div>
        <div>
        <img src={img4} alt=""  className="car5"/>        </div>
        <div>
        <img src={img5} alt=""  className="car5"/>        </div>
        <div>
        <img src={img6} alt="" className="car5" />        </div>
        <div>
        <img src={img7} alt="" className="car5" />        </div>
        <div>
        <img src={img8} alt="" className="car5" />        </div>
        <div>
        <img src={img9} alt=""  className="car5"/>        </div>
        <div>
        <img src={img10} alt=""  className="car5"/>        </div>
        <div>
        <img src={img11} alt=""  className="car5"/>        </div>
        <div>
        <img src={img12} alt="" className="car5" />        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
