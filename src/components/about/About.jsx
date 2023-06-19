import React from 'react'
import './about.css'
import ME from '../../assets/me.JPG'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {TbFileCertificate} from 'react-icons/tb'
const About = () => {
  return (
    <section id = 'about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src= {ME} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Elepant Apps</small>
              <br />
              <small>Sabanci University</small>
              <br />
              <small>Tupras</small>
            </article>
            <article className='about__card'>
              <FaGraduationCap className='about__icon'/>
              <h5>Education</h5>
              <small>Sabanci University Computer Science and Engineering</small>
              <br />
              <small>Alev High School</small>
              
            </article>
            <article className='about__card'>
              <TbFileCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>Deutsches Sprach Diplom B1</small>
            </article>
          </div>
          <br />
          <br />
          <p>
          Welcome to my Website !  I'm a result-oriented Senior Computer Science and Engineering student at Sabanci University based in Istanbul Turkey, offering excellent analytical skills and abilities to develop computational approaches to complex problems, develop sophisticated algorithms as well as social abilites such as team work, collaboration, time management and conflict resolution. 
          </p>
          <br />
          <br />
          <a href="#contact" className='btn btn-primary'> Get In Touch With Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About