import PropTypes from 'prop-types'
import './AboutContent.css'
const AboutContents = ({ next, pages }) => {
  return (
    <div className='flex  flex-col lg:flex-row items-center h-full justify-center gap-20'>
      <p className='text-5xl lg:text-7xl '>This is ASCA</p>

      <div className='flex flex-col items-start'>
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => next(index + 1)}
            className='text-sm lg:text-lg font-medium hover:bg-[#8dce19] px-2 py-2 flex items-center justify-between w-full rounded-lg hover:text-black transition-all duration-300 relative'
            style={{ textAlign: 'left' }}
          >
            <span className='page-name'>{page.name}</span>
            <span className='page-index'>[{index + 1}]</span>
          </button>
        ))}
      </div>
    </div>
  )
}

AboutContents.propTypes = {
  next: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default AboutContents
