import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../../hooks/useAnimation'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import team1 from '../../../assets/team1.png'
import team2 from '../../../assets/team2.png'
import team3 from '../../../assets/team3.png'
import team4 from '../../../assets/team4.png'
import hiring from '../../../assets/hiring.png'

const Service = () => {
  const [ref, inView] = useInView()
  const [viewDiv, setViewDiv] = useState(false)
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      setViewDiv(true)
    } else {
      setViewDiv(false)
    }
  }, [inView, animation])

  const teamMembers = [
    {
      id: 1,
      img: team1,
      name: 'John Doe',
      designation: 'Front-end Developer',
      linkedin: 'https://www.linkedin.com/johndoe',
      instagram: 'https://www.instagram.com/johndoe',
      facebook: 'https://www.facebook.com/johndoe',
    },
    {
      id: 2,
      img: team2,
      name: 'John',
      designation: 'Full-stack Developer',
      linkedin: 'https://www.linkedin.com/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
      facebook: 'https://www.facebook.com/janesmith',
    },
    {
      id: 3,
      img: team3,
      name: 'Alex',
      designation: 'Web Designer',
      linkedin: 'https://www.linkedin.com/alicejohnson',
      instagram: 'https://www.instagram.com/alicejohnson',
      facebook: 'https://www.facebook.com/alicejohnson',
    },
    {
      id: 4,
      img: team4,
      name: 'Ram',
      designation: 'Back-end Developer',
      linkedin: 'https://www.linkedin.com/bobwilson',
      instagram: 'https://www.instagram.com/bobwilson',
      facebook: 'https://www.facebook.com/bobwilson',
    },
  ]

  const cardData = [
    {
      title: 'Simply dummy text of the ',
      description:
        'Simply dummy text of the printing and typesetting industry. is simply ',
    },
    {
      title: 'Simply dummy text of the ',
      description:
        'Simply dummy text of the printing and typesetting industry. is simply ',
    },
    {
      title: 'Simply dummy text of the ',
      description:
        'Simply dummy text of the printing and typesetting industry. is simply ',
    },
    {
      title: 'Simply dummy text of the ',
      description:
        'Simply dummy text of the printing and typesetting industry. is simply ',
    },
  ]
  return (
    <>
      <div className='parent py-10'>
        {/* <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
          ref={ref}
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={sectionBodyAnimation}
          style={{ marginBottom: '80px' }}
        >
          {[
            { text: 'Lorem Ipsum has ', count: '500+' },
            { text: 'Lorem Ipsum has ', count: '250+' },
            { text: 'Lorem Ipsum has ', count: '519+' },
            { text: 'Lorem Ipsum has ', count: '400+' },
          ].map((item, index) => (
            <div key={index} className='text-center'>
              <h2 className='text-2xl font-semibold mb-1'>{item.count}</h2>
              <p className='text-neutral mb-2'>{item.text}</p>
            </div>
          ))}
        </motion.div> */}

        <motion.div
          className='mb-12 mt-16'
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <h1 className='text-4xl font-semibold text-center'>The Team</h1>
          {/* <BottomLine /> */}
        </motion.div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
          ref={ref}
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={sectionBodyAnimation}
        >
          {teamMembers.map((member) => (
            <div key={member.id} className='text-center'>
              <img
                src={member.img}
                alt={member.name}
                className='w-auto h-auto mx-auto mb-4'
                style={{
                  padding: '10px', // Adjust the padding value as needed
                  border: '2px solid',
                  borderImage:
                    'linear-gradient(to right, #0a0d0b, #1c3e2a, #237349, #22ad69, #093a24) 2 0',
                }}
              />
              <h2 className='text-2xl font-semibold mb-1'>{member.name}</h2>
              <p className='text-neutral mb-2'>{member.designation}</p>
              {/* <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div style={{ margin: '0 6px' }}>
                  <a
                    className='mb-2'
                    href={member.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaLinkedin className='text-2xl text-blue-400' />
                  </a>
                </div>

                <div style={{ margin: '0 6px' }}>
                  <a
                    className='mb-2'
                    href={member.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaInstagram className='text-2xl text-pink-500' />
                  </a>
                </div>

                <div style={{ margin: '0 6px' }}>
                  <a
                    className='mb-2'
                    href={member.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaFacebook className='text-2xl text-blue-600' />
                  </a>
                </div>
              </div> */}
            </div>
          ))}
        </motion.div>

        <div className='parent flex' style={{ padding: '15% 0 0 0' }}>
          <motion.div
            className='text-left p-2'
            initial='hidden'
            animate={viewDiv && 'visible'}
            variants={headingAnimation}
          >
            <button
              className='bg-green-500 text-black px-3 py-1 rounded-lg text-sm mb-2'
              style={{ backgroundColor: '#8dce19', borderRadius: '40px' }}
            >
              WE ARE HIRING
            </button>
            <h1
              className='text-4xl font-semibold'
              style={{ marginTop: '20px', marginRight: '10%' }}
            >
              Join our team
            </h1>
            <p
              className='mt-5 text-grey-500 pr-0 md:pr-30'
              style={{ marginTop: '20px', marginRight: '20%' }}
            >
              is simply dummy text of the printing and typesetting industry. is
              simply dummy text of the printing and typesetting industry.
            </p>
          </motion.div>

          <div className='text-left p-4'>
            <img
              src={hiring}
              alt='Image Description'
              className='hidden md:block w-auto h-auto mx-auto'
              style={{ marginLeft: '100%' }}
            />
          </div>
        </div>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'
          ref={ref}
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={sectionBodyAnimation}
          style={{ marginTop: '5%', marginBottom: '8%' }}
        >
          {cardData.map((data, index) => (
            <div
              key={index}
              className='card flex bg-gray-700 p-4 mx-2'
              style={{
                minHeight: '150px',
                padding: '2rem',
                backgroundColor: '#0E1013',
              }}
            >
              <div className='w-full lg:w-3/4'>
                <h2 className='text-white text-lg mb-2'>{data.title}</h2>
                <p
                  className='text-left break-words'
                  style={{ color: '#B3B3B3', marginRight: '20%' }}
                >
                  {data.description}
                </p>
              </div>
              <div className='absolute top-4 right-4 mt-4 mr-4 '>
                <div
                  className='flex items-center text-sm'
                  style={{ color: '#8dce19' }}
                >
                  <span style={{ fontSize: '12px', marginRight: '10px' }}>
                    {' '}
                    {/* Adjust font size for mobile */}
                    View Job
                  </span>
                  <BsFillArrowRightCircleFill className='icon' />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Service
