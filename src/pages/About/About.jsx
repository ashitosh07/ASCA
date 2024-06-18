import React from 'react'
import { color, motion } from 'framer-motion'
import './About.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import badges from './badges'
import Aboutme from '../../assets/Aboutme.png'
import img from '../../assets/headerLogo.png'
const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'lexend',
  color: 'black',
  fontSize: '1.5em', // example style for the text
}

const imgStyles = {
  width: '6rem', // 24/4 = 6rem
  marginLeft: '0rem', // add some space between text and image
}
const mediaQueryStyles = {
  textAlign: 'center', // Default style
}

const About = () => {
  if (window.innerWidth <= 540) {
    mediaQueryStyles.textAlign = 'left'
  } else if (window.innerWidth >= 600) {
    mediaQueryStyles.textAlign = 'center'
  }
  return (
    <div
      className='parent pt-6 my-16'
      style={{ backgroundColor: 'white', borderRadius: '40px' }}
    >
      <div className='flex justify-center items-center p-4'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
          <div style={containerStyles}>
            <span>ABOUT</span>
            <img src={img} alt='AS CA' style={imgStyles} />
          </div>
          <div className='centered-container'>
            <br />
            <p className='text-left text-black'>
              At ASCA, we embrace a vision that transcends the traditional scope
              of Chartered Accountants and go beyond just number crunching or
              preparing tax returns. Our team, a blend of experienced experts
              and dynamic new talent, is deeply committed to crafting solutions
              to meet financial and legal requirements.
            </p>

            <br />
            <p className='text-left text-black'>
              With a foundation built on integrity, we offer comprehensive
              financial solutions tailored to your unique needs—from strategic
              planning to the navigating complexities of regulatory compliance.
              Founded on principles of unwavering transparency, relentless
              diligence, and unparalleled precision, we guarantee your thorough
              comprehension, leading you to make informed decisions.
            </p>
            <br />
          </div>
        </div>
      </div>
      {/* add a img only for mobile */}
      <div className='md:hidden text-center p-4'>
        {/* Add your mobile-only image here */}
        {/* <img src={Aboutme} alt='Mobile Only' className='mx-auto' /> */}
        {/* <h1
          style={{
            color: 'black',
            fontSize: '26.73px',
            // fontWeight: 'bold',
            marginTop: '12px',
          }}
        >
          Anwesh Shetty
        </h1> */}
      </div>
      {/* <div style={{ margin: '3rem 0 4rem 0', padding: '0px 0 80px 0' }}>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {badges.map((badge, index) => (
            <div className=' text-center p-4'>
              <div className='flex flex-col items-center'>
                <img
                  src={badge.icon}
                  alt={badge.title}
                  className='mx-auto mb-2'
                />
                <h2 className='badge-title text-#8dce19 '>
                  {badge.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default About
