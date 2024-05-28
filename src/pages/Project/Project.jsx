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
import clientbg from '../../assets/clientbg.png'
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
        <div className='parent min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div
            className='w-full lg:w-1/2 text-center'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={myImage}
              alt='Decorative'
              className='mx-auto'
              style={{
                width: '90%',
                height: 'auto',
                marginTop: '20px',
              }}
            />
          </div>
          <div className='w-full lg:w-1/2 text-center lg:text-left py-6'>
            <section className='py-4 px-10 pt-10'>
              <div className='container mx-auto flex flex-col items-center lg:items-start'>
                <button
                  className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded'
                  style={{
                    backgroundColor: '#8dce19',
                    marginBottom: '10px',
                  }}
                >
                  Join our team
                </button>
                <h2 className='text-4xl  mb-4 text-black'>We are hiring</h2>
                <p className='text-gray-600 mb-8'>
                  "Great things in a professional firm are never done by one
                  person; they're done by a team of people."
                </p>
              </div>
            </section>
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
        ></div>
      </div>
    </>
  )
}

export default Project
