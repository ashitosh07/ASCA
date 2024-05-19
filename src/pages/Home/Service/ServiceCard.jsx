import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const ServiceCard = ({ title, smallDescription, description }) => {
  const navigate = useNavigate()

  const handleViewMore = () => {
    navigate('/services')
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
      <p
        className='text-left break-words text-sm lg:text-base'
        style={{ color: '#B3B3B3' }}
      >
        {smallDescription} {/* Displaying the small description */}
      </p>
      <div className='mt-4'>
        <div
          className='flex items-center text-sm cursor-pointer'
          style={{ color: '#8dce19' }}
          onClick={handleViewMore}
        >
          <span style={{ fontSize: '16px', marginRight: '10px' }}>
            View More
          </span>
          <BsFillArrowRightCircleFill className='icon' />
        </div>
      </div>
    </div>
  )
}
