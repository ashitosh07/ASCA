import { useState } from 'react'

const TeamMemberCard = ({ image, name, role, body }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className='p-4 shadow-md rounded-lg'>
      <div onClick={openModal} className='cursor-pointer'>
        <div className='overflow-hidden rounded-lg lg:h-64 sm:h-76 w-full bg-gray p-2 img'>
          <div className='overflow-hidden rounded-lg h-full w-full frame'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-lg'>{name}</h3>
          <p className='text-sm text-gray-600'>{role}</p>
        </div>
      </div>

      {modalIsOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div
            className='fixed inset-0 bg-black opacity-50'
            onClick={closeModal}
          ></div>

          <div
            className='bg-black rounded-lg shadow-lg p-6 w-11/12 max-w-md mx-auto z-10 max-h-[80vh] overflow-y-auto relative'
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#8dce19 #000' }}
          >
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 px-4 py-2  text-white rounded-lg flex items-center justify-center'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-5 h-5 ml-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
            <div className='flex flex-col items-center mt-8'>
              <img
                src={image}
                alt={name}
                className='w-32 h-32 rounded-full object-cover mb-4'
              />
              <h3 className='text-xl  mb-2'>{name}</h3>
              <p className='text-sm text-white-600 mb-4'>{role}</p>
              <div className='text-base text-white-800'>{body}</div>
              <button
                onClick={closeModal}
                className='mt-4 px-2 py-0.2 bg-[#8dce19]  text-black rounded-lg flex items-center justify-center'
                style={{ fontSize: '14px' }}
              >
                Close
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-4 h-5 ml-2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamMemberCard
