import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from 'react-icons/ri'
import { GiCrossMark } from 'react-icons/gi'
import { FaHome, FaDownload } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { ImBlog } from 'react-icons/im'

import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import './Shared.css'
import { SearchIcon } from '@heroicons/react/outline'

import PrimaryBtn from '../../components/PrimaryBtn'
import img from '../../assets/headerLogo.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const navLinks = [
    { title: 'Home', link: '/', icon: <FaHome /> },
    { title: 'About', link: '/about', icon: <RiFolderInfoFill /> },
    { title: 'Contact', link: '/contact', icon: <RiContactsBook2Fill /> },
    { title: 'Blog', link: '/blog', icon: <ImBlog /> },
    { title: 'Sign in', link: '/signin', icon: <FaDownload /> },
  ]
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && '#8dce19',
    }
  }

  const [show, setShow] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setShow(true)
        } else {
          setShow(false)
        }
        setLastScrollY(window.scrollY)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <div
      className={`visible ${show && 'nav-hidden'} shadow-lg bg-[#000000] 
     z-50`}
    >
      <div className='w-full flex items-center justify-between px-3 md:px-24 py-3'>
        <div>
          <Link to='/'>
            <img src={img} alt='AS CA' style={{ width: '70%' }} />
          </Link>
        </div>
        <div>
          <ul className='lg:flex items-center hidden'>
            {navLinks.map((navItem) => (
              <li className='mx-4' key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className='text-white hover:text-primary duration-300'
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}
            <li className='mx-4'>
              <SearchIcon
                className='h-6 w-6 text-white hover:text-primary duration-300'
                style={{ color: '#8dce19' }}
              />
            </li>
          </ul>
          <div className='block lg:hidden'>
            <button onClick={toggleDrawer} className='btn btn-ghost text-white'>
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction='right'
              style={{ backgroundColor: '#000000' }}
              className='bla bla bla flex flex-col justify-between pb-4'
            >
              <ul className=''>
                <li className='mt-6 mb-10 ml-4'>
                  <GiCrossMark
                    className='cursor-pointer hover:text-primary duration-300'
                    onClick={() => setIsOpen(!isOpen)}
                  ></GiCrossMark>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className='m-4'
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className='flex items-center text-white hover:text-primary duration-300'
                    >
                      <span className='mr-3'>{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
