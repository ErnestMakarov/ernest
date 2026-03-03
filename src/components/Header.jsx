import React from 'react'
import Logo from "../img/ERNEST.svg"

const Header = () => {
  return (
    <header data-aos="fade-down" className='header'>
        <div className="header-container    container">
            <a className='header-logo' href="/">
                <img src={Logo} alt="" />
            </a>

            <ul className='header-links'>
                <li>
                    <a className='header-link' href="/">Home</a>
                </li>
                <li>
                    <a className='header-link' href="#process">Process</a>
                </li>
                <li>
                    <a className='header-link' href="#projects">Projects</a>
                </li>
                <li>
                    <a className='header-link' href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    </header>
  )
}

export default Header