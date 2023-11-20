import React from 'react'

const SecondaryBtn = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} btn text-white flex items-center gap-2 border-2 border-#8dce19 bg-transparent hover:bg-#8dce19 hover:border-transparent duration-500`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SecondaryBtn
