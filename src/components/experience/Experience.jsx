import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id = 'experience'>
      <h5>Here's What I Do</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__app">
            <h3>Mobile App Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>Kotlin</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>Java</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>MongoDB</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>Spring Tool Suite</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>Firebase</h4>
                </article>
            </div>
        </div>

    {/*END OF APP EXPERIENCE*/}

        <div className="experience__web">
            <h3>Web Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>HTML</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>CSS</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>MySQL</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>PHP</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>Javascript</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>C++</h4>
                </article>
                <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <h4>Python</h4>
                </article>
            </div>
        </div>
    

      </div>
    </section>
  )
}

export default Experience