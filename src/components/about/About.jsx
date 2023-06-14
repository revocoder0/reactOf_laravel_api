import React from 'react'
import './About.css'
import Hero from '../../assets/profile.jpg';
import AboutBox from './AboutBox';
const About = () => {
  return (
    <section className='container section about' id='about'>
      <h2 className='section_title'>About Me</h2>
      <span className='under_line'>
        <small className='dotted'></small>
      </span>
        <div className='about_container grid'>
        <img className='about_img' src={Hero} alt='' />
        <div className='about_data grid'>
          <div className='about_info'>
            <p className='about_description'>
              I'm Unknown Coder, fullstack Developer form USA. I have rich experience in WEBSITE design and building and customization, also I'm good at Photography.
            </p>
            <a href='' className='btn' style={{cursor:'pointer'}}>Download CV</a>
          </div>

          <div className='about_skills grid'>
              <div className='skills_data'>
                  <div className='skills_title'>
                    <h3 className='skills_name'>Fontend</h3>
                    <span className='skills_number'>80%</span>
                  </div>
                  <div className='skills_bar'>
                    <span className='skills_percentage fontend'></span>
                  </div>
              </div>

              <div className='skills_data'>
                  <div className='skills_title'>
                    <h3 className='skills_name'>Backend</h3>
                    <span className='skills_number'>90%</span>
                  </div>
                  <div className='skills_bar'>
                    <span className='skills_percentage backend'></span>
                  </div>
              </div>

              <div className='skills_data'>
                  <div className='skills_title'>
                    <h3 className='skills_name'>Photography</h3>
                    <span className='skills_number'>60%</span>
                  </div>
                  <div className='skills_bar'>
                    <span className='skills_percentage photography'></span>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About