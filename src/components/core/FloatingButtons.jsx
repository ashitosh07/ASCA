import React, { useState, useEffect, useRef } from 'react'
import { IoChatboxEllipses } from 'react-icons/io5'

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
            <IoChatboxEllipses className='text-2xl' />
          </button>

          {helpMessageVisible && (
            <div
              ref={helpMessageRef}
              className='fixed bottom-16 right-4 md:bottom-24 md:right-8 bg-white text-gray-700 p-3 rounded-md shadow-md'
            >
              <a
                href='https://wa.me/919019905527'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p>WhatsApp</p>
              </a>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default FloatingButtons
