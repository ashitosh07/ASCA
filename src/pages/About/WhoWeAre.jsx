const WhoWeAre = () => {
  return (
    <div className='flex flex-col lg:flex-row  justify-center gap-10 px-[5%] lg:px-20'>
      <div className='border-b-2  lg:border-b-0  lg:border-r-2 lg:w-[40%] flex flex-col justify-center items-end pr-10 '>
        <p className='uppercase text-xl  mb-5'>who we are</p>
        <p className='text-2xl text-[#8dce19] mb-5  text-right'>
          Strategically insightful <br /> and precision-driven <br />{' '}
          professionals.
        </p>
      </div>
      <div className='lg:w-[60%]'>
        <p className='mb-5'>
          We combine industry expertise, financial acumen, and regulatory
          knowledge with advanced technology to offer tailored, forward-looking
          advice that helps businesses navigate complex landscapes and achieve
          their long-term objectives.
        </p>
        <p className='mb-5'>
          ASCA stands as a beacon of strategic insight and precision, largely
          due to our profound industry knowledge and financial expertise. We
          excel in dissecting complex financial information and employing it to
          craft strategies that steer clients through regulatory mazes and
          optimise tax positions, all while mitigating risks, if any.
        </p>
      </div>
    </div>
  )
}

export default WhoWeAre
