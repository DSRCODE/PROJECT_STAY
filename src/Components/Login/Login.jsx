import React, { useEffect, useRef } from "react";
import logo from "../../Images/logo.png";
 import EmailIcon from "@mui/icons-material/Email";
 import LockIcon from "@mui/icons-material/Lock";
import { gsap } from "gsap";

import "./login.css";

const Login = () => {
  let newpage = useRef(null);
  useEffect(() => {
    gsap.from(".login-page-parent-1", {
      rotateX: 15,
      rotateY: 10,
      duration: 10,
      delay: 1,
      yoyo: true,
      repeat: -1,
      stagger: 1,
    });
    gsap.to(".login-page-parent-1", {
      rotateX: -15,
      rotateY: -15,
      duration: 10,
      delay: 1,
      yoyo: true,
      repeat: -1,
    });
  }, []);
  return (
    <div className="Login-page-first-parent">
      <div className="login-page-parent-1" ref={(el) => (newpage = el)}>
        <div className="login-page-child-2">
          <div className="login-page-main-part">
            <div className="login-page-heading-main">
              <h1 className="main-heading-login">Sign In</h1>
            </div>
            <div className="input-login-part">
              <div className="input-email-login-page">
                <input type="text" placeholder="email" autoFocus="true" />

                <EmailIcon id="login-page-input-icon" />
              </div>
              <div className="input-email-login-page">
                <input type="password" placeholder="password" minLength="8" />

                <LockIcon id="login-page-input-icon" />
              </div>
              <div className="forgot-password-login-page">
                <p>Forget Password?</p>
              </div>
              <div className="login-input-button">
                <button className="login-input-page-btn">Sign In</button>
              </div>
            </div>
          </div>
        </div>
        <div className="login-page-child-3">
          <div className="login-right-signup-page-information">
            <div className="login-heading-right-side">
              <h2 className="page-heading-tertiary-right">New Here!!</h2>
            </div>
            <div className="login-content-page-right">
              <p className="login-content-para">
                Create Account in Stay and become tension Free
              </p>
            </div>
            <div className="button-right-side-login-page">
              <button className="right-side-page-btn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
