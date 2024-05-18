import React, { useEffect, useState } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { headingAnimation } from '../../../hooks/useAnimation'

import CardSection from './CardSection' // Update import

import TeamMember from './TeamMember'

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

  // Define cardData here or import it from an external source

  return (
    <>
      <div className='parent py-4'>
        <div
          className='mb-12 mt-16'
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <h1 className='text-4xl font-semibold text-center'>The Team</h1>
          {/* <BottomLine /> */}
        </div>
        <TeamMember />
        <CardSection /> {/* Pass cardData as prop */}
      </div>
    </>
  )
}

export default Service
