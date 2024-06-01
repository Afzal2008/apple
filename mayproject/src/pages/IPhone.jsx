import React from 'react'
import { Col, Row } from 'antd';
import Navbar from "../components/Navbar/Navbar";
import "./IPhone.css";
import vd from "../assets/large_2x.mp4";
import phone1 from "../assets/grayphone.png"
import phone2 from "../assets/blackphone.png"
import phone3 from "../assets/greenphone.png"
import phone4 from "../assets/pinkphone.png"
import phone5 from "../assets/bluephone.png"
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';

const style = {
    background: '#0092ff',
    padding: '8px 0',
  };
const IPhone = () => {
  return (
    <>
    <div>
      <Navbar/>
      <MobileNavbar/>
      <div className='applep'>
        <span>Now through June 3, get $200-$650 in credit toward a new iPhone when you trade in iPhone 11 or higher.</span>
        <span> Shop iPhone</span>
       </div>
       <div className="h1big">
        <h1 className='t'>
        iPhone
        </h1>
        <h1 className='second'>Designed to be loved.</h1>
       </div>
      <div className="video_flex">
      <video className='vd' controls autoPlay>
  <source src={vd} type="video/mp4"/>
  {/* Your browser does not support the video tag. */}
</video>
      </div>
    </div>

    <Row>
      <Col xs={12} lg={4}>
        <div className="center">
          <img className='phone1 phone5' src={phone1} alt="" />
          <h2>iPhone 15 Pro</h2>
        </div>
      </Col>
      <Col xs={12} lg={4}>
        <div className="center">
          <img className='phone1' src={phone4} alt="" />
          <h2>iPhone 15</h2>
        </div>
      </Col>
      <Col xs={12} lg={4}>
        <div className="center">
          <img className='phone1' src={phone3} alt="" />
          <h2>iPhone 13</h2>
        </div>
      </Col>
      <Col xs={12} lg={4}>
        <div className="center">
          <img className='phone1' src={phone5} alt="" />
          <h2>iPhone 14</h2>
        </div>
      </Col>
    </Row>
    </>
    
  )
}

export default IPhone