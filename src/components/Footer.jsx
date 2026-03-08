import React from 'react'
import Inst from "../img/icons/instagram.png"
import Tg from "../img/icons/telegram.png"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-container">
                <div className="social-icons">
                    <a target='blank' href="https://www.instagram.com/ern.e.st/"><img src={Inst} alt="instagram" /></a>
                    <a target='blank' href="https://t.me/ernestweb"><img src={Tg} alt="telegram" /></a>
                </div>
                <p>Ernest Makarov. All rights reserved</p>
            </div>
        </div>
    </footer>  
  )
}

export default Footer