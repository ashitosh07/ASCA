import React, { useState } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
export const ServiceCard = ({ title, smallDescription, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <div
      className='card bg-gray-700 p-4 mx-2 mb-4 sm:mx-0 sm:w-full lg:w-3/4'
      style={{
        minHeight: '150px',
        padding: '2rem',
        backgroundColor: '#0E1013',
        minWidth: '300px',
        maxWidth: '500px',
      }}
    >
      <h2 className='text-white text-lg mb-2'>{title}</h2>
      {showFullDescription ? (
        <ul
          className='text-left text-sm lg:text-base list-disc pl-4'
          style={{ color: '#B3B3B3' }}
        >
          {description.split('\n').map((point, pointIndex) => (
            <li
              key={pointIndex}
              className='break-words'
              style={{ fontSize: '14px' }}
            >
              {point}
            </li>
          ))}
        </ul>
      ) : (
        <p
          className='text-left break-words text-sm lg:text-base'
          style={{ color: '#B3B3B3' }}
        >
          {smallDescription} {/* Displaying the small description */}
        </p>
      )}
      <div className='mt-4'>
        <div
          className='flex items-center text-sm'
          style={{ color: '#8dce19' }}
          onClick={toggleDescription}
        >
          <span style={{ fontSize: '16px', marginRight: '10px' }}>
            {showFullDescription ? 'View Less' : 'View More'}
          </span>
          <BsFillArrowRightCircleFill className='icon' />
        </div>
      </div>
    </div>
  )
}
