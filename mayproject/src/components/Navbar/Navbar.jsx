import React from 'react'
import asad from '../../assets/Apple.png'
import search from '../../assets/Search.png'
import bag from '../../assets/Bag.png'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container'>
        <div className='navleft'>
          <Link to={'/'}>
            <img src={asad} alt="" className='logo'/>
            </Link>
            <Link to={'/store'}>
            <p>Store</p>
            </Link>
            <p>Mac</p>
            <p>iPad</p>
            <Link to={"/iphone"}>
            <p>iPhone</p>
            </Link>
            <p>Watch</p>
            <Link to={"/accessories"}>
            <p>Accessories</p>
            </Link>
        </div>
        <div className='navright'>
            <p>Support</p>
            <img className='searchphoto' src={search} alt="" />
            <img className='bagphoto' src={bag} alt="" />
        </div>
    </div>
  )
}

export default Navbar