import React from 'react'

const Button = ({styles}) => {
  return (
    <a href="http://localhost:5173/contact%20us" rel="noopener noreferrer">
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
    </a>
  )
}

export default Button