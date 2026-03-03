import React from 'react'
import AnimSvg from "../tech.svg"

const Technologies = () => {
  return (
    <main className='technologies'>
        <div className="container">
            <h5 data-aos="fade-down" className='technologies-text'>I help businesses grow by building fast, 
                accessible websites with modern <span>technologies</span>.</h5>
            
            <img data-aos="fade-up" className='technologies-img ' src={AnimSvg} alt="" />
        </div>

    </main>
  )
}

export default Technologies