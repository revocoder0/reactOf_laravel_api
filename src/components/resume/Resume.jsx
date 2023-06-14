import React from 'react'
import './Resume.css'
import axios from 'axios'
import Axioss from '../config/Axoiss';

const Resume = () => {
  const [resume , setResume] = React.useState([]);

  React.useEffect(()=>{
    Axioss.get('/resume').then((res)=>{
      setResume( res.data.data);
     });
  }, []);
  return (
    <div className='container section resume' id='resume'>
      <h2 className='section_title'>Experiance</h2>

      <div className='resume_container grid'>
          <div className='timeline grid'>
            {
              resume.map((d)=>{
                if(d.categoryResume==='education'){
                  return(
                    <div className='timeline_item'>
                      <i className='icon-graduation darkMode_icon'></i>
                      <span className='timeline_date'>{d.yearTo_year}</span>
                      <h3 className='timeline_title'>{d.title}</h3>
                      <p className='timeline_desc'>{d.sub_title}</p>
                    </div>
                  )
                }
              })
            }
          </div>

          <div className='timeline grid'>
          {
              resume.map((d)=>{
                if(d.categoryResume==='experiance'){
                  return(
                    <div className='timeline_item'>
                      <i className='icon-briefcase darkMode_icon'></i>
                      <span className='timeline_date'>{d.yearTo_year}</span>
                      <h3 className='timeline_title'>{d.title}</h3>
                      <p className='timeline_desc'>{d.sub_title}</p>
                    </div>
                  )
                }
              })
            }
          </div>
      </div>
    </div>
  )
}

export default Resume