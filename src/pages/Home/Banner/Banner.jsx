import React from 'react'
import { motion } from 'framer-motion'
import '../../shared/Shared.css'

import myImage from '../../../assets/homeImg.png'

import client from '../../../assets/client.png'
const Banner = () => {
  return (
    <div className='parent min-h-[90vh] lg:flex lg:flex-row items-center justify-between pt-8'>
      <div className='w-full lg:w-1/2 p-4'>
        <h1
          className='text-4xl mb-0'
          style={{
            fontSize: '52px',
            '@media (max-width: 640px)': {
              lineHeight: '3.5rem',
              fontSize: '46px',
            },
          }}
        >
          Service beyond
        </h1>
        <h1
          className='text-4xl mb-0'
          style={{
            fontSize: '52px',
            '@media (max-width: 640px)': {
              fontSize: '46px',
            },
          }}
        >
          numbers:
        </h1>
        <br />
        {/* <h1
          className='text-4xl  mb-0'
          style={{
            fontSize: '52px',
            '@media (max-width: 640px)': {
              fontSize: '46px',
            },
          }}
        >
          Redefining Excellence
        </h1> */}

        <br />
        <p className='text-neutral max-w-xl mb-6 font-medium'>
          Guiding businesses, professionals, and startups to financial and legal
          success with unparalleled expertise and tailored insights
        </p>

        <div className='flex flex-row lg:flex-row items-start'>
          <a href='/contact' target='_self'>
            <button className='primary-button  lg:mt-0'>Contact Us</button>
          </a>
        </div>
      </div>

      <div className='w-full lg:w-1/2 p-8 mt-4'>
        <img
          src={myImage}
          alt='Decorative'
          className='lg:w-438 lg:h-423.56 sm:w-305 sm:w-294.94'
        />
      </div>
    </div>
  )
}
//web  - img - width :438 , hieght :423.56
//mobile - img - width :305, height :294.94
export default Banner
