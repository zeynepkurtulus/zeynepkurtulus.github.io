import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaRegUserCircle} from 'react-icons/fa'
import {BiCodeCurly} from 'react-icons/bi'
import {BsInfoCircle} from 'react-icons/bs'
import { useState } from 'react'
const Nav = () => {
    const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href= "#" className={activeNav === '#' ? 'active' : ''}><HiHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUserCircle/></a>
        <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiCodeCurly/></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsInfoCircle/></a>
    </nav>
  )
}

export default Nav