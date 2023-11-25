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
        <div className='parent min-h-[90vh] flex flex-col lg:flex-row  items-center justify-between gap-8'>
          <div
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
                width: '100%',
                height: '90%',
                marginTop: '20px',
              }}
            />
          </div>
          <div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3
              className='text-4xl font-semibold mb-0'
              style={{ color: '#060505', margin: '30px 0' }}
            >
              User Dashboard: Upload and Task Progress
            </h3>

            <p
              className='text-neutral max-w-xl mb-6 font-medium'
              style={{ color: '#000000', margin: '5% 0' }}
            >
              Access the full potential of our user dashboard, where clients can
              effortlessly upload documents and monitor task progress in
              real-time. Our secure document upload feature ensures the
              confidentiality of your information, with support for various file
              formats. The intuitive interface guarantees a user-friendly
              experience, allowing you to seamlessly navigate through the system
              and receive immediate updates on task progress. With robust
              security measures, including encryption and secure connections,
              your data is safeguarded at every step. Guidelines for optimal use
              are provided to assist you in organizing and managing your
              documents effectively. If you need assistance, our support team is
              just a message away, ensuring a smooth and secure user experience.
            </p>

            <div className='lg:flex lg:flex-row flex-col items-center'>
              <button
                className='mb-2 mr-4 lg:mb-0 '
                style={{
                  backgroundColor: '#8dce19',
                  borderRadius: '8px',
                  padding: '8px 20px',
                  color: '#000000',
                  fontWeight: '700',
                }}
              >
                <span>Sign in</span>
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
                <span>Sign up</span>
              </button>
            </div>
          </div>
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
