import React from "react";
import Navbar from "../components/Navbar/Navbar";
import store from "../assets/store.png";
import Carousel from "../components/Carousel/Carousel4";
import Carousel5 from "../components/Carousel/Carousel5";
import Carousel6 from "../components/Carousel/Carousel6";
import "./Store.css";
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
const Store = () => {
  return (
    <div className="Container">
      <div className="nav">
        <Navbar />
        
      </div>
      <MobileNavbar/>
      <div className="store">
        <div className="applep">
          <span>
            Now through June 3, get $200-$650 in credit toward a new iPhone when
            you trade in iPhone 11 or higher.
          </span>
          <span> Shop iPhone</span>
        </div>
        <img src={store} alt="" className="store" />
      </div>
      <Carousel />
      <div className="h1">
        <span className="span1">The latest.</span>
        <span className="span2">Take a look at what’s new, right now.</span>
      </div>
      <Carousel5 />
      <div className="h1">
        <span className="span1">The Apple Store difference.</span>
        <span className="span2"> Even more reasons to shop with us.</span>
      </div>
      <Carousel6 />
      <div className="footerstore">
        <p className="first_child">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1‑800‑MY‑APPLE.
        </p>
        <div className="footerp2">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          <p>
            {" "}
            Terms of Use <span>Privacy Policy</span>{" "}
            <span>Sales and Refunds</span> <span>Legal</span>{" "}
            <span>Site Map</span>
          </p>
          <p>Uzbekistan(By Afzalbek Rustamov)</p>
        </div>
      </div>
    </div>
  );
};

export default Store;
