import React, { useState, useEffect, useRef } from 'react'
import { IoChatboxEllipses } from 'react-icons/io5'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButtons = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true)
  const [helpMessageVisible, setHelpMessageVisible] = useState(false)
  const helpMessageRef = useRef(null)

  const handleButtonClick = () => {
    setHelpMessageVisible(!helpMessageVisible)
    console.log('Button clicked!')
  }

  const handleMouseDown = (event) => {
    if (
      helpMessageRef.current &&
      !helpMessageRef.current.contains(event.target)
    ) {
      setHelpMessageVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return (
    <>
      {isButtonVisible && (
        <div>
          <button
            className='fixed bottom-4 right-16 bg-green-500 text-white p-3 rounded-full shadow-md md:bottom-8 md:right-16'
            onClick={handleButtonClick}
          >
            <a
              href='https://wa.me/919019905527'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <FaWhatsapp className='text-2xl text-black-500' />
            </a>
          </button>
        </div>
      )}
    </>
  )
}

export default FloatingButtons
