import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav_logo'>
        UNK <span>Coder</span>
      </a>

      <nav className='nav'>
        <div className='nav_menu'>
          <ul className='nav_list' id='sidebar'>
            <li className='nav_item active'>
              <a href='#home' className='nav_link'>
                <i className='icon-home'></i>
              </a>
            </li>

            <li className='nav_item'>
              <a href='#about' className='nav_link'><i className='icon-user-following'></i></a>
            </li>

            <li className='nav_item'>
              <a href='#services' className='nav_link'><i className='icon-briefcase'></i></a>
            </li>

            <li className='nav_item'>
              <a href='#resume' className='nav_link'><i className='icon-graduation'></i></a>
            </li>

            <li className='nav_item'>
              <a href='#portfolio' className='nav_link'><i className='icon-layers'></i></a>
            </li>


            <li className='nav_item'>
              <a href='#blog' className='nav_link'><i className='icon-note'></i></a>
            </li>

            <li className='nav_item'>
              <a href='#contact' className='nav_link'><i className='icon-bubble'></i></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='nav_footer'>
          <span className='copyright'>Unknown Coer &copy; 2022-2023.</span>
      </div>
    </aside>
  )
}

export default Sidebar;