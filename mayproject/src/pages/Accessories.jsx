import React from "react";
import "./Accessories.css";
import Tab from "../components/Tabs/Tab";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar/Navbar";
import Carousel2 from "../components/Carousel/Carousel2";
import Carousel3 from "../components/Carousel/Carousel3";
import truck from '.././assets/icon-truck-2024.png'
import aicon from '.././assets/icon-applecard-2024.png'
import icon from '.././assets/icon-return-2018.png'
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
const Accessories = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar/>
      <div className="container1">
        <div className="flex">
          <h1>Find the accessories you’re looking for.</h1>
          <input type="text" placeholder="Search accessories" />
        </div>
        <Tab />
      </div>
      <div className="text1">
        <h1>Featured iPad Accessories</h1>
      </div>
      <div className="carousel2">
        <Carousel />
      </div>

      <div className="slick2">
        <h1>Featured iPhone Accessories</h1>
        <div className="carousel2">
          <Carousel2 />
        </div>
      </div>
      <div className="slick2">
        <h1>Apple Watch Bands</h1>
        <div className="carousel2">
          <Carousel3 />
        </div>
      </div>
      <div className="bottom">
        <div className="bot1">
          <img src={truck} alt="" />
          <h3>Fast delivery or pickup</h3>
          <p>
            Enjoy two-hour delivery from an Apple Store, free delivery, or easy
            pickup.
          </p>
          <a>Learn more</a>
        </div>
        <div className="bot1">
          <img src={icon} alt="" />
          <h3>Free and easy returns</h3>
          <p>
          Complete your return online or take it to an Apple Store.
          </p>
          <a>Learn more</a>
        </div>
        <div className="bot1">
          <img src={aicon} alt="" />
          <h3>Buy with Apple Card.</h3>
          <p>
          Get 3% Daily Cash back when you shop at Apple with Apple Card.
          </p>
          <a>Learn more</a>
        </div>
      </div>
    </>
  );
};

export default Accessories;
