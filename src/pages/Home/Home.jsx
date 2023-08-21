import React from 'react'
import "./Home.css"
import Nav from "../../Components/Navbar/Nav"
import videobg2 from '../../images/backv2.mp4'
import Center from '../../Components/Center/Center'
import Homeelement from '../../Components/Center/Homeelement'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import stay22 from '../../images/stay22.jpg'
import stay23 from '../../images/room.jpg'
import stay21 from '../../images/room1.jpg'
import back from  '../../images/3dback2.jpg'
import Card from '../../Components/Center/Card'
import Slide from '../../Components/Slide/Slide'


function Home() {
  let headline = useRef(null);
  let subheadline = useRef(null);
  let background = useRef(null);
  useEffect(() => {
    gsap.from(headline, {
      opacity: 0,
      color: "black",
      background: "black",
      duration: 0.5,
      stagger: "1",
      delay: 2
    })
    gsap.from(background, {
      scale: 2,
      duration: 17,
      delay: 2,
      repeat:-1,
      yoyo: 1,

    })
    gsap.from(subheadline, {
      opacity: 0,
      color: "black",
      background: "black",
      duration: 1,
      delay: 2.1

    })
  },[])
  return (
    <>
      <div className="homepage">
        <Nav />
        <div className="background-video">
          {/* <video src={videobg2} autoPlay loop muted /> */}
          <img src={back} alt="" ref={el => { background = el }} />
        </div>
        <div className="home-container" >
          <div className="home-container-child">
            <div className="home-content">
              <h1 ref={el => { headline = el }}> We Believe In Shelter</h1>
              <span ref={el => { subheadline = el }}>Having difficult to live, let's join us and find your happy stay...</span>
            </div>
            <div className="home-content">
              <Homeelement />
            </div>
          </div>
        </div>
        <Center />
        <Card title="Room For Rent" img={stay22} subtitle="Single Bed Room"/>
        <Card title="Hostel To Stay" img={stay23}  subtitle="Double Bed Room" />
        <Card title="PG For Student" img={stay21} subtitle="Luxary Room "/>
        <Slide />
      </div>
    </>
  )
}

export default Home










