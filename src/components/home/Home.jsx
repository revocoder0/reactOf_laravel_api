import React from 'react'
import './Home.css';
import Me from '../../assets/about.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <div className='home_home'>
    <section className='home container' id='home'>
    <div className='intro'>
      <img className='home_img' src={Me} alt=''/>
      <h1 className='home_name'>Unknown Coder</h1>
      <h4 className='home_education'>I'm unknown coder of Computer Science</h4>
      <HeaderSocials />

      <a href='#contact' className='btn'>Hire Me</a>
      <ScrollDown />
    </div>
  </section>
    </div>
  );
};

export default Home