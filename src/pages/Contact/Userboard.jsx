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
        <div className='max-w-7xl mx-auto px-4 lg:px-8 pt-20'>
          <p className='text-3xl text-center px-5 text-white'>
            You Can Also Find Us
          </p>
          <div className='py-10 px-4 lg:px-10 flex flex-col lg:flex-row items-center gap-10 justify-center'>
            {/* Google Maps Iframes */}
            <div className='map-container p-2 lg:p-10 w-full lg:w-1/2'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124453.65062639558!2d74.75922904217691!3d12.89636440867295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b0b37d4f153%3A0xbaf859c5b042fa2c!2sASCA%20-%20Anwesh%20Shetty%20Chartered%20Accountants!5e0!3m2!1sen!2sin!4v1717146477571!5m2!1sen!2sin'
                width='100%'
                height='350'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-lg'
              ></iframe>
              <p className='text-center mt-2 text-white'>Head Office</p>
            </div>
            <div className='map-container p-2 lg:p-10 w-full lg:w-1/2'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d243.03374724502888!2d77.5854724!3d12.9372628!3m2!1i1024!2i768!4f13.1!4m9!3e9!4m3!3m2!1d12.890931199999999!2d74.84866559999999!4m3!3m2!1d12.937342099999999!2d77.58556589999999!5e0!3m2!1sen!2sin!4v1719558465299!5m2!1sen!2sin'
                width='100%'
                height='350'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-lg'
              ></iframe>
              <p className='text-center mt-2 text-white'>Branch Office</p>
            </div>
          </div>
          <p className='text-3xl uppercase text-center px-5 mt-10 text-white'>
            Contact Us
          </p>
          <div className='py-10 px-4 lg:px-10 flex flex-col lg:flex-row items-center gap-20 justify-center'>
            {data.map((cont, i) => (
              <div key={i} className='flex flex-col gap-5 items-center'>
                <div style={{ width: '1.5rem' }}>{cont.icon}</div>
                <div>
                  <a
                    href={cont.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white'
                  >
                    {cont.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Userboard
