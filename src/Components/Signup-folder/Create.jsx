import React from "react";
import logo from "../../Images/logo.png";
import Lottie from "lottie-react";
import one from "../../Lottie_json/one.json";
import house2 from "../../Lottie_json/house2.json";
import three from "../../Lottie_json/three.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

 import PasswordIcon from "@mui/icons-material/Password";
 import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
 import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
 import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./create.css";

const Create = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const carouselSlides = [
    <Lottie key={0} animationData={one} />,
    <Lottie key={2} animationData={three} />,
    <Lottie key={3} animationData={house2} />,
  ];

  const handleSlideChange = (index) => {
    const newSlideIndex =
      (currentSlide + index + carouselSlides.length) % carouselSlides.length;
    setCurrentSlide(newSlideIndex);
  };
  return (
    <div className=" signup-hub">
      <div className="hub-signup">
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
        <div className="signup-part-3">
          <div className="signup-page-main-heading">
            <h1 className="signup-page-heading-child">
              Sign <span className="main-heading">Up</span>
            </h1>
          </div>

          <div className="account-page-parent">
            <div className="input-email-parent">
              <div className="input-email-child   create-page-input-style ">
                <input
                  type="password"
                  placeholder="Password:"
                  autoFocus="true"
                  className="input-type-page"
                />
                <PasswordIcon id="input-email-child-icon" />
              </div>
              <div className="input-email-child   create-page-input-style">
                <input
                  type="password"
                  placeholder="New Password:"
                  className="input-type-page"
                />
                <PasswordIcon id="input-email-child-icon" />
              </div>
              <div className="input-email-child   create-page-input-style ">
                <input
                  type="text"
                  placeholder="Username:"
                  className="input-type-page"
                />
                <AccountCircleOutlinedIcon  id="input-email-child-icon" /> 
              </div>
              <div className="input-email-child   create-page-input-style ">
                <input
                  type="Address"
                  placeholder="Address:"
                  className="input-type-page"
                />
                <LocationOnOutlinedIcon  id="input-email-child-icon" />
              </div>

              <div className="page-account-button">
                <button className="account-page-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
