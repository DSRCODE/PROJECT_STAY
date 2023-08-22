import React from 'react';
import "./Nav.css"
// import {/en } from "gsap"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div>
      <header>
        <div className="Navbar" >
          <div className="nav-element">
            <div className="logo">
              {/* <img src={stay} alt="./images/Stay.png" /> */}
              <p>S </p><span>TAY</span>
            </div>
          </div>
          <div className="nav-element"></div>
          <div className="nav-element" id='navbar-element'   >
              
            <div>

              <Link style={{ textDecoration: 'none' }}  >Home</Link>
            </div>
            <div >

              <Link style={{ textDecoration: 'none' }}>About</Link>
            </div>
            <div >

              <Link style={{ textDecoration: 'none' }} >Contact </Link>
            </div>
            <div >

              <Link style={{ textDecoration: 'none' }} >Services </Link>
            </div>
            <div >

              <Link style={{ textDecoration: 'none' }}  >Help</Link>
            </div>
          </div>
          
          <div id="home-btn" >
            <div className="nav-element" id='login-btn'>
              <button>Sign Up</button>
            </div>
            <div className="nav-element" id='login-btn'>
              <button>Log In</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
