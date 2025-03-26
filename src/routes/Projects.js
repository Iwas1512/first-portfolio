import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'



const Projects = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <HeroImg2 heading = "PROJECTS"text = "Below are my featured projects that showcase my development skills across different technologies. Each project card includes a detailed description, screenshots, and the tech stack used. All projects have source code available on GitHub and demonstration videos for a closer look at functionality. Feel free to explore and reach out if you have any questions about implementation details."/>
      <Work/>
      <Footer/>
    
    </div>
  )
}

export default Projects