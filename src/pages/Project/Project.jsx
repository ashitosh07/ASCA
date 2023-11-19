import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import { RiFolderInfoFill } from 'react-icons/ri'
import TypeAnimation from 'react-type-animation'
import { motion } from 'framer-motion'

import '../shared/Shared.css'
import myImage from '../../assets/client.png'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.png'
import client5 from '../../assets/client5.png'

const clientImages = [client1, client2, client3, client4, client5]

const Project = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          padding: '20px',
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
              src={myImage}
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
                  fontWeight: '700',
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
        <div
          className='client-logos'
          style={{
            padding: '20px 0',
            textAlign: 'center',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
        >
          <h4
            style={{
              color: '#000000',
              fontSize: '30px',
              fontWeight: '500',
              marginBottom: '20px',
            }}
          >
            Clients
          </h4>
          <p
            style={{
              color: '#6b6565',
              fontSize: '15px',

              marginBottom: '20px',
            }}
          >
            They Trust Us. You Will Too.
          </p>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='flex flex-col items-center'>
              <div className='flex '>
                <div className='rounded-full w-full md:w-48 h-48  flex items-center justify-center'>
                  <img
                    src={client1}
                    alt='Client Logo 1'
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4 md:mt-0'>
                  <img
                    src={client2}
                    alt='Client Logo 2'
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4 md:mt-0'>
                  <img
                    src={client3}
                    alt='Client Logo 3'
                    className='w-full h-auto'
                  />
                </div>
              </div>
              <div className='flex '>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4'>
                  <img
                    src={client4}
                    alt='Client Logo 4'
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4 md:mt-0'>
                  <img
                    src={client2}
                    alt='Client Logo 5'
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4 md:mt-0'>
                  <img
                    src={client1}
                    alt='Client Logo 6'
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4 md:mt-0'>
                  <img
                    src={client4}
                    alt='Client Logo 7'
                    className='w-full h-auto'
                  />
                </div>
              </div>
              <div className='flex '>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4'>
                  <img
                    src={client1}
                    alt='Client Logo 8'
                    className='w-full h-auto'
                  />
                </div>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4 md:mt-0'>
                  <img
                    src={client3}
                    alt='Client Logo 9'
                    className='w-full h-auto'
                  />
                </div>
              </div>
              <div className='flex '>
                <div className='rounded-full w-full md:w-48 h-48 flex items-center justify-center mt-4'>
                  <img
                    src={client2}
                    alt='Client Logo 10'
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
