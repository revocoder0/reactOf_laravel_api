import React from 'react'
import './Blog.css'
import Image1 from  '../../assets/business.png'
import Image2 from  '../../assets/reviews.png'
import Image3 from  '../../assets/business.png'



const Blog = () => {
  return (
    <section className='container section blog' id='blog'>
      <h2 className='section_title'>Latest Posts</h2>

      <div className='container_blog grid'>
        <div className='blog_card'>
          <div className='blog_thumb'>
            <a className='' href=''><span className='blog_category'>Reviews</span></a>
            <a className='' href=''><img className='blog_img' src={Image1} alt='blogPhoto'/></a>
          </div>
          <div className='blog_detials'>
            <h3 className='blog_title'>5 Best App Development Tools for your project</h3>
            <div className='blog_meta'>
                <span>09 Febuary, 2022</span>
                <span className='blog_dot'>.</span>
                <span>Unknown Coder</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a className='' href=''><span className='blog_category'>Tutorials</span></a>
            <a className='' href=''><img className='blog_img' src={Image2} alt='blogPhoto'/></a>
          </div>
          <div className='blog_detials'>
            <h3 className='blog_title'>Common Misconceptions About Payment</h3>
            <div className='blog_meta'>
                <span>07 Febuary, 2022</span>
                <span className='blog_dot'>.</span>
                <span>Unknown Coder</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a className='' href=''><span className='blog_category'>Business</span></a>
            <a className='' href=''><img className='blog_img' src={Image3} alt='blogPhoto'/></a>
          </div>
          <div className='blog_detials'>
            <h3 className='blog_title'>3 Things How To About Stratup Business</h3>
            <div className='blog_meta'>
                <span>05 Febuary, 2022</span>
                <span className='blog_dot'>.</span>
                <span>Unknown Coder</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a className='' href=''><span className='blog_category'>Reviews</span></a>
            <a className='' href=''><img className='blog_img' src={Image1} alt='blogPhoto'/></a>
          </div>
          <div className='blog_detials'>
            <h3 className='blog_title'>5 Best App Development Tools for your project</h3>
            <div className='blog_meta'>
                <span>09 Febuary, 2022</span>
                <span className='blog_dot'>.</span>
                <span>Unknown Coder</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a className='' href=''><span className='blog_category'>Tutorials</span></a>
            <a className='' href=''><img className='blog_img' src={Image2} alt='blogPhoto'/></a>
          </div>
          <div className='blog_detials'>
            <h3 className='blog_title'>Common Misconceptions About Payment</h3>
            <div className='blog_meta'>
                <span>07 Febuary, 2022</span>
                <span className='blog_dot'>.</span>
                <span>Unknown Coder</span>
            </div>
          </div>
        </div>

        <div className='blog_card'>
          <div className='blog_thumb'>
            <a className='' href=''><span className='blog_category'>Business</span></a>
            <a className='' href=''><img className='blog_img' src={Image3} alt='blogPhoto'/></a>
          </div>
          <div className='blog_detials'>
            <h3 className='blog_title'>3 Things How To About Stratup Business</h3>
            <div className='blog_meta'>
                <span>05 Febuary, 2022</span>
                <span className='blog_dot'>.</span>
                <span>Unknown Coder</span>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Blog