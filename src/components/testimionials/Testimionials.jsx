import React from 'react'
import './Testimionials.css'
import Image1 from '../../assets/userOne.svg';
import Image2 from '../../assets/userTwo.svg';
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimionials() {
  return (
    <section className='container section testimionials'>
      <h2 className='section_title'>Clients & Reviews</h2>

      <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop = {true}
      grabCursor={1}
      pagination={{ clickable: true }}

      className='testimionials_container grid'>
          <SwiperSlide className='testimionials_item'>
            <div className='thumb'>
              <img src={Image1} className='testimionials_img' alt='photo'/>
            </div>
            <h3 className='testimionials_title'>Kyaw Soe</h3>
            <span className='subtitle'>Product Designer at Dribble</span>
            <div className='comment'>I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good Luck👍.</div>
          </SwiperSlide>

          <SwiperSlide className='testimionials_item'>
            <div className='thumb'>
              <img src={Image2} className='testimionials_img' alt='photo'/>
            </div>
            <h3 className='testimionials_title'>Nyan Twan</h3>
            <span className='subtitle'>Product Designer at Dribble</span>
            <div className='comment'>I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good Luck👍.</div>
          </SwiperSlide>
      </Swiper>
       
    </section>
  )
}

export default Testimionials