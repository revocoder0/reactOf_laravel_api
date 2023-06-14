import React, { useEffect } from 'react'
import './Portfolio.css'
import axios from 'axios'
import Axioss from '../config/Axoiss'
import ImgOne from '../../assets/reviews.png'

const Portfolio = () => {
    const [portofolio , setPortofolio] = React.useState([]);
  //Data
  React.useEffect(()=>{
    Axioss.get('/portofolio').then((res)=>{
     setPortofolio( res.data.data);
    });
  }, [])
  //Axios Data
  return (
    <section className='work container section' id='portfolio'>
      <h2 className='section_title'>Recent Work</h2>

      <div className='work_container grid'>
          {
            portofolio.map((d)=>{
              return(
                <div className='work_card' key={d.id}>
                  <div className='work_thumbnial'>
                    <img src={ImgOne} alt= '' className='work_img' />
                    {/* `http://localhost:8000/storage/uploads/${d.image}` */}
                    <div className='work_mask'></div>
                  </div>
  
                  <span className='work_category'>{d.title}</span>
                  <h3 className='work_title'>{d.description}</h3>
                  <a href={d.link} className='work_button'>
                      <i className='link icon-link work_button-icon'></i>
                  </a>
                </div>
              )
              })
          }
      </div>
    </section>
  )
}

export default Portfolio