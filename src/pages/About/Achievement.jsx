import { useState } from 'react'
import AboutContents from './AboutContents'
import AtGlance from './AtGlance'
import OurStory from './OurStory'
import WhatWeDo from './WhatWeDo'
import WhoWeServer from './WhoWeServer'
import WhyWeExist from './WhyWeExist'
import { NextIcon, PreviousIcon } from '../../components/core/icons'
import OurBackground from './OurBackground'
import WeAre from './WeAre'
import WhoWeAre from './WhoWeAre'

const Achievement = () => {
  const pages = [
    { name: 'Our Story' },
    { name: 'Our Background' },
    { name: 'Why We Exist' },
    { name: 'What WeDo' },
    { name: 'We Are' },
    { name: 'Who We Are' },
    { name: 'Who We Serve' },
    { name: 'At Glance' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextComponent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length)
  }

  const prevComponent = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    )
  }

  const components = [
    <AboutContents key='1' next={(i) => setCurrentIndex(i)} pages={pages} />,
    <OurStory key='2' />,
    <OurBackground key={'3'} />,
    <WhyWeExist key='4' />,
    <WhatWeDo key='5' />,
    <WeAre key='6' />,
    <WhoWeAre key={'7'} />,
    <WhoWeServer key='9' />,
    <AtGlance key='10' />,
  ]
  return (
    <div className=' flex flex-col lg:flex-row items-center px-5'>
      <div className='hidden lg:block'>
        {currentIndex === components.length - 1 ? (
          <button
            onClick={prevComponent}
            className=' flex items-center gap-2 hover:scale-105 duration-200'
          >
            <PreviousIcon />
            <p className='text-2xl '>Prev</p>
          </button>
        ) : (
          currentIndex !== 0 && (
            <button
              onClick={prevComponent}
              className=' hover:border border-[#8dce19] rounded-full p-2 flex items-center justify-center transition-all duration-300'
            >
              <PreviousIcon />
            </button>
          )
        )}
      </div>
      <div
        className={`w-full h-fit pt-20 lg:h-screen flex items-center justify-center transition-transform duration-500 ease-in-out`}
      >
        {components[currentIndex]}
      </div>
      <div className='hidden lg:block'>
        {currentIndex === 0 ? (
          <button
            onClick={nextComponent}
            className=' flex items-center gap-2 hover:scale-105 duration-200'
          >
            <p className='text-2xl '>Start</p>
            <NextIcon />
          </button>
        ) : (
          currentIndex !== components.length - 1 && (
            <button
              onClick={nextComponent}
              className=' hover:border border-[#8dce19] rounded-full p-2 flex items-center justify-center transition-all duration-300'
            >
              <NextIcon />
            </button>
          )
        )}
      </div>
      <div className=' flex  lg:hidden justify-center px-5 py-4 gap-5 items-center'>
        {currentIndex === components.length - 1 ? (
          <button
            onClick={prevComponent}
            className=' flex items-center gap-2 hover:scale-105 transition-all duration-200'
          >
            <PreviousIcon />
            <p className='text-2xl '>Prev</p>
          </button>
        ) : (
          currentIndex !== 0 && (
            <button
              onClick={prevComponent}
              className=' hover:border-[#8dce19] border-black border rounded-full p-2 flex items-center justify-center transition-all duration-300'
            >
              <PreviousIcon />
            </button>
          )
        )}
        {currentIndex === 0 ? (
          <button
            onClick={nextComponent}
            className=' flex items-center gap-2 hover:scale-105 duration-200'
          >
            <p className='text-2xl '>Start</p>
            <NextIcon />
          </button>
        ) : (
          currentIndex !== components.length - 1 && (
            <button
              onClick={nextComponent}
              className='hover:border-[#8dce19] border-black border rounded-full p-2 flex items-center justify-center transition-all duration-300'
            >
              <NextIcon />
            </button>
          )
        )}
      </div>
    </div>
  )
}

export default Achievement
