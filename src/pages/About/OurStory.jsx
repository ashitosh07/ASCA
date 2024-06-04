import headerLogo from '../../assets/headerLogo.png'
const OurStory = () => {
  return (
    <>
      {/* <div className='lg:ml-60 my-20 lg:my-0 pl-10 border-l-8 border-[#8dce19] text-7xl '>
        Our Story
      </div> */}

      <div className='flex flex-col lg:flex-row  justify-center gap-10 px-[5%] lg:px-20'>
        <div className='border-b-2  lg:border-b-0  lg:border-r-2 lg:w-[40%] flex flex-col justify-center items-end pr-10 '>
          <p className='uppercase text-xl  mb-5'>Our Story</p>
        </div>
        <div className='lg:w-[60%]'>
          <div className='flex gap-2 items-center'>
            <img src={headerLogo} alt='' className='w-[80px] h-[40px] ' />
            <p>ASCA was introduced in 2018</p>
          </div>
          <p className='mb-5 mt-5'>
            Established in 2018, we are a Chartered Accountants firm that began
            with the vision of an organization that is ethically grounded and
            precision-driven. Operating from Mangalore and Bangalore, our firm
            prides itself on the financial acumen and technological advancements
            that we bring to the table. Along with being client-centric, we have
            a keen eye for detail and a commitment to excellence. We strive to
            provide our clients with the clarity and tools they need to make
            well-informed decisions that will positively impact their financial
            future.
          </p>
        </div>
      </div>
    </>
  )
}

export default OurStory
