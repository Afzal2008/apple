import React, { Component } from "react";
import Slider from "react-slick";
import './Carousel4.css';
import store1 from '../../assets/store1.png'
import store2 from '../../assets/store2.png'
import store3 from '../../assets/store3.png'
import store4 from '../../assets/store4.png'
import store5 from '../../assets/store5.png'
import store6 from '../../assets/store6.png'
import store7 from '../../assets/store7.png'
import store8 from '../../assets/store8.png'
import store9 from '../../assets/store9.png'
function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 8,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (

    <div className="slider-container">
      <Slider {...settings}>
        
  
        <div className="one two">
          <img src={store1} alt="" />
        </div>
        <div  className="one">
        <img src={store2} alt="" />
        </div>
        <div className="one">
        <img src={store3} alt="" />
        </div>
        <div className="one">
        <img src={store4} alt="" />
        </div>
        <div className="one">
        <img src={store5} alt="" />
        </div>
        <div className="one">
        <img src={store6} alt="" />
        </div>
        <div className="one ">
        <img src={store7} alt="" />
        </div>
        <div className="one ">
        <img src={store8} alt="" />
        </div>
        <div className="one third">
        <img src={store9} alt="" />
        </div>
      </Slider>
    </div>

  );
}

export default SwipeToSlide;
