import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import BlogList from '../components/BlogList'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <HeroImg2 heading = "MY BLOG" text = "Welcome to my personal blog where I share updates, insights, and thoughts about my coding journey, projects, and experiences in software development. Check back regularly for new posts!"/>
      <BlogList/>
      <Footer/>
    </div>
  )
}

export default Blog