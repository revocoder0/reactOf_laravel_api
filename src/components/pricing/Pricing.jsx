import React from 'react'
import './Pricing.css'
import Img1 from '../../assets/basic.svg';
import Img2 from '../../assets/rocket.svg';
import Img3 from '../../assets/premium.svg';

const Pricing = () => {
  return (
    <section className='section container pricing'>
        <h2 className='section_title'>Pricing Plans</h2>

        <div className='pricing_container grid'>
            <div className='pricing_item'>
                <img src={Img1} className='pricing_img' />
                <h3 className='pricing_plan'>Basic</h3>
                <p className='pricing_title'>A Simple option but powerful to manage your business.</p>
                <p className='pricing_support'>Email Support</p>
                <h3 className='price'>
                    <em>$</em>9 <span>Month</span>
                </h3>
                <a href='' className='btn'>Get Started</a>
            </div>

            <div className='pricing_item best'>
              <span className='badge'>Recommended</span>
                <img src={Img3} className='pricing_img' />
                <h3 className='pricing_plan'>Premium</h3>
                <p className='pricing_title'>Unlimeted Product including app interagtion  and more features</p>
                <p className='pricing_support'>Mon-Fri Support</p>
                <h3 className='price'>
                    <em>$</em>15 <span>Month</span>
                </h3>
                <a href='' className='btn'>Get Started</a>
            </div>

            <div className='pricing_item'>
                <img src={Img2} className='pricing_img' />
                <h3 className='pricing_plan'>Ulited</h3>
                <p className='pricing_title'>A Wise option for large companies and individuals</p>
                <p className='pricing_support'>27/4 Support</p>
                <h3 className='price'>
                    <em>$</em>19 <span>Month</span>
                </h3>
                <a href='' className='btn'>Get Started</a>
            </div>
        </div>
    </section>
  )
}

export default Pricing