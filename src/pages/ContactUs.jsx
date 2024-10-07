import React from 'react'
import styles from '../style'
import { Navbar } from '../components'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {
   

    
    return (
        <div className='bg-primary w-full overflow-hidden'>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center'> Contact Us</h1>
            <div className="flex flex-wrap sm:justify-start justify-between w-full relative z-[1] items-center ">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <h2 className='font-poppins font-semibold ss:text-[32px] text-[10px] text-blue-300 ss:leading-[50px] leading-[25px] text-center'>"We are always ready to help you."</h2>
                </div>
            </div>

            <ContactForm />


            
        </div>
        </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
      </div>
    )
}

export default ContactUs