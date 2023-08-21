import React from 'react';
import "./Nav.css"
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-box1">
        <div className="logo">
          <h1>Logo</h1>
        </div>
      </div>

      <div className="navbar-box2">
        
        <div className="navbar-element1">
          <ul>
            <li> <Link>Home</Link></li>
            <li><Link>Tenant</Link></li>
            <li><Link>Owner</Link></li>
            <li><Link>Services</Link></li>
            <li><Link>About</Link></li>
          </ul>
        </div>

        <div className="navbar-element2">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>

      </div>

    </div>
  );
}

export default Nav;
