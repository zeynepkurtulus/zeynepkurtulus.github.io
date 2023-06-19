import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {IoIosMail} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/zeynepkurtulus/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/zeynepkurtulus" target="_blank"><ImGithub/></a>
        <a href="https://www.instagram.com/_zeynepkurtulus/" target="_blank"><BsInstagram/></a>
        <a href="mailto: zeynepkrtls01@gmail.com" target="_blank"><IoIosMail/></a>

    </div>
  )
}

export default HeaderSocials