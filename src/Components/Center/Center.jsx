import React from 'react'
import "./Center.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react'
import room4 from '../../images/room4.jpg'

function Center() {
  let backimage = useRef(null);
  let writtendata = useRef(null);
  let writtencontent= useRef(null);
  let writtencontent1= useRef(null);


  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(writtendata, {
       opacity:0,
       duration: 1,
       delay: 1,
       scrollTrigger: {
         trigger: writtendata,
         scroller: "body",
         // markers: "true",
         start: "top 80%",
         end: "top 10%",
         scrub: 'true',
       }
     })
     gsap.from(writtencontent,{
       opacity:0,
       x:-234,
       duration:2,
       delay:1,
       scrollTrigger: {
        trigger: writtendata,
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub:' true',
       }
     })
     gsap.from(writtencontent1,{
      opacity:0,
      x:234,
      duration:2,
      delay:1,
      stagger:1,
      scrollTrigger: {
       trigger: writtendata,
       scroller: "body",
       start: "top 80%",
       end: "top 10%",
       scrub:' true',
      }
    })
    gsap.from(backimage, {
      scale: 2,
      overflow: "hidden",
      duration: 10,
      delay: 2,
      repeat: -1,
      yoyo: "true",
     
    })
     
  },[])
  return (
    <>
      <div className="center-container" >
          <div id="writtendata" ref={el => { writtendata = el }} >
            <div className="written-box1" id='box1' >
              <div className="written-boxitem" id='written-message' ref={el => { writtencontent = el }}>
              <p>We offer you variety of properties,including houses,
                apartments flats and land for rent in your hand.
              </p>
              </div>
             
               <button id='writtenbtn'>Learn More</button>
             
            </div>
            
            <div className="written-box2" id='box2' ref={el => { writtencontent1 = el }}>
              <img ref={el => { backimage = el }} src={room4} className='room4' alt="./images/room4.jpg" />
            </div>
          </div>
        </div>

    </>
  )
}

export default Center
