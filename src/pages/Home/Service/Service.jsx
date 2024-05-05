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
      name: 'Anwesh Shetty',
      designation: 'FCA, B. Com, LL.B, ACCA',
      linkedin: 'https://www.linkedin.com/johndoe',
      instagram: 'https://www.instagram.com/johndoe',
      facebook: 'https://www.facebook.com/johndoe',
    },
    {
      id: 2,
      img: team2,
      name: 'Frenil Douza',
      designation: 'ACA, B. Com, FAFD',
      linkedin: 'https://www.linkedin.com/janesmith',
      instagram: 'https://www.instagram.com/janesmith',
      facebook: 'https://www.facebook.com/janesmith',
    },
    {
      id: 3,
      img: team3,
      name: 'Viresh Shetty',
      designation: 'Senior Tax Manager',
      linkedin: 'https://www.linkedin.com/alicejohnson',
      instagram: 'https://www.instagram.com/alicejohnson',
      facebook: 'https://www.facebook.com/alicejohnson',
    },
    {
      id: 4,
      img: team4,
      name: " Adril D'Silva",
      designation: 'Senior Audit Manager',
      linkedin: 'https://www.linkedin.com/bobwilson',
      instagram: 'https://www.instagram.com/bobwilson',
      facebook: 'https://www.facebook.com/bobwilson',
    },
  ]

  const cardData = [
    {
      title: 'STRATEGIC GROWTH & GOVERNANCE',
      description:
        'Strategic Planning and Business Strategy	\n Corporate Governance\n Legal Entity Formation\n Compliance and Regulatory\n Additional Services',
    },
    {
      title: 'AUDIT AND ASSURANCE',
      description:
        'Statutory Audit under Indian and International GAAP \n Internal Audit \n Agreed Upon Procedures \n Investigation and Special Audits \n Review Services',
    },
    {
      title: 'TECHNOLOGY AND PROCESS OPTIMISATION		',
      description:
        ' Business process reengineering \n ERP implementation and optimisation \n Financial systems automation	 \n Cloud computing advisory	\n Supply chain optimisation	 \n Change management and training	 ',
    },
    {
      title: 'Goods & Services Tax',
      description:
        'GST Registration \n GST Compliance \n GST Litigation \n Input Tax Credit \n Others',
    },
    {
      title: 'Specialized Services',
      description:
        'Valuation & Due Diligence \n Start-up and Early Stage Support \n Insolvency and Debt Resolution	 \n Wealth and Legacy Planning	\n Corporate Finance	 \n Education and Training \n Labour Law	 ',
    },
    {
      title: 'Goods & Services Tax',
      description:
        'GST Registration \n GST Compliance \n GST Litigation \n Input Tax Credit \n Others',
    },
  ]
  return (
    <>
      <div className='parent py-6'>
        {/* <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'
          ref={ref}
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={sectionBodyAnimation}
          style={{ marginBottom: '80px' }}
        >
          {[
            { text: 'Response Time', count: '< 1 Hour' },
            { text: 'Resolution Time', count: '< 1 Day' },
            { text: 'Client Retention Rate', count: '>95%' },
            { text: 'Compliance Rate', count: '100%' },
          ].map((item, index) => (
            <div key={index} className='text-center'>
              <h2
                className=' font-semibold mb-1'
                style={{ fontSize: '43.94px' }}
              >
                {item.count}
              </h2>
              <p className='text-neutral mb-2' style={{ fontSize: '21.97px' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div> */}

        <div
          className='mb-12 mt-16'
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <h1 className='text-4xl font-semibold text-center'>The Team</h1>
          {/* <BottomLine /> */}
        </div>

        <div
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
        </div>

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
                One-Stop Solution
              </button>
              <h2 className='text-4xl font-bold mb-4'> Our Expertise</h2>
              <p className='text-gray-600 mb-8'>
                We offer a comprehensive suite of services to empower your
                financial success.
              </p>
            </div>
            <div className='md:w-1/2 flex justify-end'>
              <img src={hiring} alt='Company logo' className='max-w-md' />
            </div>
          </div>
        </section>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          style={{ marginTop: '2%', marginBottom: '8%' }}
        >
          {cardData.map((data, index) => (
            <div
              key={index}
              className='card bg-gray-700 p-4 mx-2 mb-4 sm:mx-0 sm:w-full lg:w-3/4'
              style={{
                // minHeight: '150px',
                maxHeight: '400px',
                padding: '2rem',
                margin: '0 auto',
                backgroundColor: '#0E1013',
                minWidth: '300px', // Adjusted for mobile view
                maxWidth: '500px', // Adjusted for web view
              }}
            >
              <div>
                <h2 className='text-white text-lg mb-2'>{data.title}</h2>
                <ul
                  className='text-left text-sm lg:text-base list-disc pl-4'
                  style={{ color: '#B3B3B3' }}
                >
                  {data.description.split('\n').map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className='break-words'
                      style={{ fontSize: '14px' }}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-4'>
                <div
                  className='flex items-center text-sm'
                  style={{ color: '#8dce19' }}
                >
                  <span style={{ fontSize: '16px', marginRight: '10px' }}>
                    View More
                  </span>
                  <BsFillArrowRightCircleFill className='icon' />
                </div>
              </div>
            </div>
          ))}

          {/* {cardData.map((data, index) => (
            <div
              key={index}
              className='card bg-gray-700 p-4 mx-2 mb-4 sm:mx-0   sm:w-full lg:w-3/4'
              style={{
                minHeight: '150px',
                padding: '2rem',
                backgroundColor: '#0E1013',
                minWidth: '400px',
              }}
            >
              <div>
                <h2 className='text-white text-lg mb-2'>{data.title}</h2>
                <p
                  className='text-left break-words text-sm lg:text-base'
                  style={{ color: '#B3B3B3' }}
                >
                  {data.description}
                </p>
              </div>
              <div className='mt-4'>
                <div
                  className='flex items-center text-sm'
                  style={{ color: '#8dce19' }}
                >
                  <span style={{ fontSize: '12px', marginRight: '10px' }}>
                    View More
                  </span>
                  <BsFillArrowRightCircleFill className='icon' />
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  )
}

export default Service
