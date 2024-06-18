import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import React, { Suspense } from 'react'
import NotFound from './pages/shared/NotFound'
import Loader from './pages/shared/Loader'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './pages/shared/Navbar'
import Footer from './pages/shared/Footer'
import Achievement from './pages/About/Achievement'
import Userboard from './pages/Contact/Userboard'
import Blogs from './pages/Blog/Blogs'
import BlogLayout from './pages/Blog/BlogLayout'
import Topic from './pages/Blog/Topic'
import Blog from './pages/Blog/Blog'
import Services from './pages/services/Services'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Project = React.lazy(() => import('./pages/Project/Project'))

function App() {
  const location = useLocation()
  const isFalse = location.pathname.includes('404')
  return (
    <>
      <ScrollToTop />
      {/* <div className='max-w-7xl mx-auto lg:px-4 bg-white:'> */}
        {isFalse || <Navbar />}
      {/* </div> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<Achievement />} />
          <Route path='/project' element={<Project />} />

          <Route path='/contact' element={<Userboard />} />
          <Route path='/blogs' element={<BlogLayout />}>
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/topic/:id' element={<Topic />} />
            <Route
              path='/blogs/topic/:topic/sub/:sub/blog/:id'
              element={<Blog />}
            />
          </Route>
          <Route path='/services' element={<Services />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate replace to='/404' />}></Route>
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  )
}

export default App
