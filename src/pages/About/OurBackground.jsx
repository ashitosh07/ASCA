import headerLogo from '../../assets/headerLogo.png'
const OurBackground = () => {
  return (
    <div className='flex flex-col lg:flex-row   justify-center  gap-10 lg:gap-20 px-[5%] lg:px-20'>
      <div className='lg:w-[50%]'>
        <p className='text-xl  text-[#8dce19] mb-5'>Our Background</p>
        <p>
          Established in 2018, we are a Chartered Accountants firm that began
          with the vision of an organization that is ethically grounded and
          precision-driven. Operating from Mangalore and Bangalore, our firm
          prides itself on the financial acumen and technological advancements
          that we bring to the table. Along with being client-centric, we have a
          keen eye for detail and a commitment to excellence. We strive to
          provide our clients with the clarity and tools they need to make
          well-informed decisions that will positively impact their financial
          future.
        </p>
      </div>
      <div className='lg:w-[50%]'>
        <div className='flex gap-2 items-center'>
          <img src={headerLogo} alt='' className='w-[80px] h-[50px] ' />
          <p>ASCA was introduced in 2018</p>
        </div>
      </div>
    </div>
  )
}

export default OurBackground
