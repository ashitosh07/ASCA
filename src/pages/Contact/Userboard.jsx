import './Contact.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import map from '../../assets/map.png'

import Contact from './Contact'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from '../../components/core/icons'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa'

const Userboard = () => {
  const data = [
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      link: '+919019905527',
    },
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61560006581477',
    },
    {
      icon: <FaLinkedinIn />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/asca-firm-87bb7a310/',
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      link: 'https://www.instagram.com/ascafirm/',
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
              {/* <iframe
                src='https://www.google.com/maps/embed?pb=YOUR_HEAD_OFFICE_EMBED_URL'
                width='600'
                height='450'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-md'
              ></iframe> */}
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.535197715614!2d77.585601!3d12.937567999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU2JzE1LjIiTiA3N8KwMzUnMDguMiJF!5e0!3m2!1sen!2sin!4v1717146334883!5m2!1sen!2sin'
                width='600'
                height='450'
                // style='border:0;'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
              <p className='text-center mt-2'>Head Office</p>
            </div>
            <div className='map-container'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124453.65062639558!2d74.75922904217691!3d12.89636440867295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b0b37d4f153%3A0xbaf859c5b042fa2c!2sASCA%20-%20Anwesh%20Shetty%20Chartered%20Accountants!5e0!3m2!1sen!2sin!4v1717146477571!5m2!1sen!2sin'
                width='600'
                height='450'
                // style='border:0;'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
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
                  <div>
                    <a
                      href={cont.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {cont.name}
                    </a>
                  </div>
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
