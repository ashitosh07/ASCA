import React, { useState, useEffect, useRef } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IoChatboxEllipses } from 'react-icons/io5'
import Contact from '../Contact/Contact'
import Project from '../Project/Project'
import Banner from './Banner/Banner'
import Service from './Service/Service'
import Testimonial from './Testimonial/Testimonial'
import About from '../About/About'
import BlogIndex from '../Blog/BlogIndex'
import Blog from '../Blog/Blog'

const Home = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  const [helpMessageVisible, setHelpMessageVisible] = useState(false)
  const helpMessageRef = useRef(null)

  const handleButtonClick = () => {
    setHelpMessageVisible(!helpMessageVisible)
    console.log('Button clicked!')
  }

  const handleMouseDown = (event) => {
    if (
      helpMessageRef.current &&
      !helpMessageRef.current.contains(event.target)
    ) {
      setHelpMessageVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return (
    <div className='bg-black'>
      <div className='max-w-7xl mx-auto lg:px-4'>
        <div className='pt-16'>
          <Banner />
          <About />
          <Service />
          {/* <Blog /> */}
          {/* <BlogIndex /> */}
          <Project />
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
