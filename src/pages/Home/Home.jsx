import React from 'react'
import Contact from '../Contact/Contact'
import Project from '../Project/Project'
import Banner from './Banner/Banner'
import Service from './Service/Service'
import Testimonial from './Testimonial/Testimonial'
import About from '../About/About'
import BlogIndex from '../Blog/BlogIndex'
import Blog from '../Blog/Blog'

const Home = () => {
  return (
    <div className='pt-16'>
      <Banner />
      <About />
      <Testimonial />
      <Service />

      <Blog />
      <BlogIndex />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
