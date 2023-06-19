import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>zeynepkrtls01@gmail.com</h5>
            <a href="mailto: eynepkrtls01@gmail.com">Send a Message</a>
          </article>
          <br />
          <article className="contact__option">
          <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>_zeynepkurtulus</h5>
            <a href="https://www.instagram.com/_zeynepkurtulus/">Send a Message</a>
          </article>
          <br />
        </div>
        <div className='container contact__container2'>
        <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>zeynepkurtulus</h5>
            <a href="https://www.linkedin.com/in/zeynepkurtulus/">Send a Message</a>
          </article>
          <br />
          <article className="contact__option">
          <ImGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>zeynepkurtulus</h5>
            <a href="https://github.com/zeynepkurtulus">Send a Message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}

      
      </div>
    </section>
  )
}

export default Contact