import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import '../../components/PrimaryBtn.css'
import '../shared/Shared.css'
import { motion, useAnimation } from 'framer-motion'
import { contactAnimation } from '../../hooks/useAnimation'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
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
      .sendForm(
        'itsproali_portfolio',
        'itsproali_portfolio',
        form.current,
        'H-ispiDvwdbG_76iq'
      )
      .then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent',
            showConfirmButton: false,
            timer: 1500,
          })
          navigate('/')
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div className='parent py-20 md:p-20 flex flex-col md:flex-row items-center justify-center p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
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
              <div className='form-group' style={{ marginBottom: '6px' }}>
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
              <div className='form-group' style={{ marginBottom: '6px' }}>
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
              <div className='form-group' style={{ marginBottom: '6px' }}>
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
                <label htmlFor='resume'>Please send your resume to</label>
                <input
                  className='input-field'
                  type='email'
                  name='resume'
                  id='resume'
                  placeholder='example@example.com'
                  required
                  style={{ color: 'black', backgroundColor: 'white' }}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='role'>Available Roles</label>
                <select id='role' name='role' className='input-field' required>
                  <option value=''>Select a role</option>
                  <option value='Partner'>Partner</option>
                  <option value='Manager'>Manager</option>
                  <option value='Lawyer'>Lawyer</option>
                  <option value='Articleship'>Articleship</option>
                  <option value='Internship'>Internship</option>
                  <option value='Staff'>Staff</option>
                </select>
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
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl  mb-6'>Help section</h1>
          <blockquote
            className='p-4 rounded-lg text-center border-r-4  max-w-xl text-lg'
            style={{ borderColor: '#8dce19' }}
          >
            Committed to matching your unique financial requirements and
            objectives, our team provides expert assistance tailored for your
            success.
          </blockquote>
          <p className='mt-10 pb-10'>
            <button
              className='px-4 py-2  text-black rounded hover:bg-green-600 transition duration-300 '
              style={{ backgroundColor: '#8dce19' }}
            >
              Get started
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
