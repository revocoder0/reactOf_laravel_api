import React, { createContext } from 'react'
import './App.css';
import './index.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Resume from './components/resume/Resume'
import Testimionials from './components/testimionials/Testimionials';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio'
import CustomCouser from './components/customCouser/CustomCouser';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const toogleTheme =()=>{
    setTheme((curr)=>(curr === 'light' ? 'dark' : 'light'));
  }
  return (
    <ThemeContext.Provider value={{theme, toogleTheme}}>
      <div className='App' id={theme}>
      <CustomCouser />
        {/* <main className='main'> */}
        <Sidebar />
          <Home />
          <About />
          <Service />
          <Resume />
          <Portfolio />
          <Testimionials />
          <Blog />
          <Contact />
        {/* </main> */}
      </div>  
    </ThemeContext.Provider>
  )
}

export default App

      