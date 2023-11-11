import React, { useState } from 'react'
import myImage from '../../assets/blog.png'
import blogcard1 from '../../assets/blogcard1.png'
import blogcard2 from '../../assets/blogcard2.png'
import blogcard3 from '../../assets/blogcard3.png'
import blogcard4 from '../../assets/blogcard4.png'
import blogcard5 from '../../assets/blogcard5.png'
import blogcard6 from '../../assets/blogcard6.png'
import { Link } from 'react-router-dom'
import { allBlogDetailsData } from './BlogJson'

function BlogCard() {
  const [displayedData, setDisplayedData] = useState(
    allBlogDetailsData.slice(0, 6)
  )
  const [searchTerm, setSearchTerm] = useState('')

  const handleViewMore = () => {
    setDisplayedData(allBlogDetailsData)
  }

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filteredData = allBlogDetailsData.filter(
      (data) =>
        data.name.toLowerCase().includes(term) ||
        data.title.toLowerCase().includes(term) ||
        data.description.toLowerCase().includes(term)
    )
    setDisplayedData(filteredData)
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center mt-16'>
        <h1 className='text-4xl font-semibold mb-2 text-center'>Blog</h1>

        <p className='text-gray-400 mb-4 text-center'>
          Simply dummy text of the printing and typesetting industry.
        </p>

        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative mb-10'>
          <div
            className='absolute inset-y-0 start-0 flex items-center ps-3 border border-r-0 border-gray-300 dark:border-dark-800 pointer-events-none'
            style={{ borderColor: '#8dce19', borderRadius: '30%' }}
          >
            <svg
              className='w-6 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='#8dce19'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            id='default-search'
            className='block w-80 p-2 ps-8 pb-2 text-sm text-black-900 border border-l-0 border-gray-300 rounded-lg bg-black-50 focus:ring-black-500 focus:border-black-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500'
            placeholder='Search'
            required
            style={{ borderColor: '#8dce19', backgroundColor: 'black' }}
            onChange={handleSearch}
          />
        </div>

        <div className='flex flex-wrap justify-center gap-8 mb-20 m-10'>
          {displayedData.map((data, index) => (
            <Link to={`/blog/${data.id}`} key={data.id}>
              <div
                key={index}
                className='bg-black p-6 rounded-md shadow-md text-left w-96'
              >
                <img
                  src={data.bigImage.src}
                  alt={`Blog Image ${index + 1}`}
                  className='w-full h-auto rounded-md mb-4'
                />

                <button
                  className='text-white px-6 py-1 rounded-full mb-4 ml-2'
                  style={{ backgroundColor: '#314809' }}
                >
                  {data.buttonName}
                </button>

                <div className='text-gray-500 mb-2'>{data.name}</div>
                <div className='text-white font-semibold text-1xl mb-2'>
                  {data.title}
                </div>
                <p className='text-gray-400 ' style={{ fontSize: '12px' }}>
                  {data.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {displayedData.length < allBlogDetailsData.length && (
          <button
            className='text-white  px-4 py-2 rounded-md mb-24'
            onClick={handleViewMore}
            style={{ backgroundColor: '#8dce19' }}
          >
            View More
          </button>
        )}
      </div>
    </>
  )
}

export default BlogCard
