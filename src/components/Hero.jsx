import React from 'react';
import styles from "../style";
import GetStarted from './GetStarted';
import { robot, robotimage } from '../assets';

const Hero = ({ darkMode}) => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} ${darkMode ? 'bg-primary text-white' : 'bg-lightPrimary text-black'}`}> {/* Light background */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ${darkMode ? 'text-white' : 'text-black'} ss:leading-[100px] leading-[75px]`}> {/* Changed text color to black */}
          The Next
          <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Generation</span> {" "}
        </h1>
        {/* <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div> */}
      </div>

      <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] ${darkMode ? 'text-white' : 'text-black'} ss:leading-[100px] leading-[75px]`}> {/* Changed text color to black */}
        Robotics and Automation.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ${darkMode ? 'text-white' : 'text-gray-700'}`}> {/* Changed text color to a darker shade for better contrast */}
        Our team of experts uses methodology to identify the robots and automation most likely to fit your needs. We examine annual percentage rates, annual fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robotimage} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
      <div className='absolute z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
    </div>
  </section>
);

export default Hero;
