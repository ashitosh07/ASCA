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
            Let's narrate yours. One-Stop Solution for Seamless Financial
            Compliance.
          </p>

          <div
            className='flex items-center'
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <a href='' target='_blank'>
              <button className='primary-button'>
                <span
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}
                >
                  Login
                </span>
              </button>{' '}
            </a>{' '}
            <a href='' target='_blank'>
              <button className='primary-button' style={{ marginLeft: '25px' }}>
                <span
                  style={{
                    color: 'black',
                    fontWeight: '600',
                  }}
                >
                  Book a Call
                </span>
              </button>{' '}
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
