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
                Founded in 2018 by CA Anwesh Shetty, our firm stands at the
                forefront of financial compliance and client education,
                distinguished by our ISO certification and a commitment to
                clarity and understanding. As a full-service firm, we offer an
                extensive array of services including tax consulting, tax
                filing, audit services, business advisory, and litigation
                support.
              </p>
              <br />
              <p className='text-neutral font-medium'>
                We specialize in catering to the unique needs of small and
                medium-sized businesses, providing them with tailored solutions
                that demystify the complexities of financial compliance. At the
                heart of our approach are our core values: a relentless pursuit
                of knowledge in an ever-evolving landscape, an unwavering focus
                on client education, simplification of complex matters, and a
                steadfast commitment to transparency. Our technologically
                advanced operations reflect our belief in the power of modern
                solutions to enhance efficiency and accuracy
              </p>
              <br />
              <p className='text-neutral font-medium'>
                Our dynamic team comprises young professionals, including
                Chartered Accountants, Company Secretaries, and Lawyers, all
                dedicated to offering end-to-end compliance solutions. We pride
                ourselves on our automated work environment that upholds the
                highest standards of integrity and client confidentiality.
                Responsiveness and attentiveness to client queries are the
                hallmarks of our service, ensuring that every client receives
                the attention and expertise they deserve.
              </p>
              <br />
              <p className='text-neutral font-medium'>
                In navigating the intricate world of financial regulations, we
                are more than just your consultants; we are your trusted
                partners in telling the story of your financial journey with
                clarity and confidence.
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
                    className='badge-title text-#8dce19 font-semibold'
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
