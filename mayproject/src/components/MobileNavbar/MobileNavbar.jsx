import React, { useState } from 'react';
import './MobileNavbar.css'
import 'font-awesome/css/font-awesome.min.css';
import asad from '../../assets/Apple.png'
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="mobile-container">
      <div className="topnav">
   <Link to={'/'} className="active" >
    <img src={asad} alt="" className='logo2' />
   </Link>
        <div id="myLinks" style={{ display: showLinks ? 'block' : 'none' }}>
        <Link to={'/store'}>
            <p>Store</p>
            </Link>
            <Link to={"/iphone"}>
            <p>iPhone</p>
            </Link>
            <Link to={"/accessories"}>
            <p>Accessories</p>
            </Link>
        </div>
        <Link className="icon" onClick={toggleLinks}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>
     
    </div>
  );
};

export default MobileNavbar;
