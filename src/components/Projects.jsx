import React from 'react'
import FirstProject from "../img/first-project-img.png"
import SecondProject from "../img/second-project-img.png"
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <main className="projects" id='projects'>
        <div className="container">
            <div className="first-project   project">
                <div data-aos="fade-right" className="first-project-text">
                    <p className='purple-text'>Featured  Project</p>
                    <h4>Voltamp website</h4>
                    <div className="first-project-cart project-cart">
                        <p>A large-scale corporate website for an electrical solutions company, 
                            designed to deliver a strong, modern, and trustworthy online presence. 
                            The platform includes detailed service pages, project showcases, 
                            and clear contact sections, covering everything a client needs in one place.
                             Fully responsive and performance-optimized, the site provides a smooth and 
                             professional experience across all devices.</p>
                        <a target='blank' href="https://voltamp.ee/en">visit <GoArrowUpRight /></a>
                    </div>
                </div>  

                <img src={FirstProject} alt="" data-aos="fade-left" />

            </div>

            <div className="second-project  project">

                <img data-aos="fade-right" src={SecondProject} alt="" />

                <div data-aos="fade-left" className="second-project-text">
                    <p className='purple-text'>Featured  Project</p>
                    <h4>EXFRAG brand website</h4>
                    <div className="second-project-cart project-cart">
                        <p>A fashion brand website designed for EXFRAG, blending archive aesthetics with a modern digital experience.
                             Visitors can explore collections, view detailed product pages, browse past releases, and connect with
                              the brand through an intuitive interface. The project focuses on visual storytelling, responsive design,
                               and creating a distinctive online presence for an independent clothing label.</p>
                        <a target='blank' href="https://www.exfrag.eu/">visit <GoArrowUpRight /></a>
                    </div>
                </div>
            </div>

            <a data-aos="fade-right" className='project-btn' target='blank' href="https://github.com/ErnestMakarov">Check more <GoArrowUpRight /></a>

        </div>
    </main>
  )
}

export default Projects