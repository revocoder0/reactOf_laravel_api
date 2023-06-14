import React from 'react'
import './Blog.css'
import Image2 from  '../../assets/business.png'
import axios from 'axios'
import Axioss from '../config/Axoiss'



const Blog = () => {
  const [blog, setBlog] = React.useState([]);
  // Data blog
  React.useEffect(()=>{
    Axioss.get('/blog').then((res)=>{
     setBlog( res.data.data);
    });
  }, []);
  // End data Blog
  return (
    <section className='container section blog' id='blog'>
      <h2 className='section_title'>Latest Posts</h2>

      <div className='container_blog grid'>
             {
              blog.map((d)=>{
                return(
                  <div className='blog_card' key={d.id}>
                      <div className='blog_thumb'>
                        <a className='' href=''>
                          <span className='blog_category'>{d.category.name}</span>
                        </a>
                        <a className='' href=''>
                          <img className='blog_img' src={Image2} alt='blogPhoto'/>
                          {/* `http://localhost:8000/storage/uploads/${d.image}` */}
                        </a>
                      </div>
                      <div className='blog_detials'>
                        <a href='' className=''><h3 className='blog_title'>{d.title}</h3></a>
                        <div className='blog_meta'>
                          <span>7 - July - 2022</span>
                          <span className='blog_dot'>.</span>
                          <span>{d.user.name}</span>
                        </div>
                     </div>
                  </div>
                )
              })
             }
      </div>
    </section>
  )
}

export default Blog