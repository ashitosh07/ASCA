import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import { RiFolderInfoFill } from 'react-icons/ri'
import TypeAnimation from 'react-type-animation'
import { motion } from 'framer-motion'

import '../shared/Shared.css'
import speedmeter from '../../assets/speedmeter.png'
import price from '../../assets/price.png'
import myImage from '../../assets/homeImg.png'
import client from '../../assets/client.png'
function Achievement() {
  const sections = [
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'left',
    },
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'right',
    },
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'left',
    },
    {
      imageSrc: price,
      title: 'Simply dummy text of the printing and',
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      animationDirection: 'right',
    },
  ]

  return (
    <>
      <div className='parent min-h-[90vh] lg:flex lg:flex-row items-center justify-around flex-col'>
        <div className='w-full lg:w-1/2 p-4'>
          <motion.div
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              className='text-3xl lg:text-5xl font-semibold mb-0 lg:mb-2'
              style={{ fontSize: '4vw', fontFamily: 'Lexend' }}
            >
              Accurate financials.
            </h1>
            <br />
            <h1
              className='text-3xl lg:text-5xl font-semibold mb-0 lg:mb-2'
              style={{ fontSize: '4vw', fontFamily: 'Lexend' }}
            >
              Total peace
            </h1>
            <br />
            <p className='text-neutral max-w-xl mb-6 font-medium'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </p>
          </motion.div>
        </div>

        <div className='w-full lg:w-1/2 p-4'>
          <motion.div
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={speedmeter}
              alt='Decorative'
              className='mx-auto lg:ml-0' // Center the image on small screens and move to the left on large screens
              style={{ maxWidth: '80%', height: 'auto' }} // Adjust the maximum width of the image
            />
          </motion.div>
        </div>
      </div>

      <div
        className='w-full h-[2px] '
        style={{ backgroundColor: '#E4E4E4', opacity: 0.2 }}
      ></div>

      <div className='w-full p-2' style={{ width: '100%', margin: '30px 0' }}>
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='flex flex-col items-center justify-center'>
            <h1
              className='text-3xl lg:text-5xl font-semibold mb-2 lg:mb-4'
              style={{ fontSize: '3vw' }}
            >
              What you get with Bench
            </h1>
            <br />
            <p className='text-neutral max-w-xl mb-6 font-medium text-center'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type
            </p>
          </div>
        </motion.div>
      </div>

      <div className='parent min-h-[70vh] lg:flex lg:flex-row items-center justify-around flex-col'>
        <div className='w-full lg:w-1/2 p-2'>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={price}
              alt='Decorative'
              className='w-full lg:w-3/4 h-auto mx-auto'
            />
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2 p-4'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              Simply dummy text of
            </h1>
            <br />
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              the printing and
            </h1>
            <br />
            <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </p>
          </motion.div>
        </div>
      </div>

      <div className='parent min-h-[70vh] lg:flex lg:flex-row items-center justify-around flex-col'>
        <div className='w-full lg:w-1/2 p-4'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              Simply dummy text of
            </h1>
            <br />
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              the printing and
            </h1>
            <br />
            <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </p>
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2 p-2'>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={price}
              alt='Decorative'
              className='w-full lg:w-3/4 mx-auto lg:mx-0'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>

      <div className='parent min-h-[70vh] lg:flex lg:flex-row items-center justify-around flex-col'>
        <div className='w-full lg:w-1/2 p-2'>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={price}
              alt='Decorative'
              className='w-full lg:w-3/4 h-auto mx-auto'
            />
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2 p-4'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              Simply dummy text of
            </h1>
            <br />
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              the printing and
            </h1>
            <br />
            <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </p>
          </motion.div>
        </div>
      </div>

      <div className='parent min-h-[70vh] lg:flex lg:flex-row items-center justify-around flex-col'>
        <div className='w-full lg:w-1/2 p-4'>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              Simply dummy text of
            </h1>
            <br />
            <h1 className='text-2xl lg:text-5xl font-semibold mb-2 lg:mb-4 sm:text-3xl md:text-4xl'>
              the printing and
            </h1>
            <br />
            <p className='text-neutral max-w-xl mb-6 font-medium text-sm sm:text-base md:text-base lg:text-base xl:text-base'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </p>
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2 p-2'>
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={price}
              alt='Decorative'
              className='w-full lg:w-3/4 mx-auto lg:mx-0'
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <div className='parent min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-between'>
          <motion.div
            className='w-full md:w-1/2 text-center'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={client}
              alt='Decorative'
              className='mx-auto mt-4'
              style={{
                width: '72%',
                height: '90%',
                marginTop: '20px',
              }}
            />
          </motion.div>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3
              className='text-4xl font-semibold mb-0'
              style={{ color: '#060505' }}
            >
              Interactive club interface
            </h3>

            <p
              className='text-neutral max-w-xl mb-6 font-medium'
              style={{ color: '#000000', margin: '5% 0' }}
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularized
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing so
            </p>

            <div className='lg:flex lg:flex-row flex-col items-center'>
              <button
                className='mb-2 mr-3 lg:mb-0 '
                style={{
                  backgroundColor: '#8dce19',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  color: '#000000',
                  fontWeight: '500',
                }}
              >
                <span>Guest Access</span>
              </button>

              <button
                style={{
                  backgroundColor: '#000000',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  color: '#FFFFFF',
                  fontWeight: '500',
                }}
              >
                <span>Account Access</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Achievement
