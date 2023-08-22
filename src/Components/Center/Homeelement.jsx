import React from 'react'
import "./Center.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react'
import Lottie from "lottie-react"
import choose from "../../Assets/lottifile/choose1.json"
function Homeelement() {
    let centerpage = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      gsap.from(centerpage, {
       opacity:0.4,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: centerpage,
          scroller: "body",
          // markers: "true",
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        }
      })
    })
    return (
        <div  className='centerpage' ref={el => { centerpage = el }}>
            <div className="center-element" id='usertype' >
                <div className="C-element" id='tenant'>TENANT</div>
                <div className="C-element">
                    <div className="lottie">
                        <Lottie animationData={choose} />
                    </div>
                </div>
                <div className="C-element" id='landlord'>LANDLORD</div>
            </div>
            <div className="center-element" id='userdata' >
                <div className="infosearch" id='queshading'>
                    <h2>Find Your Space ?</h2>
                </div>
                <div className="infosearch">
                    <div className="infosearch-box" id='location'>
                        <input type="search" name="" id="locate" placeholder='Enter Place' />
                    </div>
                    <div className="infosearch-box" >
                        
                        <select name="Room" id="roomtype">
                            <option value=""> Room Type</option>
                            <option value="single">Single Bed</option>
                            <option value="2bhk">2BHK Room</option>
                            <option value="3bhk">3BHK Room</option>
                            <option value="flat">Flat</option>
                        </select>
                    </div>
                    <div className="infosearch-box" id='roomprice'>
                       
                        <select name="Price" id="Price-range" >
                            <option value=""> Price Range </option>
                            <option value="4000">4k To 5k </option>
                            <option value="6000">7k To 8k</option>
                            <option value="8000">9k To 10k</option>
                            <option value="10000">Under 12k</option>
                            <option value="15000">Under 15k</option>
                            <option value="20000">Under 20k</option>
                        </select>
                    </div>
                    <div className="infosearch-box" id='searchicon'>
                        <h2><i class="fa-solid fa-magnifying-glass glassicon" ></i></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homeelement
