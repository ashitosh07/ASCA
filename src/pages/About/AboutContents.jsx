import PropTypes from "prop-types";
const AboutContents = ({ next, pages }) => {
  return (
    <div className="flex  items-center h-full justify-center gap-20">
      <p className="text-7xl font-bold">This is ASCA</p>
      <div className="flex flex-col items-start">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => next(index)}
            className="text-lg font-medium hover:bg-[#8dce19] px-4 flex items-center rounded-lg hover:text-black transition-all duration-300"
          >
            {page.name} ...................................... [{index + 1}]
          </button>
        ))}
      </div>
    </div>
  );
};

AboutContents.propTypes = {
  next: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutContents;
