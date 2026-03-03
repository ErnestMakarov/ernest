import React from 'react'
import Process1 from "../img/icons/process-1.png"
import Process2 from "../img/icons/process-2.png"
import Process3 from "../img/icons/process-3.png"
import Process4 from "../img/icons/process-4.png"



const Process = () => {
  return (
    <main className='process' id='process'>
        <div className="container process-wrapper">
            <div data-aos="fade-right" className="process-text">
                <h2 className='process-tittle'>My Website Development <span>Process</span></h2>
                <p>I work with a structured 4-step development process. 
                    Each stage is approved separately and requires a prepayment, 
                    ensuring transparency and predictable results.</p>
            </div>

            <div className="process-container">
                <div data-aos="fade-right" className="process-block">
                    <img src={Process2} alt="" />
                    <div className="process-block-text">
                        <h3>1. Concept & Strategy</h3>
                        <p>I collect all project requirements, analyze your business and target audience, and define the website structure and design direction. This stage sets the foundation for the entire project.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-block">
                    <img src={Process4} alt="" />
                    <div className="process-block-text">
                        <h3>2. Final Design</h3>
                        <p>I create the final website design, including layout, colors, typography, and user interface elements. The design is refined based on your feedback until full approval.</p>
                    </div>
                </div>
                <div data-aos="fade-right" className="process-block">
                    <img src={Process3} alt="" />
                    <div className="process-block-text">
                        <h3>3. Website Development</h3>
                        <p>I develop a fast, responsive, and reliable website based on the approved design. The site is optimized for all devices and modern browsers.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="process-block">
                    <img src={Process1} alt="" />
                    <div className="process-block-text">
                        <h3>4. SEO, Promotion</h3>
                        <p>I optimize the website for search engines, improve performance, and can assist with promotion and ongoing technical support after launch.</p>
                    </div>
                </div>

            </div>
        </div>
    </main>
  )
}

export default Process