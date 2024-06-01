import React from "react";
import img from "../assets/img.png";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import ayfon from "../assets/phone2.webp"
import phone from "../assets/phone3.webp"
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import footerpng from "../assets/footer1.png"
import MobileNavbar from "../components/MobileNavbar/MobileNavbar";
const Home = () => {
  return (
    <div className="conatiner">
      <Navbar />
      <MobileNavbar/>
      <img src={img} alt="" className="bg" />
    {/* --------------------------------------------- */}
      <div className="appleevent">
        <h1>Apple Event</h1>
        <p>Watch on 5/7 at 7 a.m. PT.</p>
        <button>Learn more</button>
      </div>
    {/* --------------------------------------------- */}

      <div className="items">

        <div className="top">
            <h1>iPhone 15</h1>
            <p>Titanum.So strong.So light.So Pro.</p>
            <div>
              <button className="first">Learn more</button>
              <button className="second">Buy</button>
            </div>
          
         <Link to={'/accessories'}>
         <img src={phone} alt="" className="phone"/>
         </Link>
        </div>
    {/* --------------------------------------------- */}

    <div className="top">
         
         <h1>iPhone 15</h1>
         <p>New camera.New design. Newphoria</p>
         <div>
           <button className="first">Learn more</button>
           <button className="second">Buy</button>
         </div>
       
       <img src={ayfon} alt="" className="phone2"/>
     </div>


      </div>
      <img src={footerpng} alt=""  className="footerpng"/>
      <Footer/>
      <MobileNavbar/>
    </div>
  );
};

export default Home;
