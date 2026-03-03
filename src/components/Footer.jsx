import React from 'react'
import Inst from "../img/icons/instagram.png"
import Tg from "../img/icons/telegram.png"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-container">
                <div className="social-icons">
                    <a href="/"><img src={Inst} alt="instagram" /></a>
                    <a href="/"><img src={Tg} alt="telegram" /></a>
                </div>
                <p>Ernest Makarov. All rights reserved</p>
            </div>
        </div>
    </footer>  
  )
}

export default Footer