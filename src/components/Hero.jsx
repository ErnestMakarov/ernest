import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <main className="hero" id='about'>
        <div className="container">
            <div className="hero-container">
                <h1 className='hero-text' data-aos="fade-down">Web Developer in Estonia<br/>
                  Building Modern React Websites</h1>
                <h2 data-aos="fade-down" >Transforming <span>Concepts</span> into Seamless User Experiences</h2>
                <p data-aos="fade-up" className='hero-second-text'>I design and develop fast, accessible websites that help businesses grow.</p>
                <a data-aos="fade-up" className='hero-btn' href="#contact">Get a website <GoArrowUpRight /></a>
            </div>
        </div>
    </main>
  )
}

export default Hero