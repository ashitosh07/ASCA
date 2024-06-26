import React, { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { Link, useNavigate } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import { RiFolderInfoFill } from 'react-icons/ri'
import TypeAnimation from 'react-type-animation'
import { motion, useAnimation } from 'framer-motion'
import Swal from 'sweetalert2'
import '../shared/Shared.css'
import myImage from '../../assets/client.png'
import client1 from '../../assets/client1.png'
import client2 from '../../assets/client2.png'
import client3 from '../../assets/client3.png'
import client4 from '../../assets/client4.png'
import client5 from '../../assets/client5.png'

import { contactAnimation } from '../../hooks/useAnimation'
import { useInView } from 'react-intersection-observer'
import clientbg from '../../assets/clientbg.png'
const clientImages = [client1, client2, client3, client4, client5]

const Project = () => {
  const navigate = useNavigate()
  const form = useRef()
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [viewDiv, setViewDiv] = useState(false)
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      setViewDiv(true)
    } else {
      setViewDiv(false)
    }
  }, [inView, animation])

  const handleSend = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_upd9mzn', form.current, '_oE-UyMZh1i0VBa0t')
      .then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your email has been sent',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'small-swal-popup', // Custom class for smaller popup
            },
          })
          navigate('/') // Redirect after success
        },
        (error) => {
          console.log(error.text)
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'small-swal-popup', // Custom class for smaller popup
            },
          })
        }
      )
    e.target.reset()
  }
  return (
    <>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '30px',
          padding: '20px',
        }}
      >
        <div className='parent min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div
            className='w-full lg:w-1/2 text-center'
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={myImage}
              alt='Decorative'
              className='mx-auto'
              style={{
                width: '90%',
                height: 'auto',
                marginTop: '20px',
              }}
            />
          </div>
          <div className='w-full lg:w-1/2 text-center lg:text-left py-6'>
            <section className='py-4 px-10 pt-10'>
              <div className='container mx-auto flex flex-col items-center lg:items-start'>
                <button
                  className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded'
                  style={{
                    backgroundColor: '#8dce19',
                    marginBottom: '10px',
                  }}
                >
                  Reach out to us
                </button>
                {/* <h2 className='text-4xl  mb-4 text-black'>We are hiring</h2> */}
                <p className='text-gray-600 mb-8'>
                  If there’s something you would require any assistance with,
                  you may drop your enquiries to –
                  <a
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=ascafirm@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <b>ascafirm@gmail.com</b>
                  </a>
                </p>

                <div
                  className=''
                  ref={ref}
                  initial='hidden'
                  animate={viewDiv && 'visible'}
                  variants={contactAnimation}
                >
                  <div
                    className='form-container'
                    style={{
                      borderRadius: '10px',
                      backgroundColor: '#111111',
                      padding: '20px',
                      maxWidth: '500px',
                      width: '100%',
                      margin: '0 auto',
                    }}
                  >
                    <form
                      ref={form}
                      onSubmit={handleSend}
                      style={{
                        borderImage:
                          'linear-gradient(to right, #0a0d0b, #1c3e2a, #237349, #22ad69, #12eb8b) 2 0',
                      }}
                    >
                      <div
                        className='form-group'
                        style={{ marginBottom: '6px' }}
                      >
                        <label htmlFor='name'>Name</label>
                        <input
                          className='input-field'
                          type='text'
                          name='name'
                          id='name'
                          placeholder='Name'
                          required
                          style={{
                            color: 'black',
                            backgroundColor: 'white',
                          }}
                        />
                      </div>
                      <div
                        className='form-group'
                        style={{ marginBottom: '6px' }}
                      >
                        <label htmlFor='email'>Email</label>
                        <input
                          className='input-field'
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Email'
                          required
                          style={{ color: 'black', backgroundColor: 'white' }}
                        />
                      </div>
                      <div
                        className='form-group'
                        style={{ marginBottom: '6px' }}
                      >
                        <label htmlFor='phone'>Phone</label>
                        <input
                          className='input-field'
                          type='text'
                          name='phone'
                          id='phone'
                          placeholder='Phone'
                          required
                          style={{ color: 'black', backgroundColor: 'white' }}
                        />
                      </div>

                      <div className='form-group'>
                        <label htmlFor='Description'>Description</label>
                        <textarea
                          className='input-field'
                          name='Description'
                          id='Description'
                          cols='30'
                          rows='5'
                          placeholder='Description'
                          required
                          style={{ color: 'black', backgroundColor: 'white' }}
                        ></textarea>
                      </div>

                      <div className='form-group'>
                        <button
                          type='submit'
                          className='px-4 py-2  text-black rounded hover:bg-green-600 transition duration-300 '
                          style={{ backgroundColor: '#8dce19' }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div
          className='client-logos'
          style={{
            padding: '20px 0',
            textAlign: 'center',
            borderRadius: '10px',
            marginBottom: '10px',
          }}
        ></div>
      </div>
    </>
  )
}

export default Project
