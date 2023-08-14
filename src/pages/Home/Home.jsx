import React from 'react'
import "./Home.css"
import Nav from "../../Components/Navbar/Nav"
import videobg2 from '../../images/backv2.mp4'
import Center from '../../Components/Center/Center'
import Homeelement from '../../Components/Center/Homeelement'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';





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
      </div>
    </>
  )
}

export default Home



















// function Home() {
//   return (
//     <>
//     <Nav />
//       <div className="home-container">
//         <div className="home-content">
//           <div className="background-video">
//             <video src={videobg} autoPlay loop muted />
//           </div>
//           <h1>Find Your Landlord</h1>
//           <div className="home-searchbar" id='home-search'>
//             <input type="search" name="" id="" placeholder='Search Your Place...' />
//             <button>Search</button>
//           </div>
//           <span>Having difficult to live, let's join us and find your happy stay...</span>
//         </div>
//       </div>
//       {/* <Homeelments title="House On Rent" />
//       <Homeelments title="Hostel To Stay" />
//       <Homeelments title="PG For Students" />   */}
//       <Center/>
//     </>
//   )
// }

// export default Home