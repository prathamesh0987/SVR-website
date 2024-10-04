import React from 'react'
import styles from '../style'
import { Navbar } from '../components'
import Footer from '../components/Footer'


const ResearchPage = () => (
    <div className='bg-primary w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center'> Publication</h1>

            <h4 className='font-poppins font-normal text-[18px] leading-[32px] text-white text-center my-10'>
            SVR Robotics is a young organization of young people and creative minds, mentored by industry veterans. Our association with VSSC ISRO is clear pointer to our growth journey as Value Added Partnership for indigenously developed engineering simulation and analysis software FEAST. With this partnership in place, until now we were able to reach more than 1000 engineers and engineering organization to use this software for their engineering and development work within a year. We have trained many engineers on this software. Apart from this We have completed 5000 hours of simulation tasks and solved many engineering problems in the domain of structural analysis, CFD, multibody dynamics, thermal analysis, etc.
                <br className="sm:block hidden"/>
            SVR Robotics is indigenously researching and developing various robotics and automation products. This includes Multi-Gripper robot, pick and place robotic arms, robotic leech for horizontal pipe inspection, automated Split-Hopkinson Pressure Bar Test bench with elevated temperature provision, miniature grippers, lightweight flexible link robot, force sensor, mobile robots, laser fence, ECG (Easy Cardiograph), and products for Atal Tinkering & Innovation Labs, etc.
            </h4>
        </div>
        
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>

      </div>
)


export default ResearchPage