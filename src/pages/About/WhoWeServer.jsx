const WhoWeServer = () => {
  return (
    <div className='flex flex-col lg:flex-row  justify-center gap-10 px-[5%] lg:px-20'>
      <div className='border-b-2  lg:border-b-0  lg:border-r-2 lg:w-[40%] flex flex-col justify-center items-end lg:pr-10 '>
        <p className='uppercase text-xl  mb-5'>who we serve</p>
      </div>
      <div className='lg:w-[60%]'>
        <p className='text-2xl text-[#8dce19] mb-2 '>Individuals </p>
        <p className='text-2xl text-[#8dce19] mb-2 '>Businesses</p>
        <p className='text-2xl text-[#8dce19] mb-2 '>Body corporates</p>
        <p className='text-2xl text-[#8dce19] mb-2 '>Financial Institutions</p>
        <p className='text-2xl text-[#8dce19] mb-2 '>Startups</p>
        <p className='text-2xl text-[#8dce19] mb-2 '>
          International businesses
        </p>
      </div>
    </div>
  )
}

export default WhoWeServer
