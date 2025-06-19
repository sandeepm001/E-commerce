import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart from '../Assets/Frontend_Assets/cart_icon.png'
import search from '../Assets/Frontend_Assets/search.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className="navlogo">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")} ><Link className='link-no-style' to='/' >Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("men")}><Link className='link-no-style' to='/men' >Men</Link>{menu === "men" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("women")}><Link className='link-no-style' to='/women' >Women</Link>{menu === "women" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("kid")}><Link className='link-no-style' to='/kids' >Kids</Link>{menu === "kid" ? <hr /> : <></>}</li>
      </ul>
      <div className="search">
        <input type="text" placeholder='Search' />
        <img src={search} alt="" />
      </div>
      <Link style={{ textDecoration: "none" }} to='/login' >
        <button onClick={() => window.scrollTo({ top: 0, left: 0 })} className="login-button">
          Login
        </button>
      </Link>
      <div className="nav-login-cart">
        <Link to='/cart'>
          <div className='cart-icon'>
            <img src={cart} alt="" />
            <div className="nav-cart-count">0</div>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Navbar