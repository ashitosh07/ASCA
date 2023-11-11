import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import badges from './badges'

const About = () => {
  return (
    <div
      className='parent pt-16 my-16'
      style={{ backgroundColor: 'white', borderRadius: '40px' }}
    >
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-8'>
          <motion.div
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
            style={{
              padding: '10px 20px',
              textAlign: 'center',
            }}
          >
            <h1
              className='text-3xl font-semibold mb-0'
              style={{
                color: 'black',
                margin: '3% 0',

                alignItems: 'center',
              }}
            >
              About
            </h1>
            <div className='centered-container'>
              <p className='text-neutral font-medium'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularized
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages and more recently with desktop publishing
                so
              </p>
              <br />
              <p className='text-neutral font-medium'>
                Software like Aldus PageMaker, including versions of Lorem
                Ipsum. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries but also the leap into
                electronic typesetting, remaining essentially
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div style={{ margin: '5rem 0 4rem 0', padding: '0px 0 80px 0' }}>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ y: -200, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.25 + index * 0.25 },
              }}
            >
              <div className=' text-center p-4'>
                <div className='flex flex-col items-center'>
                  <img
                    src={badge.icon}
                    alt={badge.title}
                    className='mx-auto mb-2'
                  />
                  <h2
                    className='badge-title text-primary font-semibold'
                    style={{ color: 'black', fontFamily: 'lexend' }}
                  >
                    {badge.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
