import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'



const Contact = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
   
      <HeroImg2 heading = "CONTACT"text="Please complete the form below, and I'll respond to your message within one business day"/>
      <Form/>  
      <Footer/>
    
    </div>
  )
}

export default Contact