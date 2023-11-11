import React from 'react'
import readingBook from '../../assets/reading-book.json'
import blog from '../../assets/blog.png'
import blogmain from '../../assets/blogmain.png'

const blogData = [
  {
    image: blog,
    description:
      'A small business is only as good as its tools and it is totally true.',
    date: 'September 22, 2023',
  },
  {
    image: blog,
    description:
      'A small business is only as good as its tools and it is totally true.',
    date: 'September 22, 2023',
  },
  {
    image: blog,
    description:
      'A small business is only as good as its tools and it is totally true.',
    date: 'September 22, 2023',
  },
]

const Blog = () => {
  return (
    <div
      className='px-4 sm:px-6 lg:px-10 pt-24'
      style={{ backgroundColor: '#FFFFFF', borderRadius: '50px' }}
    >
      <div className='mb-12 px-10'>
        <h1
          className='text-3xl font-semibold drop-shadow-md text-center'
          style={{ color: 'black' }}
        >
          Blog
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 items-center'>
        <div className='mx-auto'>
          <div className='w-full sm:w-[500px] mx-auto cursor-pointer'>
            <img
              src={blogmain}
              alt='Education Image'
              className='w-full h-auto rounded-lg'
            />
            <div style={{ color: '#000000' }} className='pt-4 sm:pt-7'>
              <p className='text-lg font-semibold mb-2 sm:mb-4'>
                A small business is only as good as its tools, and it is totally
                true.
              </p>
              <p>
                We've all experienced the chaos of multiple spreadsheets,
                tracking, and insight tools, and scrambling for the right data
                at the right time.
              </p>
              <p
                className='text-sm font-semibold mt-2 sm:mt-4'
                style={{ color: '#8dce19' }}
              >
                September 22, 2023
              </p>
            </div>
          </div>
        </div>
        <div className='mx-auto'>
          {blogData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row my-4 mx-auto w-full sm:w-[400px] cursor-pointer'
            >
              <div className='w-full sm:w-2/5'>
                <img
                  src={item.image}
                  alt='Education Image'
                  className='w-full h-auto object-cover rounded-lg'
                />
              </div>
              <div className='w-full sm:w-3/5 pl-0 sm:pl-4'>
                <p
                  className='text-md sm:text-xl font-semibold text-primary mb-2'
                  style={{ color: '#000000', whiteSpace: 'pre-wrap' }}
                >
                  {item.description}
                </p>

                <p
                  className='text-sm font-semibold'
                  style={{ color: '#8dce19' }}
                >
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='px-4 sm:px-6 lg:px-10 text-center'>
        <button
          className='text-sm font-bold my-4'
          style={{
            backgroundColor: '#8dce19',
            padding: '6px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'black',
            borderRadius: '10%',
          }}
        >
          More
        </button>
      </div>
    </div>
  )
}

export default Blog
