import React, { useRef } from 'react'
import { GoArrowUpRight } from "react-icons/go"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        console.log('SUCCESS!')
        alert("Message sent")
        form.current.reset()
      },
      (error) => {
        console.log('FAILED...', error.text)
        alert("Sth wrong")
      }
    )
  }

  return (
    <main className="contact" id='contact'>
      <div className="container">
        <div className="contact-container">
          <div data-aos="fade-right" className="contact-text">
            <h3>Have a <span>project</span> in mind? Let’s build something effective.</h3>
            <p>Have a project in mind or a question? Feel free to contact me — I usually reply quickly and I’m always open to new ideas and collaborations.</p>
          </div>

          <form data-aos="fade-left" ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="name-email-container">
              <input required name='name' className='input-name' type="text" placeholder='name...' />
              <input required name='email' className='input-email' type="text" placeholder='email...' />
            </div>
            <textarea required name='message' className='input-message' type="text" placeholder='message...' />
            <button className='sent-btn' type="submit">Send <GoArrowUpRight /></button>
          </form>
        </div>

        <div data-aos="fade-up" className="contact-second-text">
          <p>I'm currently looking to join a cross-functional team that values improving people's lives
            through accessible design. or have a project in mind? Let's connect.</p>
          <p className='contact-emeil'>ernest.webdevelopment@gmail.com</p>
        </div>
      </div>
    </main>
  )
}

export default Contact
