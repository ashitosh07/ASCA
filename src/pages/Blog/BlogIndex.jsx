import React from 'react'
import { Link } from 'react-router-dom'
import { BiUpload } from 'react-icons/bi'

const BlogIndex = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center mt-20 p-8 text-center'>
        <div className='flex flex-col items-center justify-center'>
          <blockquote
            className='p-6 rounded-lg text-center border-r-4 border-green-500'
            style={{ maxWidth: '40rem', fontSize: '20px' }}
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled
          </blockquote>
        </div>
        <p className='mt-14' style={{ paddingBottom: '40px' }}>
          <button
            className='px-4 py-1 bg-green-500 text-black  rounded hover:bg-green-600 duration-300'
            style={{ backgroundColor: '#8dce19', fontWeight: '700' }}
          >
            Help me
          </button>
        </p>
        {/* <div className='border-t border-gray-300 mt-14 mb-14'></div>
        <div
          className='flex flex-col items-center justify-center'
          style={{ maxWidth: '37rem' }}
        >
          <h1
            className='text-3xl mt-8 mb-8'
            style={{ fontFamily: 'lexend', fontSize: '29px' }}
          >
            Lorem Ipsum has been the industry's standard dummy
          </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-2 mb-4'>
          <label className='mb-2 md:mb-0 md:mr-4 text-center'>
            <input
              type='radio'
              name='profile'
              value='client'
              className='mr-2 text-green-500'
              checked
            />
            Client specific access portal
          </label>
          <label className='mb-2 md:mb-0  text-center'>
            <input
              type='radio'
              name='profile'
              value='professional'
              className='mr-2 text-green-500'
            />
            Professional access portal
          </label>
        </div>

        <div className='text-center mt-8'>
          <div className='flex flex-col md:flex-row md:items-center'>
            <div className='text-lg md:text-left'>
              <label
                htmlFor='name'
                className='block text-white'
                style={{ fontSize: '13px' }}
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your Name'
                className='border rounded px-4 py-2 text-base text-black bg-black w-64 md:mr-4'
              />
            </div>
            <div className='text-lg mt-4 md:mt-0 md:text-left md:ml-4'>
              <label
                htmlFor='email'
                className='block text-white'
                style={{ fontSize: '13px' }}
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your Email'
                className='border rounded px-4 py-2 text-base text-black bg-black w-64'
              />
            </div>
          </div>
        </div>

        <div className='text-center mt-8'>
          <label
            htmlFor='file'
            className='block  text-center mb-2'
            style={{ fontSize: '13px' }}
          >
            Upload files
          </label>
          <div
            className='border border-dotted border-green-500 border-2 rounded-lg p-4 text-center text-lg mx-auto my-auto'
            style={{
              minWidth: '100%',
              height: '200px',
              border: '1.5px dotted #008000',
            }}
          >
            <div className='flex flex-col justify-center items-center h-full '>
              <BiUpload className='text-green-500 text-5xl' />
              <p className='mt-4'>
                Drag and drop an image, or{' '}
                <span className='text-green-500'>Browse</span>
              </p>
            </div>
          </div>

          <button
            className='px-4 py-1 mt-4 bg-green-500  rounded hover:bg-green-600 duration-300'
            style={{
              backgroundColor: '#8dce19',
              margin: '3% 0',
              color: '#060505',
              fontWeight: '500',
            }}
          >
            Upload
          </button>
        </div> */}
      </div>
    </>
  )
}

export default BlogIndex
