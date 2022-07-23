import React from 'react'
import './App.css';
import './index.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Service from './components/service/Service'
import Resume from './components/resume/Resume'
import Pricing from './components/pricing/Pricing';
import Testimionials from './components/testimionials/Testimionials';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio'
import CustomCouser from './components/customCouser/CustomCouser';
const App = () => {
  return (
    <div>
    <CustomCouser />
      <Sidebar />
        <main className='main'>
          <Home />
          <About />
          <Service />
          <Resume />
          <Portfolio />
          <Pricing />
          <Testimionials />
          <Blog />
          <Contact />
        </main>
      </div>
  )
}

export default App

 // <div>
      // <Sidebar />
      //   <main className='main'>
      //     <Home />
      //     <About />
      //     <Service />
      //     <Resume />
      //     <Portfolio />
      //     <Pricing />
      //     <Testimionials />
      //     <Blog />
      //     <Contact />
      //   </main>
      // </div>