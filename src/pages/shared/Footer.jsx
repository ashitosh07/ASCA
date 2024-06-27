import React, { useState } from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'
import img from '../../assets/headerLogo.png'
import CA from '../../assets/CA.png'
import './Footer.css'

const Footer = () => {
  const year = new Date()

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      fontSize: '18px',
      color: isActive && '#8dce19 !important',
    }
  }
  const [searchText, setSearchText] = useState('')

  const handleInputChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div className='bg-black'>
      <div className='max-w-7xl mx-auto lg:px-4'>
        <div
          className='w-full h-[2px]'
          style={{ backgroundColor: '#E4E4E4', opacity: 0.2 }}
        ></div>

        <footer
          className='w-full text-center p-6 md:px-16'
          style={{ backgroundColor: '#000000' }}
        >
          <div className='flex flex-col md:flex-row items-start justify-between mb-6 pt-8'>
            <div className='w-full md:w-1/3 flex flex-col items-start mb-6'>
              <div className='w-20 mx-auto md:mx-0'>
                <img
                  src={img}
                  alt='AS CAASCA'
                  style={{ width: '100%', margin: '0px 0 10px 0' }}
                />
              </div>
              <p
                className='text-left'
                style={{ color: '#B3B3B3', fontSize: '16px' }}
              >
                Bangalore Office 362, 3rd Floor, 7th Cross Rd, 6th Block, 1st
                Block, Jayanagar 1st Block, Jayanagar, Bengaluru, Karnataka -
                560011
              </p>{' '}
              <p
                className='text-left mt-2'
                style={{ color: '#B3B3B3', fontSize: '16px' }}
              >
                ASCA, 2-7-432/4, Kottara Cross Bejai,Mangalore,Karnatak - 575004
              </p>
              <p
                className='text-left mt-2'
                style={{ color: '#B3B3B3', fontSize: '16px' }}
              >
                +919019905527
              </p>
              <p
                className='text-left mt-2'
                style={{ color: '#B3B3B3', fontSize: '16px' }}
              >
                ascafirm@gmail.com
              </p>
            </div>

            <div className='w-full md:w-1/3 flex flex-col items-center mb-6'>
              <div className='text-left'>
                <a
                  className='text-white hover:text-[#8dce19] duration-300 mb-2 block'
                  href='#'
                >
                  About
                </a>
                <a
                  className='text-white hover:text-[#8dce19] duration-300 mb-2 block'
                  href='#'
                >
                  Services
                </a>
                <a
                  className='text-white hover:text-[#8dce19] duration-300 mb-2 block'
                  href='#'
                >
                  Contact
                </a>
                <a
                  href='#'
                  className='text-white hover:text-[#8dce19] duration-300 block'
                >
                  Careers
                </a>
              </div>
            </div>

            <div className='w-full md:w-1/3 flex flex-col items-center'>
              <div className='mb-2'>
                <img src={CA} alt='CA' style={{ maxWidth: '100%' }} />
              </div>
              <div className='flex items-center justify-center'>
                <a
                  className='inline-block mx-2'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin className='text-2xl text-black-400' />
                </a>
                <a
                  className='inline-block mx-2'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaInstagram className='text-2xl text-black-500' />
                </a>
                <a
                  className='inline-block mx-2'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaFacebook className='text-2xl text-black-600' />
                </a>
                <a
                  className='inline-block mx-2'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaYoutube className='text-2xl text-black-600' />
                </a>
              </div>
            </div>
          </div>

          <div
            className='w-full h-[2px]'
            style={{ backgroundColor: '#E4E4E4', opacity: 0.2 }}
          ></div>

          <div className='flex flex-col md:flex-row items-center justify-center mt-4'>
            <p style={{ fontSize: '14px' }}>
              &copy; {year.getFullYear()} ,ASCA. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
