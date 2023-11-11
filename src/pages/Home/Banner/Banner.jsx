import React from 'react'
import { motion } from 'framer-motion'
import '../../shared/Shared.css'

import myImage from '../../../assets/homeImg.png'
const Banner = () => {
  return (
    <div className='parent min-h-[90vh] lg:flex lg:flex-row items-center justify-between'>
      <div className='w-full lg:w-1/2 p-4'>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className='text-4xl font-semibold mb-0'
            style={{ fontSize: '52px', fontFamily: 'Lexend' }}
          >
            Storytelling{' '}
          </h1>
          <br />
          <h1
            className='text-4xl font-semibold mb-0'
            style={{ fontSize: '52px', fontFamily: 'Lexend' }}
          >
            with numbers
          </h1>

          <br />
          <p className='text-neutral max-w-xl mb-6 font-medium'>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </p>

          <div className='flex items-center'>
            <a href='' target='_blank'>
              <button className='primary-button'>
                <span style={{ color: 'black', fontWeight: '700' }}>
                  Sign in
                </span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className='w-full lg:w-1/2 p-4'>
        <motion.div
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={myImage}
            alt='Decorative'
            style={{ width: '80%', height: 'auto' }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Banner
