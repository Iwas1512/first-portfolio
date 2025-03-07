import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Aboutcontent from '../components/Aboutcontent'
import Aboutcontent2 from '../components/Aboutcontent2'



const About = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <HeroImg2 heading= "ABOUT ME"text="Hey, my name is Anlil Iwas! As you can tell, I love coding :3. Well, specifically, I love engineering. The feeling of building something from scratch and seeing it boot up is just addicting. I’m hooked! This has been my passion for a couple of years now, and I’m continuing it with my studies at the University of Illinois at Chicago (UIC).

When I’m not coding, I enjoy going to the gym, gaming, hanging out with my friends, and spending time with my amazing girlfriend. I’m also a huge fan of cats, dogs, or really any kind of pet! Lately, I’ve been working on mastering Full-Stack Development.

If you want to connect, don’t be shy—feel free to reach out! I love meeting new people and making new friends :) "/>  
 
      <Aboutcontent/>
      <br/>
      <Aboutcontent2/>
      <Footer/>
    
    </div>
  )
}


export default About
