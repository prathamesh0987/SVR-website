import React from 'react'

const AboutCard = ({darkMode,content,title}) =>(
    <div className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  feedback-card`}>
         <h1 className={`font-poppins font-semibold text-[20px] leading-[32px] ${darkMode ? ' text-white' : 'text-black'}`}>
            {title}
          </h1>
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>
        {content}
      </p>

      </div>
  )

export default AboutCard

