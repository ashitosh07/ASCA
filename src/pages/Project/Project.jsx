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
          <div className='parent py-6'>
            <section className='py-4 px-10 pt-10'>
              <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center'>
                <div className='lg:w-1/2 text-center lg:text-left'>
                  <button
                    className='bg-green-500 hover:bg-blue-700 text-white py-2 px-4 rounded'
                    style={{
                      backgroundColor: '#8dce19',
                      // fontWeight: '700',
                      marginBottom: '10px',
                    }}
                  >
                    Join our team
                  </button>
                  <h2 className='text-4xl font-bold mb-4 text-black'>
                    We are hiring
                  </h2>

                  <p className='text-gray-600 mb-8'>
                    "Great things in a professional firm are never done by one
                    person; they're done by a team of people."
                  </p>
                </div>
                <div className='md:w-1/2 flex justify-end'>
                  {/* <img src={hiring} alt='Company logo' className='max-w-md' /> */}
                </div>
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
        >
          {/* <h4
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
          <div
            className='flex flex-wrap items-center justify-center'
            style={{
              backgroundImage: `url(${clientbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
            }}
          >
            <div className='flex flex-col items-center lg:p-4'>
              <div className='flex lg:p-4'>
                <div
                  className='circle-1 rounded-full w-full md:w-48 h-48  flex items-center justify-center lg:p-4'
                  // style={{ margin: '0 30px 40px 30p' }}
                >
                  <img
                    src={client1}
                    alt='Client Logo 1'
                    className='w-full h-auto'
                  />
                </div>
                <div
                  className='circle-2 rounded-full w-full md:w-48 h-48 flex items-center justify-center md:mt-0'
                  // style={{ margin: '80px 80px 20px 130px' }}
                >
                  <img
                    src={client2}
                    alt='Client Logo 2'
                    className='w-full h-auto'
                  />{' '}
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-2 {
                        margin: 80px 80px 20px 130px;
                      }
                    }
                    @media only screen and (max-width: 401px) {
                      .circle-2 {
                        margin: 100px 0px 0 0px;
                      }
                    }
                  `}</style>
                </div>
                <div className='circle-3 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-4 md:mt-0'>
                  <img
                    src={client3}
                    alt='Client Logo 3'
                    className='w-full h-auto'
                  />
                </div>
              </div>
              <div className='flex '>
                <div
                  className='circle-4 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-4 '
                  // style={{ margin: '-100px 80px 200px 30px' }}
                >
                  <img
                    src={client4}
                    alt='Client Logo 4'
                    className='w-full h-auto'
                  />
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-4 {
                        margin: -100px 80px 200px 30px;
                      }
                    }
                  `}</style>
                </div>
                <div
                  className='circle-5 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-4 md:mt-0'
                  // style={{ margin: '0px 200px 0 0px' }}
                >
                  <img
                    src={client2}
                    alt='Client Logo 5'
                    className='w-full h-auto'
                  />{' '}
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-5 {
                        margin: 0px 200px 0 0px;
                      }
                    }
                    @media only screen and (max-width: 401px) {
                      .circle-5 {
                        margin: 100px 0px 0 0px;
                      }
                    }
                  `}</style>
                </div>
                <div
                  className='circle-6 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-4 md:mt-0'
                  // style={{ margin: '0px 30px 0 0px' }}
                >
                  <img
                    src={client1}
                    alt='Client Logo 6'
                    className='w-full h-auto'
                  />
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-6 {
                        margin: 0px 30px 0 0px;
                      }
                    }
                    @media only screen and (max-width: 401px) {
                      .circle-6 {
                        margin: 100px 0px 0 0px;
                      }
                    }
                  `}</style>
                </div>
                <div
                  className='circle-7 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-4 md:mt-0'
                  // style={{ margin: '0px 200px 0 0px' }}
                >
                  <img
                    src={client4}
                    alt='Client Logo 7'
                    className='w-full h-auto'
                  />{' '}
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-7 {
                        margin: 0px 200px 0 0px;
                      }
                    }
                  `}</style>
                </div>
              </div>
              <div className='flex '>
                <div
                  className='circle-8 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-2'
                  // style={{ margin: '-53px 102px 40px 100px' }}
                >
                  <img
                    src={client1}
                    alt='Client Logo 8'
                    className='w-full h-auto'
                  />{' '}
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-8 {
                        margin: -53px 202px 40px 0px;
                      }
                    }
                  `}</style>
                </div>
                <div
                  className='circle-9 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-16 lg:mr-16'
                  // style={{ margin: '120px 30px 240px 20' }}
                >
                  <img
                    src={client3}
                    alt='Client Logo 9'
                    className='w-full h-auto'
                  />{' '}
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-9 {
                        margin: 320px 330px 240px 20;
                      }
                    }
                    @media only screen and (max-width: 401px) {
                      .circle-9 {
                        margin: 100px 0px 0 0px;
                      }
                    }
                  `}</style>
                </div>
                <div
                  className='circle-10 rounded-full w-full md:w-48 h-48 flex items-center justify-center lg:mt-4'
                  // style={{ margin: '-50px 230px 240px 100px' }}
                >
                  <img
                    src={client2}
                    alt='Client Logo 10'
                    className='w-full h-auto'
                  />
                  <style jsx>{`
                    @media only screen and (min-width: 701px) {
                      .circle-10 {
                        margin: -50px 30px 240px 0;
                      }
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Project
