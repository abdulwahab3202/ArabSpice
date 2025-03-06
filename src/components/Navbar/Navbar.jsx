import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin,menu, setMenu}) => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <div className='display'>
        <Link to='/'><img src={assets.logo} alt="logo image" className='logo'/></Link>
        <h1>Arab Spice</h1>
        </div>
        <ul className='navbar-menu'>
            <Link to='/' onClick={() => {setMenu("home")}} className={menu === "home"?"active":"default"}>Home</Link>
            <a id='hide' href='#about-us' onClick={() => {setMenu("about-us")}} className={menu === "about-us"?"active":"default"}>About Us</a>
            <Link to='/menu' onClick={() => {setMenu("menu")}} className={menu === "menu"?"active":"default"}>Menu</Link>
            <a id='hide' href='#footer' onClick={() => {setMenu("contact-us")}} className={menu === "contact-us"?"active":"default"}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <div className="navbar-basket-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="cart icon" className='basket-icon'/></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </div>
            <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}
export default Navbar