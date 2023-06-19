import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <section id = 'footer'>
        <footer>
          <a href="#" className='footer__logo'>Zeynep Kurtulus</a>
          <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="footer__copyright">
            <small>&copy; Zeynep Kurtulus. All Rights Served. </small>
          </div>
        </footer>
    </section>
  )
}

export default Footer