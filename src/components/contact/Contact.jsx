import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='container section contact' id='contact'>
      <h2 className='section_title'>Get In Touch</h2>

      <div className='contact_container grid'>
        <div className='contact_info'>
          <h3 className='contact_title'>Let's Talk About Everything</h3>
          <p className='contact_detials'>Don't like formar? Send me an Email.👋</p>
        </div>
        <form className='contact_form' action=''>
          <div className='contact_form-group'>
            <div className='contact_form-div'>
              <input type='text' className='contact_form-input' placeholder='Insert your name'/>
            </div>
            <div className='contact_form-div'>
              <input type='email' className='contact_form-input' placeholder='Insert your email'/>
            </div>
            <div className='contact_form-div'>
              <input type='text' className='contact_form-input' placeholder='Insert your subject'/>
            </div>

            <div className='contact_form-div'>
              <textarea cols={30} rows={10} className='contact_form-input' placeholder='Write your message.'></textarea>
            </div>
            <button className='btn'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact