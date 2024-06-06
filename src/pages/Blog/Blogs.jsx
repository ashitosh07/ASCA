import { useState } from 'react'
import { blogs } from './BlogJson'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const [expanded, setExpanded] = useState(null)

  const renderTopic = (topic) => {
    return (
      <div className='border px-4 py-2 rounded-md transition-all duration-300 h-full text-[#8dce19]'>
        <div className=' flex items-center gap-2'>
          {topic.subTopics && (
            <div
              onClick={() =>
                expanded !== topic.id
                  ? setExpanded(topic.id)
                  : setExpanded(null)
              }
            >
              {expanded == topic.id ? (
                <FaMinus className='' />
              ) : (
                <FaPlus className='' />
              )}
            </div>
          )}
          <p className=' text-l '>{topic.title}</p>
        </div>
        <div
          className={`mt-2 transition-all duration-300 pl-10 pt-5 ${
            expanded == topic.id ? 'block h-full' : 'hidden h-0'
          }  `}
        >
          <ul className='list-disc'>
            {topic.subTopics?.map((top) => {
              return (
                <li key={top.id}>
                  <Link
                    to={`/blogs/topic/${topic.blogTopicId}/sub/${topic.id}/blog/${top.id}`}
                    className='text-white text-l font-medium block'
                  >
                    {top.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  const subTopics = blogs.reduce((acc, topic) => {
    if (topic.subTopics) {
      const updatedSubTopics = topic.subTopics.map((subTopic) => ({
        ...subTopic,
        blogTopicId: topic.id,
      }))
      acc.push(...updatedSubTopics)
    }
    return acc
  }, [])

  return (
    <div>
      <p className='text-1xl text-center '>All Articles</p>
      <ul className='space-y-2 mt-10'>
        {subTopics.map((topic) => (
          <div key={topic.id}>{renderTopic(topic)}</div>
        ))}
      </ul>
    </div>
  )
}

export default Blogs
