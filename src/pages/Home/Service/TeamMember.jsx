import React, { useState } from 'react'
import team1 from '../../../assets/team1.png'
import team2 from '../../../assets/team2.png'
import team3 from '../../../assets/team3.png'
import team4 from '../../../assets/team4.png'
import hiring from '../../../assets/hiring.png'
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../../hooks/useAnimation'
import { useInView } from 'react-intersection-observer'
const TeamMember = () => {
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

  const [ref, inView] = useInView()
  const [viewDiv, setViewDiv] = useState(false)
  return (
    <>
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
          </div>
        ))}
      </div>{' '}
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
    </>
  )
}

export default TeamMember
