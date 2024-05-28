import './Contact.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import map from '../../assets/map.png'

import Contact from './Contact'
import {
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from '../../components/core/icons'

const Userboard = () => {
  const data = [
    {
      icon: <WhatsAppIcon />,
      data: '067890876578',
    },
    {
      icon: <FacebookIcon />,
      data: 'JohnDoea',
    },
    {
      icon: <LinkedInIcon />,
      data: 'john Doea',
    },
    {
      icon: <YoutubeIcon />,
      data: 'john doea',
    },
  ]

  return (
    <>
      <div className='bg-black'>
        <div className='max-w-7xl mx-auto lg:px-4 pt-20'>
          {/* <div className='flex items-center justify-center px-5 py-20'>
            <img src={map} alt='' className='rounded-md' />
          </div> */}
          <p className='text-3xl  text-center px-5'>You Can Also Find Us</p>
          <div className='py-10 px-10 flex flex-col lg:flex-row items-center gap-10 justify-center'>
            {/* Google Maps Iframes */}
            <div className='map-container'>
              <iframe
                src='https://www.google.com/maps/embed?pb=YOUR_HEAD_OFFICE_EMBED_URL'
                width='600'
                height='450'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-md'
              ></iframe>
              <p className='text-center mt-2'>Head Office</p>
            </div>
            <div className='map-container'>
              <iframe
                src='https://www.google.com/maps/embed?pb=YOUR_BRANCH_OFFICE_EMBED_URL'
                width='600'
                height='450'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-md'
              ></iframe>
              <p className='text-center mt-2'>Branch Office</p>
            </div>
          </div>
          <p className='text-3xl  uppercase text-center px-5 mt-10'>
            Contact Us
          </p>
          <div className='py-10 px-10 flex flex-col lg:flex-row items-center gap-20 justify-center'>
            {data.map((cont, i) => {
              return (
                <div key={i} className='flex flex-col gap-5 items-center'>
                  <div style={{ width: '1.5rem' }}>{cont.icon}</div>
                  <div>{cont.data}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Userboard
