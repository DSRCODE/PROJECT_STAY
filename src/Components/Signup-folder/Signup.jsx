import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import one from "../../Lottie_json/one.json";
import house2 from "../../Lottie_json/house2.json";
import three from "../../Lottie_json/three.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import EmailIcon from '@mui/icons-material/Email';
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import PhoneIcon from "@mui/icons-material/Phone";


//  import { MdEmail, BsTelephone, BsFillPersonFill } from "react-icons/fa";
import { gsap } from "gsap";

import "./signup.css";

const Signup = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const carouselSlides = [
    <Lottie key={0} animationData={one} />,
    <Lottie key={2} animationData={three} />,
    <Lottie key={3} animationData={house2} />
  ];

  const handleSlideChange = (index) => {
    const newSlideIndex =
      (currentSlide + index + carouselSlides.length) % carouselSlides.length;
    setCurrentSlide(newSlideIndex);
  };
  let page = useRef(null);
  useEffect(() => {
    console.log(page);
    gsap.from(".hub-signup", {
      rotateX: 20,
      rotateY: 10,
      duration: 10,
      delay: 1,
      yoyo: true,
      repeat: -1,
      stagger: 1,
    });
    gsap.to(".hub-signup", {
      rotateX: -20,
      rotateY: -15,
      duration: 10,
      delay: 1,
      yoyo: true,
      repeat: -1,
    });
  }, []);
  //  let user_input=document.getElementById("email-input-value").value;
  //   console.log(user_input);

  return (
    <div className=" signup-hub">
      <div className="hub-signup" ref={(el) => (page = el)}>
        <div className="sign-part-1">
          <div className="signup-part1-heading">
            <h1>Logo</h1>
          </div>
          <Carousel
            selectedItem={currentSlide}
            infiniteLoop
            autoPlay
            interval={2000}
            className="Lottie-files"
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            transitionTime={1000}
          >
            <div>
              <Lottie animationData={one} />
            </div>

            <div>
              <Lottie animationData={three} />
            </div>
            <div>
              <Lottie animationData={house2} />
            </div>
          </Carousel>
          <div className="title-signup-part1">
            <div className="content">
              Get your Desire Flat and Room in Every City of India
            </div>
          </div>
        </div>
        <div className="signup-part-2">
          <div className="signup-page-main-heading">
            <h1 className="signup-page-heading-child">Sign Up</h1>
          </div>

          <div className="form">
            <div className="input-email-parent">
              <div className="input-email-child">
                <input
                  type="text"
                  className="email-input"
                  placeholder="fullName"
                  autoFocus="true"
                  id="email-input-value"
                />
                <PersonSharpIcon id="input-email-child-icon" />
              </div>
              <div className="input-email-child">
                <input
                  type="email"
                  className="email-input "
                  placeholder="email"
                  id="email-input-value"
                />
                <EmailIcon id="input-email-child-icon" />
              </div>
              <div className="input-email-child">
                <input
                  type="Number"
                  className="email-input"
                  placeholder="number"
                  maxLength="10"
                  id="email-input-value"
                />
                <PhoneIcon   id="input-email-child-icon" />
              </div>
              <div className="new-input-checkbox">
                <input type="checkbox" id="input-read-checkbox" />
                <label htmlFor="input-read-checkbox">
                  <span className="input-checkbox-content">
                    I read and Agree{" "}
                    <em className="italic-content-checkbox">
                      Terms & Conditions
                    </em>
                  </span>
                </label>
              </div>
              <div className="signup-page-button">
                <button className="signup-page-btn">Next</button>
              </div>
            </div>
            <div className="extra-signup-properties">
              <div className="signup-already-account">
                <a href="" className="signup-already-account-child-anchor">
                  Already have an account?
                  <span className="sigup-already-account-span">Log in</span>
                </a>
              </div>
              <div className="signup-with-google-socialmedia-handle">
                <button className="signup-content-with-social-media">
                  Continue with {""}
                  <span className="signup-content-with-social-media-google-span">
                    Google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
