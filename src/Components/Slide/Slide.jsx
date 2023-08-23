import React from "react";
import "./Slide.css";
import Lottie from "lottie-react";
import choose from "../../assets/lottifile/home1.json";
const Slide = () => {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="slide-box2">
          <h1>Why To Choose Stay ?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            commodi labore, similique voluptatem eaque sequi aliquam mollitia
            doloribus molestiae quod a at voluptatum nesciunt atque. Quibusdam
            unde perspiciatis dolorem corporis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rem, repudiandae possimus?
            Necessitatibus?Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="slide-box1">
          <Lottie className="lottie" animationData={choose} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
