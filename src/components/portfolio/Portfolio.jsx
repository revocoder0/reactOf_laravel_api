import React from 'react'
import './Portfolio.css'
import Menu from './Menu'

const Portfolio = () => {
  const [items, setItems] = React.useState(Menu);
  const filterItem = (categoryItem) =>{
    const updateItems = Menu.filter((curElem)=>{
      return curElem.category===categoryItem;
    });
    setItems(updateItems);
  }
  return (
    <section className='work container section' id='portfolio'>
      <h2 className='section_title'>Recent Work</h2>

      <div className='work_filters'>
          <span className='work_item' onClick={()=>setItems(Menu)}>Everything</span>
          <span className='work_item' onClick={()=>filterItem('Creative')}>Creative</span>
          <span className='work_item' onClick={()=>filterItem('Art')}>Art</span>
          <span className='work_item' onClick={()=>filterItem('Design')}>Design</span>
          <span className='work_item' onClick={()=>filterItem('Branding')}>Branding</span>
      </div>

      <div className='work_container grid'>
          {items.map((elem)=>{
            const{id,image,title,category} = elem;
            return(
              <div className='work_card' key={id}>
                <div className='work_thumbnial'>
                  <img src={image} alt= '' className='work_img' />
                  <div className='work_mask'></div>
                </div>

                <span className='work_category'>{category}</span>
                <h3 className='work_title'>{title}</h3>
                <a href='#' className='work_button'>
                    <i className='link icon-link work_button-icon'></i>
                </a>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default Portfolio