import { useState, useEffect } from 'react'
import { blogs } from './BlogJson'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

const Topic = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [topic, setTopic] = useState(null)

  useEffect(() => {
    const fetchTopic = () => {
      const foundTopic = blogs.find((b) => b.id == id)
      setTopic(foundTopic)
      setLoading(false)
    }

    fetchTopic()
  }, [id])

  const [expanded, setExpanded] = useState(null)

  const renderTopic = (topic) => {
    return (
      <div className='border px-4 py-2 rounded-md transition-all duration-300 h-full text-[#8dce19]'>
        <div className=' flex  items-center gap-2'>
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
          <p className=' text-xl '>{topic.title}</p>
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
                    to={`/blogs/topic/${id}/sub/${topic.id}/blog/${top.id}`}
                    className='text-white text-xl font-medium block'
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

  if (loading) {
    return <div className='text-center'>Loading...</div>
  }

  return (
    <div>
      <p className='text-2xl text-center '>{topic?.title}</p>
      <ul className='space-y-2 mt-10'>
        {' '}
        {topic.subTopics.map((topic) => (
          <div key={topic.id}>{renderTopic(topic)}</div>
        ))}
      </ul>
    </div>
  )
}

export default Topic
