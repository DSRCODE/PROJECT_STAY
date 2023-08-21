import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Card.css"
function Card(props) {
    let card1 = useRef(null);
    let card2 = useRef(null);
    let card3 = useRef(null);
    let cardpage = useRef(null);
    let pagehead=useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.from(card1, {
            y: 400,
            scale:0,
            delay:2,
            duration: 2,     
            scrollTrigger: {
                trigger: cardpage,
                scroller: "body",
                // markers: "true",
                start: "top 60%",
                end: "top 40%",
                scrub: "true",
            }
        })
        gsap.from(card2, {
            y: 400,
            scale:0,
            delay:2,
            duration: 2,     
            scrollTrigger: {
                trigger: cardpage,
                scroller: "body",
                // markers: "true",
                start: "top 60%",
                end: "top 40%",
                scrub: "true",
            }
        })
        gsap.from(card3, {
            y: 400,
            delay:2,
            scale:0,
            duration: 2,     
            scrollTrigger: {
                trigger: cardpage,
                scroller: "body",
                // markers: "true",
                start: "top 60%",
                end: "top 40%",
                scrub: "true",
            }
        })
        gsap.from(pagehead, {
            opacity:0,
            delay:2,
            duration: 2,     
            scrollTrigger: {
                trigger: cardpage,
                scroller: "body",
                // markers: "true",
                start: "top 60%",
                end: "top 40%",
                scrub: "true",
            }
        })
    }, [])
    return (
        <div className="home-component" id='house' >
            <section>
                <h1 ref={el => { pagehead = el }}>{props.title}</h1>
            </section>
            <div className="home-component1"ref={el => { cardpage = el }}>

                <div className="home-component-element"  ref={el => { card1 = el }}>
                    <div className="img">
                        <img src={props.img} alt="" />
                    </div>

                    <div className="info">
                        <h3>{props.subtitle}</h3>
                        <h4>Price Range - 4k to 5k</h4>

                        <p>This Semi furnished 1 BHK villa/ individual house  with most a 1 bathroom in Pratap Nagar,
                            Jaipur in immediately available for rent with a rental of Rs 9000,
                            per month and  500 rs maintenance charges.</p>
                        <button>READ MORE</button>
                    </div>
                </div>
                <div className="home-component-element" ref={el => { card2 = el }}>
                    <div className="img">
                    <img src={props.img} alt="" />
                    </div>

                    <div className="info">
                        <h3>{props.subtitle}</h3>
                        <h4>Price Range - 4k to 5k</h4>

                        <p>This Semi furnished 1 BHK villa/ individual house  with most a 1 bathroom in Pratap Nagar,
                            Jaipur in immediately available for rent with a rental of Rs 9000,
                            per month and  500 rs maintenance charges.</p>
                        <button id='readmore'>READ MORE</button>
                    </div>
                </div>
                <div className="home-component-element" ref={el => { card3 = el }}>
                    <div className="img">
                    <img src={props.img} alt="" />
                    </div>

                    <div className="info">
                        <h3>{props.subtitle}</h3>
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
