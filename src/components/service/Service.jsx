import React from 'react'
import './Service.css'
import ImageOne from '../../assets/development.svg';
import ImageTwo from '../../assets/mobileDev.svg';
import ImageThree from '../../assets/photograph.svg';
import { Provider } from 'react-redux';

export const data = [
  {
    id:1,
    image:ImageOne,
    title:'Web Development',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
  },
  {
    id:2,
    image:ImageTwo,
    title:'Mobile Development',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
  },
  {
    id:3,
    image:ImageThree,
    title:'Photography',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.'
  },
];

const Service = (props) => {
  const [detials,setDetials] = React.useState(data);
  const detialsRander =(id)=>{
    const showDetials = data.find((dataId)=>{
      return dataId.id===id;
    });
    setDetials(showDetials);
    console.log(data.id)
  }
  return <section className='services container section' id='services'>
      <h2 className='section_title'>Services</h2>

      <div className='services_container grid'>
        {data.map(({id,image,title,description})=>{
          return (
            <div className='services_card' key={id} onClick={()=>detialsRander()}>
                <img src={image} className='services_img' />
                <h3 className='services_title'>{title}</h3>
                <p className='services_description'>{description}</p>
            </div>
          );
        })}
      </div>
  </section>
}


export default Service