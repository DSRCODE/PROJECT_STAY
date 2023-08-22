import React, { useRef,useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import stay22 from '../../images/stay22.jpg'
import "./Card.css"
function Card(props) {
    let card = useRef(null);
    let cardpage = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from(card, {
            opacity:0,
            scale:0,
             duration: 1,
             delay: 1,
             scrollTrigger: {
               trigger: cardpage,
               scroller: "body",
               // markers: "true",
               start: "top 90%",
               end: "top 50%",
               scrub: "true",
             }
           })
      },[])
    return (
        <div className="home-component" id='house' ref={el => { cardpage = el }}>
            <section>
            <h1>{props.title}</h1>
            </section>
            <div className="home-component1">
                
                <div className="home-component-element" >
                <div className="img">
                    <img src={stay22} alt="" />
                    </div>
                  
                    <div className="info">
                         <h3>Single bed Room</h3>
                         <h4>Price Range - 4k to 5k</h4>

                         <p>This Semi furnished 1 BHK villa/ individual house  with most a 1 bathroom in Pratap Nagar,
                            Jaipur in immediately available for rent with a rental of Rs 9000,
                             per month and  500 rs maintenance charges.</p>
                         <button>READ MORE</button>   
                    </div>
                </div>
                <div className="home-component-element">
                    <div className="img">
                    <img src={stay22} alt="" />
                    </div>
                  
                    <div className="info">
                         <h3>Single bed Room</h3>
                         <h4>Price Range - 4k to 5k</h4>

                         <p>This Semi furnished 1 BHK villa/ individual house  with most a 1 bathroom in Pratap Nagar,
                            Jaipur in immediately available for rent with a rental of Rs 9000,
                             per month and  500 rs maintenance charges.</p>
                         <button id='readmore'>READ MORE</button>   
                    </div>
                </div>
                <div className="home-component-element">
                <div className="img">
                    <img src={stay22} alt="" />
                    </div>
                   
                    <div className="info">
                         <h3>Single bed Room</h3>
                         <h4>Price Range - 4k to 5k</h4>

                         <p>This Semi furnished 1 BHK villa/ individual house  with most a 1 bathroom in Pratap Nagar,
                            Jaipur in immediately available for rent with a rental of Rs 9000,
                             per month and  500 rs maintenance charges.</p>
                         <button>READ MORE</button>   
                    </div>
                </div>
            </div>
            <div className="btn">
                <button > View More</button>
            </div>

        </div>


    )
}

export default Card
