import React, { useState } from 'react'; // Import React
//import NavBar from './NavBar'; // Import the NavBar component
import Header from '../components/Header';
import './About.css'

function AboutPage() {

  return (
    <>
    <Header/>
    <div className="TODO_REMOVE"></div>
    <div className="about-page">
      {/* <NavBar /> Render the NavBar component */}
      {/* <Header/> */}
      <h2 className="about-title">About</h2>
      <p className="cheesy-text">This is a little about what makes us so special.</p>
      <div className="content-wrapper">
        <div className="about-section">
          <div className="text-box">
            <p>
              SDSUthrift is a thrift store dedicated to serving the needs of college students at San Diego State University. 
              Our mission is to provide affordable and sustainable clothing options to students while promoting eco-friendly practices.
              We strive to create a community where students can buy and sell pre-loved items, reducing waste and supporting sustainability efforts.
            </p>
            <p>Sound interesting?</p>
            <button className="get-started-button">Get Started</button>
          </div>
        </div>
        <div className="image-section">
          <img src="../src/assets/thriftstorepic.jpg" alt="Thrift Store" /> {/* Corrected image source */}
        </div>
      </div>
      <div className="quick-facts-section">
        <h3>Quick Facts</h3>
        <ul>
          <li>We donate 50% of our profits to save endangered pandas.</li>
          <li>We offer a lifetime warranty on all our products.</li>
          <li>Our store is haunted by friendly ghosts.</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default AboutPage