import React from 'react'
import './Home.css';
import Me from '../../assets/profile.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
// import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='home_home'>
    <section className='home container' id='home'>
    <div className='intro'>
      <img className='home_img' src={Me} alt=''/>
      <h1 className='home_name'>Unknown Coder</h1>
      <h4 className='home_education'>I'm unknown coder of Computer Science.</h4>
      <HeaderSocials className='social' />

      <a href='#contact' className='btn'>Hire Me</a>
      <ScrollDown />
    </div>
  </section>
    </div>
  );
};

export default Home