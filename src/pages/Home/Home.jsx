import React from 'react'
import "./Home.css"
import Nav from "../../Components/Navbar/Nav"
import videobg2 from '../../images/backv2.mp4'
import Center from '../../Components/Center/Center'
import Homeelement from '../../Components/Center/Homeelement'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Card from '../../Components/Center/Card'


function Home() {
  let headline = useRef(null);
  let subheadline = useRef(null)
  useEffect(() => {
    gsap.from(headline, {
      // scale: 0,
      opacity: 0,
      color: "black",
      background: "black",
      duration: 0.5,
      stagger: "1",
      delay: 2

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
          <video src={videobg2} autoPlay loop muted />
        </div>
        <div className="home-container">
          <div className="home-container-child">
            <div className="home-content">
              <h1 ref={el => { headline = el }}> <span className="s1">Find</span>
                <span className="s2">Your</span><span className="s3">Landlord</span></h1>

              <span ref={el => { subheadline = el }}>Having difficult to live, let's join us and find your happy stay...</span>
            </div>
            <div className="home-content">
              <Homeelement />
            </div>
          </div>
        </div>
        <Center />
        <Card title="Room For Rent"/>
        <Card title="HOstel To Stay"/>
        <Card title="PG For Student"/>
      </div>
    </>
  )
}

export default Home










