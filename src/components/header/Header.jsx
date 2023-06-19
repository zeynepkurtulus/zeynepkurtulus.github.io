import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Image.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h2>Hello.</h2>
            <h1>I'm Zeynep.</h1>
            <h4 className="text-light">Senior Computer Science and Engineering Student, Developer and a Life Time Learner.</h4>
            <CTA />
            <HeaderSocials />

            <div className="me">
            <img src= {ME} alt="" />
            </div>
            <a href="#contact" className='scroll__down'> Scroll Down</a>  
        </div>
    </header>
  )
}

export default Header