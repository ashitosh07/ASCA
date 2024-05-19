import React from 'react'
import { Link } from 'react-router-dom'
import { BiUpload } from 'react-icons/bi'

const BlogIndex = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-8 p-8 text-center'>
        <div className='border-t border-gray-700 mt-4 mb-6'></div>
        {/* <div
          className='flex flex-col items-center justify-center'
          style={{ maxWidth: '37rem' }}
        >
          <h1
            className='text-3xl mt-8 mb-8'
            style={{ fontSize: '26px', fontWeight: 'bold' }}
          >
            Newsletter space
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-left mt-2 mb-4'>
          <label
            className='mb-2 md:mb-0 md:mr-4 text-center'
            style={{ fontSize: '20px' }}
          >
            <input
              type='radio'
              name='profile'
              value='client'
              className='mr-2 text-green-500 bg-green-500'
              checked
            />
            Client specific access portal
          </label>
          <label
            className='mb-2 md:mb-0  text-center'
            style={{ fontSize: '20px', textAlign: 'left' }}
          >
            <input
              type='radio'
              name='profile'
              value='professional'
              className='mr-2 text-green-500'
            />
            Professional access portal
          </label>
        </div> */}

        {/* <div className='text-center mt-8'>
          <div className='flex flex-col md:flex-row md:items-center'>
            <div className='text-lg md:text-left'>
              <label
                htmlFor='name'
                className='block text-white'
                style={{
                  fontSize: '13px',
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your Name'
                className='rounded px-4 py-2 text-base text-black bg-black w-64 md:mr-4'
              />
            </div>
            <div className='text-lg mt-4 md:mt-0 md:text-left md:ml-4'>
              <label
                htmlFor='email'
                className='block text-white'
                style={{
                  fontSize: '13px',
                  textAlign: 'left',
                  fontWeight: 'bold',
                }}
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your Email'
                className=' rounded px-4 py-2 text-base text-black bg-black w-64'
              />
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <label
            htmlFor='file'
            className='block  text-center mb-2'
            style={{ fontSize: '13px', fontWeight: 'bold', textAlign: 'left' }}
          >
            Upload files
          </label>
          <div
            className='border border-dotted border-green-500 border-2 rounded-lg p-4 text-center text-lg mx-auto my-auto'
            style={{
              minWidth: '100%',
              height: '200px',
              border: '1.5px dotted #ffffff',
            }}
          >
            <div className='flex flex-col justify-center items-center h-full '>
              <BiUpload className='text-green-500 text-4xl' />
              <p className='mt-4' style={{ fontSize: '16px' }}>
                Drag and drop an image, or{' '}
                <span className='text-green-500'>Browse</span>
              </p>
            </div>
          </div>

          <button
            className='px-4 py-1 mt-4 bg-green-500  rounded hover:bg-green-600 duration-300'
            style={{
              backgroundColor: '#8dce19',
              margin: '20% 0',
              color: '#060505',
              fontWeight: 'bold',
            }}
          >
            Subscribe
          </button>
        </div> */}
      </div>
      <div className='parent py-6'>
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
                {/* Join our team */}
              </button>
              <h2 className='text-4xl font-bold mb-4'> We are hiring</h2>
              <p className='text-gray-600 mb-8'>
                "Great things in a professional firm are never done by one
                person; they're done by a team of people."
              </p>
            </div>
            <div className='md:w-1/2 flex justify-end'>
              {/* <img src={hiring} alt='Company logo' className='max-w-md' /> */}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogIndex
